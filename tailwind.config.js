module.exports = {
	purge: [
		'./src/**/*.njk',
		'./src/**/*.js',
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
			  'primary': '#243c5a',
			  'brownbutton': '#9a825c',
			  'colorFooter': '#0a1e32',
			  'backgroundMain':'#fffff3',
			  'textcolorP': '#5c6469',
			  'backgroundButtonSwipper':'#e3b151',
			  
			 
			},
			fontFamily: {
				'sans': 'Heebo, sans-serif',
				'letraPrincipal':'Ibarra Real Nova'	,
				'letraHeader':'Dancing Script'		
			}
		},
		container: {
			center: true,
			padding: '1.5rem',
		}
	},
	variants: {},
	plugins: [],
}