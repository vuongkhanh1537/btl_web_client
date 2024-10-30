/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // Cấu hình dark mode sử dụng class
  theme: {
    extend: {
      // Tùy chỉnh màu sắc cho dark mode nếu cần
      colors: {
        primary: {
          light: '#4F46E5', // màu chủ đạo cho light mode
          dark: '#6366F1'   // màu chủ đạo cho dark mode
        }
      }
    },
  },
  plugins: [],
}

