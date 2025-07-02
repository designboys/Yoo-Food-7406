import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiEdit3, FiDownload, FiCopy, FiCheck, FiHeart, FiPlay, FiShare } = FiIcons;

const PostCard = ({ post, onShare, onEdit }) => {
  const [copied, setCopied] = useState(false);
  const [liked, setLiked] = useState(false);
  const [likeCount, setLikeCount] = useState(Math.floor(Math.random() * 500) + 50);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const imgRef = useRef(null);

  const handleImageClick = () => {
    if (window.confirm('Download this image?')) {
      const link = document.createElement('a');
      link.href = post.image;
      link.download = `${post.title.replace(/\s+/g, '_')}.${post.isAnimated ? 'gif' : 'jpg'}`;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const handleCopyCaption = async () => {
    try {
      await navigator.clipboard.writeText(post.caption);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const handleLike = () => {
    setLiked(!liked);
    setLikeCount(prev => liked ? prev - 1 : prev + 1);
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(true);
  };

  // Force GIF animation restart on hover
  const handleMouseEnter = () => {
    if (post.isAnimated && imgRef.current) {
      const src = imgRef.current.src;
      imgRef.current.src = '';
      imgRef.current.src = src;
    }
  };

  // Ensure GIFs load immediately and properly
  useEffect(() => {
    if (post.isAnimated && imgRef.current) {
      imgRef.current.loading = 'eager';
      // Force reload to ensure animation starts
      const src = imgRef.current.src;
      imgRef.current.src = '';
      setTimeout(() => {
        imgRef.current.src = src;
      }, 10);
    }
  }, [post.isAnimated, post.image]);

  const isAnimatedImage = post.isAnimated || post.image.includes('.gif') || post.image.includes('giphy.com');

  return (
    <motion.div
      whileHover={{ y: -6, scale: 1.02 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-gray-100"
      style={{ boxShadow: '0 4px 20px rgba(0,0,0,0.08)' }}
      onMouseEnter={handleMouseEnter}
    >
      {/* Full Width/Height Image Container */}
      <div className="relative w-full h-80 overflow-hidden bg-gray-100">
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center z-10">
            <div className="text-gray-400 text-sm">Loading...</div>
          </div>
        )}
        
        {imageError && (
          <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-10">
            <div className="text-gray-500 text-sm text-center p-4">
              <div className="text-gray-400 mb-2 text-4xl">📷</div>
              <div>Image not available</div>
            </div>
          </div>
        )}

        {/* Main Image - Full Coverage */}
        <img
          ref={imgRef}
          src={post.image}
          alt={post.title}
          className={`w-full h-full object-cover cursor-pointer transform group-hover:scale-105 transition-transform duration-300 ${!imageLoaded ? 'opacity-0' : 'opacity-100'}`}
          onClick={handleImageClick}
          onLoad={handleImageLoad}
          onError={handleImageError}
          loading={isAnimatedImage ? 'eager' : 'lazy'}
          style={{ 
            imageRendering: isAnimatedImage ? 'auto' : 'auto',
            objectFit: 'cover',
            objectPosition: 'center',
            width: '100%',
            height: '100%',
            display: 'block'
          }}
          {...(isAnimatedImage && {
            'data-no-optimize': 'true',
            'data-no-webp': 'true',
            'data-no-lazy': 'true'
          })}
        />

        {/* GIF Indicator */}
        {isAnimatedImage && imageLoaded && !imageError && (
          <div className="absolute top-4 left-4 bg-black bg-opacity-80 text-white px-3 py-1.5 rounded-full text-xs font-bold flex items-center gap-1.5 z-20">
            <SafeIcon icon={FiPlay} className="w-3 h-3" />
            GIF
          </div>
        )}

        {/* Hover Download Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileHover={{ opacity: 1, scale: 1 }}
            className="bg-white bg-opacity-95 rounded-full p-4 opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-xl"
          >
            <SafeIcon icon={FiDownload} className="w-6 h-6 text-gray-700" />
          </motion.div>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-6">
        {/* Action Buttons Row - All on Same Line */}
        <div className="flex items-center gap-3 mb-4">
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onShare(post)}
            className="flex-1 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #323B43 0%, #2b3137 100%)',
              boxShadow: '0 4px 15px rgba(50,59,67,0.3)'
            }}
          >
            <SafeIcon icon={FiShare} className="w-4 h-4" />
            Buffer
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onEdit(post)}
            className="flex-1 text-white px-4 py-3 rounded-xl font-bold hover:shadow-lg transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #ff6363 0%, #ff4757 100%)',
              boxShadow: '0 4px 15px rgba(255,99,99,0.3)'
            }}
          >
            <SafeIcon icon={FiEdit3} className="w-4 h-4" />
            Edit
          </motion.button>

          {/* Like Button - Now Aligned on Same Row */}
          <motion.button
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLike}
            className={`flex items-center gap-2 px-4 py-3 rounded-xl font-bold transition-all duration-200 whitespace-nowrap ${
              liked 
                ? 'text-white shadow-lg' 
                : 'bg-gray-50 text-gray-600 border border-gray-200 hover:bg-gray-100 shadow-sm'
            }`}
            style={liked ? {
              background: 'linear-gradient(135deg, #ff6363 0%, #ff4757 100%)',
              boxShadow: '0 4px 12px rgba(255,99,99,0.3)'
            } : {}}
          >
            <motion.div
              animate={{ scale: liked ? [1, 1.4, 1] : 1 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <SafeIcon icon={FiHeart} className={`w-5 h-5 ${liked ? 'fill-current' : ''}`} />
            </motion.div>
            <span className="font-bold text-sm">{likeCount.toLocaleString()}</span>
          </motion.button>
        </div>

        {/* Caption Section */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium" style={{ color: '#444444' }}>
              📋 Copy this caption to post on your own social channels:
            </span>
          </div>

          <div className="relative">
            <div
              className="rounded-xl p-4 cursor-pointer hover:shadow-md transition-all duration-200 border border-gray-200"
              onClick={handleCopyCaption}
              style={{ backgroundColor: '#f5f5f5' }}
            >
              <p className="text-sm leading-relaxed" style={{ color: '#444444' }}>
                {post.caption}
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleCopyCaption}
              className={`absolute top-3 right-3 p-2.5 rounded-lg transition-all duration-200 font-medium ${
                copied 
                  ? 'text-white shadow-lg' 
                  : 'bg-white text-gray-500 hover:bg-gray-50 hover:text-gray-700 shadow-sm border border-gray-200'
              }`}
              style={copied ? {
                background: 'linear-gradient(135deg, #ffde59 0%, #ffd700 100%)',
                boxShadow: '0 4px 12px rgba(255,222,89,0.3)'
              } : {}}
            >
              <SafeIcon icon={copied ? FiCheck : FiCopy} className={`w-4 h-4 ${copied ? 'text-gray-800' : ''}`} />
            </motion.button>
          </div>

          {copied && (
            <motion.p
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              className="text-sm mt-3 font-bold"
              style={{ color: '#ff6363' }}
            >
              ✅ Caption copied to clipboard!
            </motion.p>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default PostCard;