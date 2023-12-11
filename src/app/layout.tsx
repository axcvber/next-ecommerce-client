import '@/styles/globals.css'
import { Open_Sans } from 'next/font/google'

import ModalProvider from '@/providers/modal-provider'
import ToastProvider from '@/providers/toast-provider'
import Navbar from '@/components/navigation/navbar'
import Footer from '@/components/footer'
import { cn } from '@/lib/utils'

const open_sans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-open_sans',
})

export const metadata = {
  title: 'Store',
  description: 'Store - The place for all your purchases.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={cn('min-h-screen bg-background flex flex-col font-sans antialiased', open_sans.variable)}>
        <ToastProvider />
        <ModalProvider />
        <Navbar />
        <main className='flex-1'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
