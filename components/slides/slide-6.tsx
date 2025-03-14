"use client"

import { motion } from "framer-motion"
import { MessageSquare, Edit, Bot } from "lucide-react"

interface SlideProps {
  isActive: boolean
}

export default function Slide6({ isActive }: SlideProps) {
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

  const starVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: (custom: number) => ({
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.5 + custom * 0.1,
      },
    }),
  }

  const modeVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: (custom: number) => ({
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.3 + custom * 0.2,
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
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-[#66796B] text-center">
          Режими взаємодії з AI в Cursor
        </h2>

        <motion.div className="grid md:grid-cols-3 gap-6 mb-8" variants={containerVariants}>
          <motion.div 
            className="bg-white/90 p-6 rounded-xl shadow-lg flex flex-col h-full" 
            variants={modeVariants}
            custom={0}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#D7A184] rounded-full flex items-center justify-center mr-4">
                <MessageSquare className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#66796B]">Ask</h3>
            </div>
            <p className="text-[#BA8E7A] mb-4">Швидкі запитання та відповіді</p>
            <ul className="space-y-2 text-sm flex-grow">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#D7A184] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Запитання про код та документацію</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#D7A184] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Пошук в інтернеті через @Web</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#D7A184] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Пояснення виділеного коду</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-[#EFDFCC]">
              <p className="text-xs text-[#66796B] italic">Ідеально для: швидких запитань без зміни коду</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/90 p-6 rounded-xl shadow-lg flex flex-col h-full" 
            variants={modeVariants}
            custom={1}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#BA8E7A] rounded-full flex items-center justify-center mr-4">
                <Edit className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#66796B]">Edit</h3>
            </div>
            <p className="text-[#BA8E7A] mb-4">Редагування поточного файлу</p>
            <ul className="space-y-2 text-sm flex-grow">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#BA8E7A] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Зміни в одному файлі</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#BA8E7A] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Рефакторинг та оптимізація</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#BA8E7A] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Генерація нових функцій</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-[#EFDFCC]">
              <p className="text-xs text-[#66796B] italic">Ідеально для: змін в одному файлі</p>
            </div>
          </motion.div>

          <motion.div 
            className="bg-white/90 p-6 rounded-xl shadow-lg flex flex-col h-full" 
            variants={modeVariants}
            custom={2}
          >
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-[#66796B] rounded-full flex items-center justify-center mr-4">
                <Bot className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold text-[#66796B]">Agent</h3>
            </div>
            <p className="text-[#BA8E7A] mb-4">Повноцінний AI-асистент</p>
            <ul className="space-y-2 text-sm flex-grow">
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#66796B] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Зміни в багатьох файлах</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#66796B] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Виконання термінальних команд</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#66796B] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Розуміння всього проекту</span>
              </li>
              <li className="flex items-start">
                <div className="w-2 h-2 rounded-full bg-[#66796B] mt-1.5 mr-2 flex-shrink-0"></div>
                <span>Автоматизація складних задач</span>
              </li>
            </ul>
            <div className="mt-4 pt-4 border-t border-[#EFDFCC]">
              <p className="text-xs text-[#66796B] italic">Ідеально для: комплексних змін у проекті</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl" variants={itemVariants}>
          <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Коли використовувати кожен режим</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-white/80 p-4 rounded-lg">
              <h4 className="font-medium text-[#66796B] mb-2">Ask</h4>
              <p className="text-sm">Використовуйте для швидких запитань про код, документацію або пошуку інформації без внесення змін у проект.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg">
              <h4 className="font-medium text-[#66796B] mb-2">Edit</h4>
              <p className="text-sm">Ідеально для внесення змін в один файл, рефакторингу або оптимізації окремих функцій.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg">
              <h4 className="font-medium text-[#66796B] mb-2">Agent</h4>
              <p className="text-sm">Найкращий вибір для складних задач, що вимагають розуміння всього проекту та змін у багатьох файлах.</p>
            </div>
            <div className="bg-white/80 p-4 rounded-lg">
              <h4 className="font-medium text-[#66796B] mb-2">Комбінований підхід</h4>
              <p className="text-sm">Починайте з Agent для розуміння проекту, переключайтесь на Edit для конкретних змін, використовуйте Ask для уточнень.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

