/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}' ,'./hooks/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors : {
        primary: '#F7E1D7',
        blossom: '#EDAFB8',
        'blossom-55': 'rgb(237,175,184,0.5)',
        'blossom-25': 'rgb(237,175,184,0.25)',
        lightgreen: '#dedbd2',
        ashgray: '#b0c4b1',
        outer: '#4a5759',
        logo: '#f28482',
        grass: '#84a59d',
        parag: '#6c584c',
        danger: '#C72427',
      },

      fontFamily: {
        dongleLight: ["Dongle-Light"],
        dongleBold: ["Dongle-Bold"],
        dongle: ["Dongle"],
        jua: ["Jua"],
        gaegu: ["Gaegu"],
        gaeguLight: ["Gaegu-Light"],
        gaeguBold: ["Gaegu-Bold"],
      }
    },
  },
  plugins: [],
};

