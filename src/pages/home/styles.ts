import { Heading, Text, styled } from '@ignite-ui/react'

export const HomeContainer = styled('div', {
	display: 'flex',
	height: '100vh',
	alignItems: 'center',
	gap: '$20',
	marginLeft: 'auto',
	maxWidth: 'calc(100vw - (100vw - 1160px) / 2)',
})

export const Hero = styled('div', {
	maxWidth: '480px',
	padding: '0 $10',

	[`${Heading}`]: {
		'@media (max-width: 680px)': {
			fontSize: '$6xl',
		},
	},

	[`${Text}`]: {
		marginTop: '$2',
		color: '$gray200',
	},
})

export const Preview = styled('div', {
	paddingRight: '$8',
	overflow: 'hidden',

	'@media (max-width: 680px)': {
		display: 'none',
	},
})
