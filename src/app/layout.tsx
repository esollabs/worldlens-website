import { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  applicationName: 'Worldlens',
  title: 'Worldlens',
  description:
    'Step into the future where real-world assets meet the new digital era. By leveraging the power of DePIN, AI, and blockchain technology, Worldlens unlocks possibilities for people to interact with blockchain by scanning real-life products.',
  metadataBase: new URL(String(process.env.NEXT_PUBLIC_APP_HOST)),
  openGraph: {
    title: 'Worldlens',
    siteName: 'WORLDLENS',
    url: process.env.NEXT_PUBLIC_APP_HOST,
    description:
      'Step into the future where real-world assets meet the new digital era. By leveraging the power of DePIN, AI, and blockchain technology, Worldlens unlocks possibilities for people to interact with blockchain by scanning real-life products.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        {children}
        <ToastContainer />
      </body>
    </html>
  )
}
