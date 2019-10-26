const tailwindcss = require('tailwindcss');
module.exports = {
    plugins: [
        require('postcss-import'),
        require('autoprefixer'),
        require('postcss-nested'),
        tailwindcss('./tailwind.js'),
    ],
};