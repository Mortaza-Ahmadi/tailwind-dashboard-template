module.exports = ({ env }) => ({
  plugins: [
    require('tailwindcss')({
      config: './src/css/tailwind.config.js'
    }),
    require('autoprefixer')()
  ],
  
})

// module.exports = {
//   // other Tailwind CSS configurations...
//   plugins: [
//     // other plugins...
//     require('@tailwindcss/forms'),
//   ],
// }
