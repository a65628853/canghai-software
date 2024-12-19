import Hero from '@/components/Hero'
import Stats from '@/components/Stats'
import Advantages from '@/components/Advantages'
import News from '@/components/News'
import CTA from '@/components/CTA'

export default function Home() {
  return (
    <main className="scroll-mt-16">
      <Hero />
      <Stats />
      <Advantages />
      <News />
      <CTA />
    </main>
  )
} 