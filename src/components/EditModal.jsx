import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import * as FiIcons from 'react-icons/fi';
import SafeIcon from '../common/SafeIcon';

const { FiX, FiMail, FiCheck } = FiIcons;

const EditModal = ({ isOpen, post, onClose }) => {
  const [formData, setFormData] = useState({
    email: '',
    changes: '',
    postingPreference: 'schedule',
    agreeToPayment: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitted(true);
      setTimeout(() => {
        onClose();
        setIsSubmitted(false);
        setFormData({
          email: '',
          changes: '',
          postingPreference: 'schedule',
          agreeToPayment: false
        });
      }, 2000);
    }, 500);
  };

  if (!isOpen || !post) return null;

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
          className="bg-white rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden flex flex-col lg:flex-row"
          onClick={(e) => e.stopPropagation()}
          style={{ boxShadow: '0 20px 60px rgba(0,0,0,0.15)' }}
        >
          {!isSubmitted ? (
            <>
              {/* Image Section - Left Side or Top on Mobile */}
              <div className="flex-1 lg:min-h-[500px] h-64 lg:h-auto bg-gray-50 lg:rounded-l-2xl rounded-t-2xl lg:rounded-t-none overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center' }}
                />
              </div>

              {/* Form Section - Right Side or Bottom on Mobile */}
              <div className="flex-1 p-6 flex flex-col overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold" style={{ color: '#1e1e1e' }}>
                    Edit Post for You
                  </h3>
                  <button
                    onClick={onClose}
                    className="p-2.5 hover:bg-gray-100 rounded-full transition-colors duration-200"
                  >
                    <SafeIcon icon={FiX} className="w-5 h-5 text-gray-500" />
                  </button>
                </div>

                <div
                  className="rounded-xl p-4 mb-6 border-2"
                  style={{
                    backgroundColor: '#f5f5f5',
                    borderColor: '#ffde59',
                    boxShadow: '0 4px 12px rgba(255,222,89,0.1)'
                  }}
                >
                  <p className="text-sm leading-relaxed font-medium" style={{ color: '#444444' }}>
                    <strong style={{ color: '#1e1e1e' }}>Note:</strong> We will collaborate via email to finalize your edit. You'll receive an email from us shortly to confirm your request, which will include a payment link. If you have any files to send, you can do so then. Once paid, your first edit is typically ready within 48 business hours.
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 flex-1">
                  <div className="relative">
                    <SafeIcon
                      icon={FiMail}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5"
                      style={{ color: '#ff6363' }}
                    />
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:shadow-lg"
                      style={{ backgroundColor: '#f5f5f5', color: '#1e1e1e' }}
                      onFocus={(e) => e.target.style.borderColor = '#ffde59'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>

                  <div>
                    <textarea
                      name="changes"
                      placeholder="What would you like changed?"
                      value={formData.changes}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl font-medium transition-all duration-200 focus:outline-none focus:shadow-lg resize-none"
                      style={{ backgroundColor: '#f5f5f5', color: '#1e1e1e' }}
                      onFocus={(e) => e.target.style.borderColor = '#ffde59'}
                      onBlur={(e) => e.target.style.borderColor = '#e5e7eb'}
                      required
                    />
                  </div>

                  <div className="space-y-3">
                    <label className="block text-sm font-bold" style={{ color: '#1e1e1e' }}>
                      Posting Preference
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="postingPreference"
                          value="schedule"
                          checked={formData.postingPreference === 'schedule'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-yellow-500 border-2 border-gray-300 focus:ring-yellow-500"
                        />
                        <span className="text-sm font-medium" style={{ color: '#444444' }}>
                          Schedule this post for me
                        </span>
                      </label>
                      <label className="flex items-center gap-3 cursor-pointer">
                        <input
                          type="radio"
                          name="postingPreference"
                          value="file"
                          checked={formData.postingPreference === 'file'}
                          onChange={handleInputChange}
                          className="w-4 h-4 text-yellow-500 border-2 border-gray-300 focus:ring-yellow-500"
                        />
                        <span className="text-sm font-medium" style={{ color: '#444444' }}>
                          I'll post it myself (send me the file)
                        </span>
                      </label>
                    </div>
                  </div>

                  <div className="pt-2">
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input
                        type="checkbox"
                        name="agreeToPayment"
                        checked={formData.agreeToPayment}
                        onChange={handleInputChange}
                        className="w-4 h-4 mt-1 text-yellow-500 border-2 border-gray-300 rounded focus:ring-yellow-500"
                        required
                      />
                      <span className="text-sm font-medium leading-relaxed" style={{ color: '#444444' }}>
                        I understand there is a $25 edit cost.
                      </span>
                    </label>
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.02, y: -2 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full text-white py-4 rounded-xl font-bold transition-all duration-200 transform hover:-translate-y-1 mt-6"
                    style={{
                      background: 'linear-gradient(135deg, #ff6363 0%, #ff4757 100%)',
                      boxShadow: '0 4px 15px rgba(255,99,99,0.3)'
                    }}
                  >
                    Submit Request
                  </motion.button>
                </form>
              </div>
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-8 flex-1 flex flex-col items-center justify-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6"
                style={{
                  background: 'linear-gradient(135deg, #ffde59 0%, #ffd700 100%)',
                  boxShadow: '0 8px 25px rgba(255,222,89,0.3)'
                }}
              >
                <SafeIcon icon={FiCheck} className="w-10 h-10 text-gray-800" />
              </motion.div>
              <h3 className="text-2xl font-bold mb-3" style={{ color: '#1e1e1e' }}>
                Thank You!
              </h3>
              <p className="leading-relaxed font-medium" style={{ color: '#444444' }}>
                Your request has been submitted successfully. We'll be in touch soon with a payment link and to discuss your edit requirements.
              </p>
            </motion.div>
          )}
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default EditModal;