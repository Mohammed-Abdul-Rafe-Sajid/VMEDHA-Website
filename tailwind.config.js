/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'royal': {
          50: '#f0f4ff',
          100: '#e0e9ff',
          200: '#c1d3ff',
          300: '#a2bdff',
          400: '#8ba7ff',
          500: '#6b91ff',
          600: '#4a74ff',
          700: '#2e5aff',
          800: '#1e40e8',
          900: '#1a35cc',
        },
      },
      backgroundImage: {
        'gradient-royal': 'linear-gradient(135deg, #1a35cc 0%, #2e5aff 50%, #a2bdff 100%)',
        'gradient-accent': 'linear-gradient(135deg, #2e5aff 0%, #4a74ff 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(74, 116, 255, 0.5)' },
          '50%': { textShadow: '0 0 30px rgba(74, 116, 255, 0.8)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(74, 116, 255, 0.3)' },
          '50%': { boxShadow: '0 0 30px rgba(74, 116, 255, 0.6)' },
        },
      },
    },
  },
  plugins: [],
}
