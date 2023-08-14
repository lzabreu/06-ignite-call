import { globalStyles } from '@/styles/global'
import { Roboto } from 'next/font/google'
import AppHome from './home'

globalStyles()

const inter = Roboto({ subsets: ['latin'], weight:[ '400', '500','700'] })

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <AppHome />
    </main>
    
  )
}
