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
    darkMode: "class"
  };