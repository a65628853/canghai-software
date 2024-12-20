'use client'
import { motion } from 'framer-motion'

export default function WaveDecoration() {
  return (
    <div className="absolute bottom-0 left-0 right-0 pointer-events-none">
      <div className="relative h-[100px] md:h-[200px] bg-blue-600">
        <svg className="waves absolute bottom-full w-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 24 150 28" preserveAspectRatio="none">
          <defs>
            <motion.path 
              id="wave" 
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
              animate={{
                d: [
                  "M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z",
                  "M-160 34c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
                ]
              }}
              transition={{
                duration: 7,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut"
              }}
            />
          </defs>
          <g className="parallax">
            <use href="#wave" x="48" y="0" fill="rgba(255,255,255,0.7)" />
            <use href="#wave" x="48" y="3" fill="rgba(255,255,255,0.5)" />
            <use href="#wave" x="48" y="5" fill="rgba(255,255,255,0.3)" />
            <use href="#wave" x="48" y="7" fill="#ffffff" />
          </g>
        </svg>
      </div>

      <style jsx>{`
        .waves {
          width: 100%;
          height: 100px;
          min-height: 100px;
          max-height: 150px;
        }

        .parallax > use {
          animation: move-forever 12s cubic-bezier(0.55, 0.5, 0.45, 0.5) infinite;
        }
        .parallax > use:nth-child(1) {
          animation-delay: -2s;
        }
        .parallax > use:nth-child(2) {
          animation-delay: -3s;
          animation-duration: 10s;
        }
        .parallax > use:nth-child(3) {
          animation-delay: -4s;
          animation-duration: 8s;
        }
        .parallax > use:nth-child(4) {
          animation-delay: -5s;
          animation-duration: 6s;
        }

        @keyframes move-forever {
          0% {
            transform: translate3d(-90px, 0, 0);
          }
          100% {
            transform: translate3d(85px, 0, 0);
          }
        }

        @media (max-width: 768px) {
          .waves {
            height: 40px;
            min-height: 40px;
          }
        }
      `}</style>
    </div>
  )
} 