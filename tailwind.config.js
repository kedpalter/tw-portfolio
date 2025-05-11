module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{html,js}",
      "./node_modules/tw-elements/js/**/*.js",
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            DEFAULT: '#1e40af',   // cấu hình màu primary
            light: '#3b82f6',     // có thể cấu hình sâu hơn về màu sắc của primary
            dark: 'red',     
          },
         
        },
      },
    },
    plugins: [require("tw-elements/plugin.cjs")],
    // thêm class="dark" trong thẻ HTML (land="en" class="dark") để kích hoạt thuộc tính darkmodez
    // darkMode: "class" dùng cho trường hợp nhấn nút chuyển theme, darkMode: "media" dùng cho trường hợp chạy darkMode theo trình duyệt hoặc theo setting window
    darkMode: "class"
  };