"use client"

import { motion } from "framer-motion"

interface SlideProps {
  isActive: boolean
}

export default function Slide12({ isActive }: SlideProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
    exit: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className={`h-screen w-full flex flex-col justify-center items-center px-6 ${isActive ? "block" : "hidden"}`}
      initial="hidden"
      animate={isActive ? "visible" : "hidden"}
      exit="exit"
      variants={containerVariants}
    >
      <motion.div className="max-w-4xl w-full text-center" variants={itemVariants}>
        <h2 className="text-5xl font-bold mb-8 text-[#66796B]">Дякую Редентівцям за увагу!</h2>
        <p className="text-2xl md:text-3xl text-[#BA8E7A] opacity-30">
          <i>Powered by Redentu Education Club</i>
        </p>
      </motion.div>
    </motion.div>
  )
}

