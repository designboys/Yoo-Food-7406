import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiShare } = FiIcons;

const ShareModal = ({ isOpen, post, onClose }) => {
  if (!isOpen || !post) return null;

  const currentUrl = window.location.href;
  const encodedUrl = encodeURIComponent(currentUrl);
  const encodedTitle = encodeURIComponent(post.title);
  const encodedDescription = encodeURIComponent(post.description);
  const encodedImage = encodeURIComponent(post.image);

  const bufferUrl = `https://buffer.com/add?text=${encodedTitle} - ${encodedDescription}&url=${encodedUrl}&picture=${encodedImage}`;

  const handleBufferShare = () => {
    window.open(bufferUrl, '_blank', 'width=600,height=400,scrollbars=yes,resizable=yes');
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
        >
          <div className="p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold" style={{ color: '#1e1e1e' }}>
                Buffer
              </h3>
              <button
                onClick={onClose}
                className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200"
              >
                <SafeIcon icon={FiX} className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div className="mb-6">
              <div className="w-full h-48 bg-gray-100 rounded-xl overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>
            </div>

            <div
              className="rounded-xl p-4 mb-6 border-2"
              style={{
                backgroundColor: '#f5f5f5',
                borderColor: '#323B43',
                boxShadow: '0 4px 12px rgba(50,59,67,0.1)'
              }}
            >
              <p className="text-sm leading-relaxed font-medium" style={{ color: '#444444' }}>
                <strong style={{ color: '#1e1e1e' }}>Buffer Integration:</strong> This will open Buffer in a new tab where you can schedule your post across all your connected social media accounts.
              </p>
            </div>

            <motion.button
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBufferShare}
              className="w-full text-white p-4 rounded-xl font-bold transition-all duration-200 flex items-center justify-center gap-3 transform hover:-translate-y-1"
              style={{
                background: 'linear-gradient(135deg, #323B43 0%, #2b3137 100%)',
                boxShadow: '0 4px 15px rgba(50,59,67,0.3)'
              }}
            >
              <SafeIcon icon={FiShare} className="w-5 h-5" />
              Open in Buffer
            </motion.button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ShareModal;