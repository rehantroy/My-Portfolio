/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cyan: '#00bcd4',
        purple: '#7c3aed',
        amber: '#f59e0b',
        green: '#4ade80',
        muted: '#666666',
        body: '#bbbbbb',
        heading: '#ffffff',
        surface: '#1a1a2e',
        card: '#111111',
        base: '#0a0a0a',
      },
      borderRadius: {
        card: '14px',
        pill: '20px',
        chip: '8px',
      },
      boxShadow: {
        'soft-glow': '0 0 30px rgba(0, 188, 212, 0.25)',
      },
      keyframes: {
        'avatar-pulse': {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 188, 212, 0.5)' },
          '50%': { boxShadow: '0 0 0 18px rgba(0, 188, 212, 0)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        'avatar-pulse': 'avatar-pulse 2.4s ease-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

