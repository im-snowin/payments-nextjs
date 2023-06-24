
import Button from '@/components/ui/Button'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <h1>Hello</h1>
      <Button>click</Button>
    </main>
  )
}