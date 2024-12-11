/** @type {import('tailwindcss').Config} */
 

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      xs: '240px',
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px',
    },
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
"primary": "#570DF8",
"secondary": "#F000B8",
"accent": "#37CDBE",
"neutral": "#3A4256",
"base-100": "#FFFFFF",
"info": "#3ABFF8",
"success": "#36D399",
"warning": "#FBBD23",   
"error": "#e5e5e5",
        },
      },
      
    ],
  },
  plugins: [require("daisyui")],
}
