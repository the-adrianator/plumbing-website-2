import type { Metadata } from 'next'
import { Montserrat, Open_Sans } from 'next/font/google'
import './globals.css'
import EmergencyBanner from '@/components/layout/EmergencyBanner'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import LiveChatWidget from '@/components/common/LiveChatWidget'
import ScrollToTopButton from '@/components/common/ScrollToTopButton'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-montserrat',
  display: 'swap',
  weight: ['400', '500', '600', '700']
})

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open-sans',
  display: 'swap',
  weight: ['400', '600']
})

export const metadata: Metadata = {
  title: 'Nela Plumbing & Gas Services | 24/7 Emergency Plumbers',
  description: 'Nela Plumbing & Gas Services - 24/7 Emergency Plumbing, Boiler Installation, and Gas Safety Certification. Fast, reliable, and fully certified plumbers.',
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${openSans.variable} font-sans`}>
        <EmergencyBanner />
        <Header />
        <main>{children}</main>
        <Footer />
        <LiveChatWidget />
        <ScrollToTopButton />
      </body>
    </html>
  )
}
