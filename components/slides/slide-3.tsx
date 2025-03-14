"use client"

import { motion } from "framer-motion"

interface SlideProps {
  isActive: boolean
}

export default function Slide3({ isActive }: SlideProps) {
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
          Порівняння продуктивності Claude 3.7 з іншими AI моделями
        </h2>

        <motion.div className="bg-white/90 p-6 rounded-xl shadow-lg mb-8" variants={itemVariants}>
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead>
                <tr className="border-b-2 border-[#D4C2AD]">
                  <th className="py-3 px-4 text-left">Модель</th>
                  <th className="py-3 px-4 text-center">Логічне мислення<br/><span className="text-xs">(GPQA Diamond)</span></th>
                  <th className="py-3 px-4 text-center">Написання коду<br/><span className="text-xs">(SWE-bench)</span></th>
                  <th className="py-3 px-4 text-center">Математика<br/><span className="text-xs">(MATH 500)</span></th>
                  <th className="py-3 px-4 text-center">Слідування інструкціям<br/><span className="text-xs">(IFEval)</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[#EFDFCC]">
                  <td className="py-3 px-4 font-medium text-[#66796B]">Claude 3.7 Sonnet<br/><span className="text-xs">64K extended</span></td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={84.8} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">84.8%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={0} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">-</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={96.2} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">96.2%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={93.2} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">93.2%</div>
                  </td>
                </tr>
                <tr className="border-b border-[#EFDFCC]">
                  <td className="py-3 px-4 font-medium text-[#66796B]">Claude 3.7 Sonnet<br/><span className="text-xs">No extended</span></td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={68.0} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">68.0%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={70.3} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">70.3%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={82.2} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">82.2%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#66796B]" custom={90.8} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">90.8%</div>
                  </td>
                </tr>
                <tr className="border-b border-[#EFDFCC]">
                  <td className="py-3 px-4 font-medium text-[#BA8E7A]">OpenAI o1</td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#BA8E7A]" custom={78.0} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">78.0%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#BA8E7A]" custom={48.9} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">48.9%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#BA8E7A]" custom={96.4} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">96.4%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#BA8E7A]" custom={0} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">-</div>
                  </td>
                </tr>
                <tr className="border-b border-[#EFDFCC]">
                  <td className="py-3 px-4 font-medium text-[#D7A184]">OpenAI o3-mini</td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D7A184]" custom={79.7} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">79.7%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D7A184]" custom={49.3} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">49.3%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D7A184]" custom={97.9} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">97.9%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D7A184]" custom={0} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">-</div>
                  </td>
                </tr>
                <tr>
                  <td className="py-3 px-4 font-medium text-[#D4C2AD]">DeepSeek R1</td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D4C2AD]" custom={71.5} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">71.5%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D4C2AD]" custom={49.2} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">49.2%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D4C2AD]" custom={97.3} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">97.3%</div>
                  </td>
                  <td className="py-3 px-4">
                    <div className="h-6 bg-[#EFDFCC] rounded-full overflow-hidden">
                      <motion.div className="h-full bg-[#D4C2AD]" custom={83.3} variants={barVariants}></motion.div>
                    </div>
                    <div className="text-center mt-1">83.3%</div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>

      
      </motion.div>
    </motion.div>
  )
}

