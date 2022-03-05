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
                '168': '38rem'
            },
            width: {
                'project-card': '756px',
                '200': '50rem',
                '168': '38rem'
            },
            colors: {
                'primary': '#4B4C60',
                'primary-faded': 'rgba(75, 76, 96, 0.65)',
                'secondary': '#2D283E',
                'secondary-faded': 'rgba(45, 40, 62, 0.65)',
                'popup-faded': 'rgba(44, 29, 98, 0.45)',

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
