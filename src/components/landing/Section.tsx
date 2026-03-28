import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import type { SectionProps } from "@/types"

const HERO_IMAGE = "https://cdn.poehali.dev/projects/17f76bb7-3ead-4b5d-b40c-924c61e3092a/files/feb5d20a-3618-439b-bdaa-bcbeb3b8b808.jpg"

export default function Section({ id, title, subtitle, content, isActive, showButton, buttonText }: SectionProps) {
  const isHero = id === 'hero'

  return (
    <section id={id} className="relative h-screen w-full snap-start flex flex-col justify-center p-8 md:p-16 lg:p-24 overflow-hidden">
      {isHero && (
        <motion.div
          className="absolute right-0 top-0 h-full w-1/2 pointer-events-none hidden md:block"
          initial={{ opacity: 0, x: 80 }}
          animate={isActive ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="absolute inset-0"
            style={{
              background: 'linear-gradient(to right, #000 0%, transparent 30%)',
              zIndex: 1,
            }}
          />
          <img
            src={HERO_IMAGE}
            alt="ROBUX"
            className="w-full h-full object-cover opacity-60"
            style={{ filter: 'drop-shadow(0 0 60px rgba(255,215,0,0.5))' }}
          />
        </motion.div>
      )}

      {subtitle && (
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {subtitle}
        </motion.div>
      )}
      <motion.h2
        className="text-4xl md:text-6xl lg:text-[5rem] xl:text-[6rem] font-bold leading-[1.1] tracking-tight max-w-4xl relative z-10"
        style={{
          background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 50%, #FFD700 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          filter: 'drop-shadow(0 0 30px rgba(255, 215, 0, 0.4))',
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={isActive ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
        {title}
      </motion.h2>
      {content && (
        <motion.p
          className="text-base md:text-lg lg:text-xl max-w-2xl mt-6 text-yellow-200/70 leading-relaxed relative z-10"
          initial={{ opacity: 0, y: 50 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {content}
        </motion.p>
      )}
      {showButton && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isActive ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 md:mt-16 relative z-10"
        >
          <Button
            size="lg"
            className="text-black font-bold px-10 py-6 text-lg rounded-xl transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #FFD700 0%, #FFA500 100%)',
              boxShadow: '0 0 25px rgba(255, 215, 0, 0.5), 0 0 50px rgba(255, 165, 0, 0.2)',
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 40px rgba(255, 215, 0, 0.8), 0 0 80px rgba(255, 165, 0, 0.4)'
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 0 25px rgba(255, 215, 0, 0.5), 0 0 50px rgba(255, 165, 0, 0.2)'
            }}
          >
            {buttonText}
          </Button>
        </motion.div>
      )}
    </section>
  )
}
