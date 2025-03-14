"use client"

import { motion } from "framer-motion"

interface SlideProps {
  isActive: boolean
}

export default function Slide9({ isActive }: SlideProps) {
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

  const codeBlockVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
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
          Приклад рефакторингу
        </h2>

        <div className="grid md:grid-cols-1 gap-8">
          <motion.div className="bg-[#D4C2AD]/50 p-6 rounded-xl" variants={itemVariants}>
            <h3 className="text-xl font-medium mb-4 text-[#BA8E7A]">Модернізація JavaScript коду</h3>
            <p className="mb-3 text-sm">До: Код з колбеками</p>
            <motion.div
              className="bg-[#66796B] text-white p-4 rounded-xl overflow-x-auto scrollbar-thin scrollbar-thumb-[#D7A184] scrollbar-track-[#66796B]/50 mb-4"
              variants={codeBlockVariants}
            >
              <pre className="text-sm whitespace-pre">
                <code>{`function getDataFromAPI(endpoint, callback) {
  fetch(endpoint)
    .then(response => {
      if (!response.ok) {
        callback(new Error('Network error'));
        return;
      }
      response.json()
        .then(data => {
          processData(data, (err, result) => {
            if (err) {
              callback(err);
              return;
            }
            callback(null, result);
          });
        })
        .catch(error => callback(error));
    })
    .catch(error => callback(error));
}`}</code>
              </pre>
            </motion.div>

            <p className="mb-3 text-sm">
              Після запиту в Cursor + Claude 3.7: "Перепиши з async/await"
            </p>
            <motion.div
              className="bg-[#66796B] text-white p-4 rounded-xl overflow-x-auto scrollbar-thin scrollbar-thumb-[#D7A184] scrollbar-track-[#66796B]/50"
              variants={codeBlockVariants}
            >
              <pre className="text-sm whitespace-pre">
                <code>{`async function getDataFromAPI(endpoint) {
  try {
    const response = await fetch(endpoint);
    if (!response.ok) throw new Error('Network error');
    
    const data = await response.json();
    return await processData(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}`}</code>
              </pre>
            </motion.div>
          </motion.div>
        </div>

       
      </motion.div>
    </motion.div>
  )
}

