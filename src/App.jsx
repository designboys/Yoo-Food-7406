import React from 'react';
import PostGallery from './components/PostGallery';
import './App.css';

function App() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: '#ffffff' }}>
      <header className="fixed top-0 left-0 right-0 bg-white border-b-2 z-40" 
              style={{ 
                borderColor: '#ffde59', 
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)' 
              }}>
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-4">
            <img 
              src="https://quest-media-storage-bucket.s3.us-east-2.amazonaws.com/1751323276923-yoo-logo%20%281%29.png" 
              alt="Yoo Logo" 
              className="h-10 w-auto" 
            />
            <div>
              <h1 className="text-2xl font-bold" style={{ color: '#1e1e1e' }}>
                Social Post Gallery
              </h1>
              <p className="text-sm font-medium" style={{ color: '#444444' }}>
                Discover, share, and customize amazing social media content
              </p>
            </div>
          </div>
        </div>
      </header>

      <main className="w-full pt-24 pb-8">
        <PostGallery />
      </main>
    </div>
  );
}

export default App;