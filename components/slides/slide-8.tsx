"use client"

import { motion } from "framer-motion"
import { Zap, Clock, Book, Bug, Bot, Scale, Ruler } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

export default function Slide8({ isActive }: SlideProps) {
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

  const statVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
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
          Основні правила використання ⌘ L чату
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
         

          <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Основні поради</h3>
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                variants={statVariants}
              >
                <div className="w-12 h-12 bg-[#66796B] rounded-full flex items-center justify-center mb-3">
                  <Bot className="text-white" size={24} />
                </div>
                <h4 className="font-medium text-[#66796B]">Контекст проекту</h4>
                <p className="text-sm">Використовуйте @ для посилання на конкретні файли та папки у запитах</p>
              </motion.div>

              <motion.div
                className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                variants={statVariants}
              >
                <div className="w-12 h-12 bg-[#BA8E7A] rounded-full flex items-center justify-center mb-3">
                  <Ruler className="text-white" size={24} />
                </div>
                <h4 className="font-medium text-[#66796B]">.cursorrules</h4>
                <p className="text-sm">Створіть файл з правилами для стандартизації коду у проекті</p>
              </motion.div>

              <motion.div
                className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                variants={statVariants}
              >
                <div className="w-12 h-12 bg-[#D7A184] rounded-full flex items-center justify-center mb-3">
                  <Book className="text-white" size={24} />
                </div>
                <h4 className="font-medium text-[#66796B]">Документація</h4>
                <p className="text-sm">Просіть AI генерувати документацію та пояснення для складного коду</p>
              </motion.div>

              <motion.div
                className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
                variants={statVariants}
              >
                <div className="w-12 h-12 bg-[#D4C2AD] rounded-full flex items-center justify-center mb-3">
                  <Scale className="text-white" size={24} />
                </div>
                <h4 className="font-medium text-[#66796B]">Extended thinking</h4>
                <p className="text-sm">Використовуйте для складних задач, що потребують глибокого аналізу</p>
              </motion.div>
            </div>
          </motion.div>
        </div>

        <motion.div className="mt-8 bg-white/90 p-6 rounded-xl shadow-lg" variants={itemVariants}>
          <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Корисні команди</h3>
          <div className="grid md:grid-cols-3 gap-4">
            <div className="bg-[#D4C2AD]/20 p-3 rounded-lg">
              <code className="font-mono text-sm font-bold">⌘ L</code>
              <p className="text-sm mt-1">Відкрити чат з Claude AI</p>
            </div>
            <div className="bg-[#D4C2AD]/20 p-3 rounded-lg">
              <code className="font-mono text-sm font-bold">@filename</code>
              <p className="text-sm mt-1">Посилання на конкретний файл</p>
            </div>
            <div className="bg-[#D4C2AD]/20 p-3 rounded-lg">
              <code className="font-mono text-sm font-bold">/edit</code>
              <p className="text-sm mt-1">Запит на редагування поточного файлу</p>
            </div>
            <div className="bg-[#D4C2AD]/20 p-3 rounded-lg">
              <code className="font-mono text-sm font-bold">/new</code>
              <p className="text-sm mt-1">Створити новий файл</p>
            </div>
            <div className="bg-[#D4C2AD]/20 p-3 rounded-lg">
              <code className="font-mono text-sm font-bold">/explain</code>
              <p className="text-sm mt-1">Пояснити виділений код</p>
            </div>
            <div className="bg-[#D4C2AD]/20 p-3 rounded-lg">
              <code className="font-mono text-sm font-bold">/test</code>
              <p className="text-sm mt-1">Згенерувати тести для коду</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

