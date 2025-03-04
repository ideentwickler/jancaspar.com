'use client'
import { motion } from 'motion/react'

import Press from './sections/press'
import Blog from './sections/blog'
import Contact from './sections/contact'
import TechStack from './sections/techstack'
import WorkExperience from './sections/workexperience'

const VARIANTS_CONTAINER = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
}

const VARIANTS_SECTION = {
  hidden: { opacity: 0, y: 20, filter: 'blur(8px)' },
  visible: { opacity: 1, y: 0, filter: 'blur(0px)' },
}

const TRANSITION_SECTION = {
  duration: 0.3,
}


export default function Personal() {
  return (
    <motion.main
      className="space-y-24"
      variants={VARIANTS_CONTAINER}
      initial="hidden"
      animate="visible"
    >
      <motion.section
        variants={VARIANTS_SECTION}
        transition={TRANSITION_SECTION}
      >
        <div className="flex-1">
          <p className="text-zinc-600 italic dark:text-zinc-400 p-4  bg-zinc-50/50 dark:bg-zinc-900/50">
            „I combine a 20-year career in retail, from kitchen specialist in sales to Head of Digital - with a passion for programming and new technologies that I have had since childhood.
            This extensive experience gives me a unique perspective that combines personal customer interaction, processes and procedures in business with strategic digital transformation.“
          </p>
        </div>
      </motion.section>

      <Press variantsSection={VARIANTS_SECTION} transitionSection={TRANSITION_SECTION} />
      <WorkExperience variantsSection={VARIANTS_SECTION} transitionSection={TRANSITION_SECTION} />
      <TechStack variantsSection={VARIANTS_SECTION} transitionSection={TRANSITION_SECTION} />
      <Contact variantsSection={VARIANTS_SECTION} transitionSection={TRANSITION_SECTION} />
    </motion.main>
  )
}
