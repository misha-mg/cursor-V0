"use client"

import { motion } from "framer-motion"

interface SlideProps {
  isActive: boolean
}

export default function Slide4({ isActive }: SlideProps) {
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
          Порівняння продуктивності в розробці ПЗ
        </h2>

        <motion.div className="bg-white/90 p-6 rounded-xl shadow-lg mb-8" variants={itemVariants}>
          <h3 className="text-xl font-medium mb-1 text-[#66796B] text-center">Software engineering</h3>
          <p className="text-sm text-center mb-6 text-[#BA8E7A]">SWE-bench verified</p>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Claude 3.7 Sonnet</span>
                <span>70.3%</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#66796B]"
                  custom={(62.3 * 100) / 80}
                  variants={barVariants}
                ></motion.div>
                <motion.div
                  className="h-full bg-[#66796B]/70 -mt-8"
                  custom={((70.3 - 62.3) * 100) / 80}
                  variants={barVariants}
                ></motion.div>
              </div>
              <div className="text-xs mt-1 text-right italic">62.3% base accuracy + custom scaffold</div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">Claude 3.5 Sonnet (new)</span>
                <span>49.0%</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#BA8E7A]"
                  custom={(49.0 * 100) / 80}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">OpenAI o1</span>
                <span>48.9%</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#D7A184]"
                  custom={(48.9 * 100) / 80}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">OpenAI o3-mini (high)</span>
                <span>49.3%</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#D4C2AD]"
                  custom={(49.3 * 100) / 80}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>

            <div>
              <div className="flex justify-between mb-1">
                <span className="font-medium">DeepSeek R1</span>
                <span>49.2%</span>
              </div>
              <div className="h-8 bg-[#EFDFCC] rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-[#66796B]/40"
                  custom={(49.2 * 100) / 80}
                  variants={barVariants}
                ></motion.div>
              </div>
            </div>
          </div>

          <div className="mt-4 flex justify-between text-xs text-[#BA8E7A]">
            <span>0%</span>
            <span>20%</span>
            <span>40%</span>
            <span>60%</span>
            <span>80%</span>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

