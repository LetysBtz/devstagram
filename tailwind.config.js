/** @type {import('tailwindcss').Config} */
export default {
  content: [
    // Archivos en los que se agregan clases de tailwindcss
    "./resources/**/*.blade.php",
    "./resources/**/*.js",
    "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php"
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

