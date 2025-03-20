"use client"

import { motion } from "framer-motion"

interface SlideProps {
  isActive: boolean
}

export default function Slide1({ isActive }: SlideProps) {
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
      <motion.div className="text-center max-w-4xl" variants={itemVariants}>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-[#66796B]">Claude 3.7 + Cursor IDE + V0</h1>
        <h2 className="text-2xl font-medium mb-12 text-[#BA8E7A]">
          Прискорення своєї роботи з AI
        </h2>

        <motion.div className="mt-16 bg-[#D4C2AD]/50 p-8 rounded-xl" variants={itemVariants}>
          <ul className="text-lg space-y-4">
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mr-3"></div>
              <span>Переваги Claude 3.7 Sonnet над іншими моделями</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mr-3"></div>
              <span>Інтеграція Claude 3.7 з Cursor IDE</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mr-3"></div>
              <span>Нюанси використання та поради</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mr-3"></div>
              <span>Інтеграція з V0 by Vercel</span>
            </li>
            <li className="flex items-center">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mr-3"></div>
              <span>Додаткові корисні інструменти</span>
            </li>
          </ul>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}