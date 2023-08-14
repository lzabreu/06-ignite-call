import { globalCss } from '@ignite-ui/react'

export const globalStyles = globalCss({
	'*': {
		margin: 0,
		padding: 0,
		boxSizing: 'border-box',
		'-webkit-font-smoothing': 'antialiased',
	},
	body: {
		backgroundColor: '$gray900',
		color: '$gray100',
	},
})
