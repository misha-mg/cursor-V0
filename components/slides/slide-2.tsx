"use client"

import { motion } from "framer-motion"
import Image from "next/image"
interface SlideProps {
  isActive: boolean
}

export default function Slide2({ isActive }: SlideProps) {
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
      <motion.div className="max-w-4xl w-full" variants={itemVariants}>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#66796B] text-center">
          Claude 3.7 Sonnet - повівняння з подібними моделями
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-white rounded-xl overflow-hidden" variants={itemVariants}>
          <Image
              className="w-full h-full object-contain"
              src="/agentic.webp"
              alt="Claude 3.7 Sonnet"
              width={500}
              height={500}
            />
          </motion.div>

          <motion.div className="bg-white rounded-xl overflow-hidden" variants={itemVariants}>
            <Image
              className="w-full h-full object-contain"
              src="/software.webp"
              alt="Claude 3.7 Sonnet"
              width={500}
              height={500}
            />
          </motion.div>
        </div>

        <motion.div className="mt-8 bg-[#BA8E7A]/10 p-6 rounded-xl border-l-4 border-[#BA8E7A]" variants={itemVariants}>
          <p className="text-lg italic">
            "Claude 3.7 Sonnet найбільшу перевагу має у роботі з кодом та розробкою, маючи здібності до
             покрокового мислення він випереджує всі існуючі моделі"
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}