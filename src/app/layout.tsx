import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700', '900']
})

export const metadata: Metadata = {
  title: 'Age Calculator Form',
  description: 'Front-end mentor challenge for junior developers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`w-full h-screen flex justify-center items-center ${poppins.className} bg-slate-200`}>{children}</body>
    </html>
  )
}
