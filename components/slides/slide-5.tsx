"use client"

import { motion } from "framer-motion"
import { Code, Braces, Sparkles, Settings } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

export default function Slide5({ isActive }: SlideProps) {
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

  const featureVariants = {
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
          Cursor IDE - Розроблений для AI-взаємодії
        </h2>

      

        <div className="grid md:grid-cols-1 gap-8">

        <motion.div className="mt-8 bg-[#BA8E7A]/10 p-6 rounded-xl border-l-4 border-[#BA8E7A]" variants={itemVariants}>
          <p className="text-lg italic">
            "IDE, спеціально розроблений для інтеграції з AI, Побудований на базі VS Code, але оптимізований для роботи з AI-асистентами.
            Безшовна інтеграція з Claude 3.7 та іншими моделями"
          </p>
        </motion.div>
          

          <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Основні функції</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>⌘ K - пряме редагування коду та конктерних його блоків та стрічок</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>⌘ L - доступ до чату з AI-асистентом, який має інтеграцію з усім проектом</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>TAB - <b>multiline autocomplete</b> фіча для передбачення потрібного вам коду</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>NOTEPAD - нотатки для ваших думок та ідей прямо в IDE</span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>Terminal ⌘ K - AI асистент для виконання команд в терміналі</span>
              </li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4" variants={containerVariants}>
          <motion.div
            className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
            variants={featureVariants}
          >
            <div className="w-12 h-12 bg-[#66796B] rounded-full flex items-center justify-center mb-3">
              <Code className="text-white" size={24} />
            </div>
            <h4 className="font-medium text-[#66796B]">Agent</h4>
          </motion.div>

          <motion.div
            className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
            variants={featureVariants}
          >
            <div className="w-12 h-12 bg-[#BA8E7A] rounded-full flex items-center justify-center mb-3">
              <Braces className="text-white" size={24} />
            </div>
            <h4 className="font-medium text-[#66796B]">Tab</h4>
          </motion.div>

          <motion.div
            className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
            variants={featureVariants}
          >
            <div className="w-12 h-12 bg-[#D7A184] rounded-full flex items-center justify-center mb-3">
              <Sparkles className="text-white" size={24} />
            </div>
            <h4 className="font-medium text-[#66796B]">Chat</h4>
          </motion.div>

          <motion.div
            className="bg-white/80 p-4 rounded-xl shadow-md flex flex-col items-center text-center"
            variants={featureVariants}
          >
            <div className="w-12 h-12 bg-[#D4C2AD] rounded-full flex items-center justify-center mb-3">
              <Settings className="text-white" size={24} />
            </div>
            <h4 className="font-medium text-[#66796B]">⌘ K</h4>
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

