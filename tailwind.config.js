/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffde59',
        secondary: '#ff6363',
        background: '#ffffff',
        heading: '#1e1e1e',
        text: '#444444',
        card: '#f5f5f5',
      },
      animation: {
        'fade-in': 'fadeIn 0.3s ease-in-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'bounce-subtle': 'bounceSubtle 0.6s ease-out',
        'heart-beat': 'heartBeat 0.6s ease-in-out',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bounceSubtle: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(-2px)' },
        },
        heartBeat: {
          '0%': { transform: 'scale(1)' },
          '14%': { transform: 'scale(1.4)' },
          '28%': { transform: 'scale(1)' },
          '42%': { transform: 'scale(1.4)' },
          '70%': { transform: 'scale(1)' },
        },
        pulseGlow: {
          '0%, 100%': { 
            boxShadow: '0 4px 20px rgba(255, 222, 89, 0.3)' 
          },
          '50%': { 
            boxShadow: '0 8px 40px rgba(255, 222, 89, 0.6)' 
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      screens: {
        '2xl': '1536px',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.08)',
        'soft-lg': '0 8px 30px rgba(0, 0, 0, 0.12)',
        'soft-xl': '0 20px 60px rgba(0, 0, 0, 0.15)',
        'primary': '0 4px 15px rgba(255, 222, 89, 0.3)',
        'secondary': '0 4px 15px rgba(255, 99, 99, 0.3)',
      },
    },
  },
  plugins: [],
}