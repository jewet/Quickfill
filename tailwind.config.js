/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",  // Adjust based on your folder structure
  ],
      theme: {
        extend: {
            colors: {
                'primary': '#FFD366',
                'lightprimary': '#FFECBE',
                'offwhite': '#F7F6F2',
                    },
             spacing: {
                 '2x': '20px',
                 '3x': '30px',
                    },
             borderRadius: {
                 '4xl': '40px',
                    },
                    fontFamily:{
                      pregular: ["regular"],
                      pmedium: ["medium"],
                      pbold: ["bold"],
                      psemibold: ["semibold"],
                    },
                    fontSize: {
                      xxs: '10px',
                      xs: '12px',
                      small: '14px',
                    }
                },
                
      },
      plugins: [],
    };