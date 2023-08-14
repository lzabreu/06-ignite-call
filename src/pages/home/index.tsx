import { Heading, Text } from '@ignite-ui/react'
import { Hero, HomeContainer, Preview } from './styles'
import previewImage from '../../assets/app-preview.png'
import Image from 'next/image'

export default function AppHome() {
	return (
		<HomeContainer>
			<Hero>
				<Heading size='4xl'>Agendamento descomplicado</Heading>
				<Text size='xl'>
					Conecte seu calendário e permita que as pessoas marquem agendamentos
					no seu tempo livre.
				</Text>
			</Hero>
			<Preview>
				<Image
					src={previewImage}
					alt='Calendário mostrando o funcionamento do App'
					height={400}
					quality={100}
					priority
				/>
			</Preview>
		</HomeContainer>
	)
}
