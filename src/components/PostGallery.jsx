import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PostCard from './PostCard';
import ShareModal from './ShareModal';
import EditModal from './EditModal';
import { generatePosts } from '../data/posts';

const PostGallery = () => {
  const [posts, setPosts] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(20);
  const [shareModal, setShareModal] = useState({ isOpen: false, post: null });
  const [editModal, setEditModal] = useState({ isOpen: false, post: null });

  // Generate posts with unique images only
  useEffect(() => {
    const allPosts = generatePosts();
    const uniquePosts = [];
    const seenImages = new Set();

    for (const post of allPosts) {
      if (!seenImages.has(post.image)) {
        seenImages.add(post.image);
        uniquePosts.push(post);
      }
    }

    setPosts(uniquePosts);
  }, []);

  const handleShare = (post) => {
    setShareModal({ isOpen: true, post });
  };

  const handleEdit = (post) => {
    setEditModal({ isOpen: true, post });
  };

  const handleLoadMore = () => {
    setVisiblePosts(prev => Math.min(prev + 20, posts.length));
  };

  const displayedPosts = posts.slice(0, visiblePosts);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        <AnimatePresence>
          {displayedPosts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ delay: index * 0.05 }}
              className="w-full"
            >
              <PostCard
                post={post}
                onShare={handleShare}
                onEdit={handleEdit}
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {visiblePosts < posts.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex justify-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -3 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLoadMore}
            className="text-white px-10 py-4 rounded-full font-bold transition-all duration-200 transform hover:-translate-y-1"
            style={{
              background: 'linear-gradient(135deg, #ffde59 0%, #ffd700 100%)',
              boxShadow: '0 6px 20px rgba(255,222,89,0.4)',
              color: '#1e1e1e'
            }}
          >
            Load More Posts ({posts.length - visiblePosts} remaining)
          </motion.button>
        </motion.div>
      )}

      <ShareModal
        isOpen={shareModal.isOpen}
        post={shareModal.post}
        onClose={() => setShareModal({ isOpen: false, post: null })}
      />

      <EditModal
        isOpen={editModal.isOpen}
        post={editModal.post}
        onClose={() => setEditModal({ isOpen: false, post: null })}
      />
    </div>
  );
};

export default PostGallery;