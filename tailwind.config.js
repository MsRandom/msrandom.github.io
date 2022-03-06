module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    theme: {
        extend: {
            height: {
                '11/12': '91.666667%;',
                '200': '50rem',
                '168': '38rem',
                '112': '28rem'
            },
            width: {
                'project-card': '756px',
                '200': '50rem',
                '168': '38rem',
                '112': '28rem'
            },
            maxWidth: {
                '200': '50rem',
                '168': '38rem',
                '112': '28rem',
                '80': '20rem',
                '16': '4rem'
            },
            maxHeight: {
                '200': '50rem',
                '168': '38rem',
                '112': '28rem',
                '80': '20rem',
                '16': '4rem'
            },
            colors: {
                'primary': '#4B4C60',
                'primary-faded': 'rgba(75, 76, 96, 0.65)',
                'secondary': '#2D283E',
                'secondary-faded': 'rgba(45, 40, 62, 0.65)',
                'popup-faded': 'rgba(70, 64, 86, 0.75)',
                'popup-gradient': 'linear-gradient(17deg, rgba(31,0,99,1) 0%, rgba(182,0,187,1) 100%)',

                'dark-primary': 'rgba(62, 56, 65, 0.96)',
                'white-primary': '#f2f2f2',
                'white-secondary': '#D1D7E0',
                'link-primary': '#d6b7ff',
                'link-hover': '#bb89ff'
            },
            backgroundImage: {
                'purpur': "url('./images/background.jpg')",
                'purpur2': "url('./images/background2.jpg')"
            }
        },
    },
    plugins: [],
}
