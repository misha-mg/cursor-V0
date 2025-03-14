"use client"

import { motion } from "framer-motion"
import { DollarSign } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

export default function Slide7({ isActive }: SlideProps) {
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
          Порівняння вартості AI-інтегрованих IDE
        </h2>

        <motion.div className="bg-white/90 p-8 rounded-xl shadow-lg mx-auto max-w-2xl" variants={itemVariants}>
          <div className="flex items-center mb-6">
            <div className="w-10 h-10 bg-[#D7A184] rounded-full flex items-center justify-center mr-3">
              <DollarSign className="text-white" size={20} />
            </div>
            <h3 className="text-xl font-medium text-[#66796B]">Щомісячна підписка (USD)</h3>
          </div>

          <div className="space-y-5">
            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Cursor Pro</span>
                <span>$20</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#66796B]"
                  custom={(20 * 100) / 35}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">VS Code</span>
                <span>$0</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#BA8E7A]" custom={0} variants={barVariants}></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">VS Code + GitHub Copilot</span>
                <span>$10</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#D7A184]"
                  custom={(10 * 100) / 35}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">JetBrains IDEs</span>
                <span>$35</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#D4C2AD]"
                  custom={(35 * 100) / 35}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">GitHub Copilot Studio</span>
                <span>$35</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#66796B]/60"
                  custom={(35 * 100) / 35}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Neovim AI</span>
                <span>$0</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div className="h-full bg-[#BA8E7A]/60" custom={0} variants={barVariants}></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="font-medium">Replit Pro</span>
                <span>$15</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#EFDFCC]"
                  custom={(15 * 100) / 35}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

