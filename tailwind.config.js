module.exports = {
    mode: 'jit',
    content: [
        './src/**/*.{js,jsx,ts,tsx}',
        './public/index.html'
    ],
    theme: {
        extend: {
            height: {
                '11/12': '91.666667%;'
            },
            width: {
                'project-card': '756px'
            },
            colors: {
                'primary': '#4B4C60',
                'primary-faded': 'rgba(75, 76, 96, 0.65)',
                'secondary': '#2D283E',
                'secondary-faded': 'rgba(45, 40, 62, 0.65)',

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
