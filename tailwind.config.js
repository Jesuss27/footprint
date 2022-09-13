/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',],
  theme: {
    colors:{
      primary:"#FFF6C9",
      secondary:"",
      gray:"",
      black:"#000",
      white:"#fff",


    },
    extend: {
      animation:{
        "shift-left":"shiftLeft 0.5s ease",
      },
      keyframes:{
       "shiftLeft":{
          'from' : {
            opacity:"1",
            transform: "translateX(0rem)"
          },
          'to' : {
            opacity:'0',
            transform: "translateX(-2.5rem)"
          }
        },
      },
      backgroundImage:{
        'marketing-img':"url(https://source.unsplash.com/jyoSxjUE22g)",
      },
      maxWidth:{
        "h1":"20ch"
      }
    },
  },
  plugins: [],
}
