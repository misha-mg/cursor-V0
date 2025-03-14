"use client"

import { motion } from "framer-motion"

interface SlideProps {
  isActive: boolean
}

export default function Slide10({ isActive }: SlideProps) {
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

  const barVariants = {
    hidden: { width: 0 },
    visible: (custom: number) => ({
      width: `${custom}%`,
      transition: { duration: 1, delay: 0.5 },
    }),
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
          Економічна ефективність інвестицій
        </h2>

        <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl mb-8" variants={itemVariants}>
          <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">ROI використання Claude 3.7 + Cursor</h3>
          <ul className="grid md:grid-cols-2 gap-4">
            <li className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
              <span>
                <strong>Зниження на 35%</strong> часу на написання нового коду
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
              <span>
                <strong>Скорочення на 40%</strong> часу на рефакторинг старого коду
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
              <span>
                <strong>Зменшення на 25%</strong> кількості помилок і багів
              </span>
            </li>
            <li className="flex items-start">
              <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
              <span>
                <strong>~120 годин економії</strong> на місяць для команди з 5 розробників
              </span>
            </li>
          </ul>
        </motion.div>

        <motion.div className="bg-white/90 p-6 rounded-xl shadow-lg" variants={itemVariants}>
          <h3 className="text-xl font-medium mb-6 text-[#66796B] text-center">
            Економія часу програміста в годинах на місяць
          </h3>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Нове програмування</span>
                <span>45 год/міс</span>
              </div>
              <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#66796B]" custom={100} variants={barVariants}></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Рефакторинг</span>
                <span>35 год/міс</span>
              </div>
              <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#BA8E7A]" custom={78} variants={barVariants}></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Дебаггінг</span>
                <span>30 год/міс</span>
              </div>
              <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#D7A184]" custom={67} variants={barVariants}></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Документація</span>
                <span>10 год/міс</span>
              </div>
              <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#D4C2AD]" custom={22} variants={barVariants}></motion.div>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#EFDFCC]">
            <div className="flex justify-between font-bold">
              <span>Загальна економія</span>
              <span>120 год/міс</span>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

