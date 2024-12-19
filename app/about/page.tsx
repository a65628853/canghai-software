'use client'
import { motion } from 'framer-motion'
import About from '@/components/About'
import Team from '@/components/Team'
import Culture from '@/components/Culture'
import History from '@/components/History'

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      {/* 公司简介 */}
      <section id="about" className="scroll-mt-24">
        <About />
      </section>

      {/* 企业文化 */}
      <section id="culture" className="scroll-mt-24">
        <Culture />
      </section>

      {/* 技术团队 */}
      <section id="team" className="scroll-mt-24">
        <Team />
      </section>

      {/* 发展历程 */}
      <section id="history" className="scroll-mt-24">
        <History />
      </section>
    </main>
  )
} 