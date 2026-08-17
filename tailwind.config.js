/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: '#050508',
        darker: '#000000',
        bat: {
          pureBlack: '#000000',
          black: '#050508',
          slate: '#0b0c12',
          card: '#10111a',
          border: '#26141a',
          red: '#ff003c',
          crimson: '#dc2626',
          brightRed: '#ef4444',
          darkRed: '#991b1b',
          deepRed: '#7f1d1d',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        heading: ['Outfit', 'sans-serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s infinite alternate',
        'flare-pulse': 'flarePulse 2s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-15px)' },
        },
        pulseGlow: {
          '0%': { opacity: '0.4', filter: 'blur(25px)' },
          '100%': { opacity: '0.9', filter: 'blur(45px)' },
        },
        flarePulse: {
          '0%': { opacity: '0.5', filter: 'drop-shadow(0 0 15px rgba(255, 0, 60, 0.4))' },
          '100%': { opacity: '1', filter: 'drop-shadow(0 0 35px rgba(255, 0, 60, 0.8))' },
        }
      },
      boxShadow: {
        'glow-red': '0 0 35px -5px rgba(255, 0, 60, 0.55)',
        'glow-crimson': '0 0 45px -5px rgba(220, 38, 38, 0.6)',
        'glow-bat': '0 0 50px -10px rgba(255, 0, 60, 0.45)',
      }
    },
  },
  plugins: [],
}
