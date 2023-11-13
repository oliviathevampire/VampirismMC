import Navbar from '@components/Navbar'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <div className="bg-black text-white flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
              {children}
          </main>
        </div>
      </body>
    </html>
  )
}
