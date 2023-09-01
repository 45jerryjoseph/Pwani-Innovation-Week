import '../styles/scss/theme.scss'
import '../styles/globals.css'
import { Inter } from 'next/font/google'
import NavBar from '@/components/layout/NavBar'
import Footer from '@/components/layout/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Pwani Innovation Week',
  description: 'Pwani Innovation Week 2023 - Sailing Beyond Borders',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="container">

        {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
