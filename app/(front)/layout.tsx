import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function FrontLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  )
} 