"use client"

import { motion } from "framer-motion"
import { CheckCircle } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

export default function Slide11({ isActive }: SlideProps) {
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

  const stepVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (custom: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: 0.5 + custom * 0.2,
      },
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
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#66796B] text-center">V0 by Vercel: Революція в UI дизайні</h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Чому варто інтегрувати V0 у ваш процес розробки</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>AI-генерація UI компонентів</strong> з простого текстового опису
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>Повна сумісність з React і Tailwind CSS</strong> для безшовної інтеграції
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>Прискорення прототипування</strong> від годин до секунд
                </span>
              </li>
              <li className="flex items-start">
                <div className="w-3 h-3 rounded-full bg-[#D7A184] mt-1.5 mr-3 flex-shrink-0"></div>
                <span>
                  <strong>Доступ до бібліотеки готових компонентів</strong> для швидкого старту
                </span>
              </li>
            </ul>
          </motion.div>

          <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Як почати використовувати V0</h3>
            <ul className="space-y-4">
              <motion.li className="flex items-start" custom={0} variants={stepVariants}>
                <div className="mr-3 text-[#66796B] flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <span className="font-medium">1. Відвідайте v0.dev</span>
                  <p className="text-sm mt-1">Зареєструйтесь для доступу до платформи генерації UI</p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" custom={1} variants={stepVariants}>
                <div className="mr-3 text-[#66796B] flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <span className="font-medium">2. Опишіть бажаний компонент</span>
                  <p className="text-sm mt-1">Використовуйте природну мову для опису UI, який ви хочете створити</p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" custom={2} variants={stepVariants}>
                <div className="mr-3 text-[#66796B] flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <span className="font-medium">3. Отримайте готовий React код</span>
                  <p className="text-sm mt-1">V0 генерує чистий, доступний код з Tailwind CSS стилями</p>
                </div>
              </motion.li>

              <motion.li className="flex items-start" custom={3} variants={stepVariants}>
                <div className="mr-3 text-[#66796B] flex-shrink-0">
                  <CheckCircle size={24} />
                </div>
                <div>
                  <span className="font-medium">4. Інтегруйте у ваш проект</span>
                  <p className="text-sm mt-1">Скопіюйте код або експортуйте компоненти безпосередньо у ваш проект</p>
                </div>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div className="mt-8 bg-[#BA8E7A]/10 p-6 rounded-xl border-l-4 border-[#BA8E7A]" variants={itemVariants}>
          <p className="text-lg italic">
            "V0 від Vercel — це не просто інструмент для генерації UI, а повноцінний співавтор дизайну, який дозволяє розробникам і дизайнерам втілювати ідеї в код з безпрецедентною швидкістю та якістю."
          </p>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

