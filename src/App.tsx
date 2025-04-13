import { motion } from "motion/react"
import { useState } from "react"

function App() {
  const [hasTranslation, setHasTranslation] = useState(false)

  return (
    <section className="w-full h-dvh flex justify-center items-center">
      <div className="w-60 h-14 rounded-full bg-gray-200 overflow-hidden">
        <motion.div 
          className="w-[200%] h-full grid grid-cols-2"
          initial={{ x: 0 }}
          animate={{ x: hasTranslation ? '-50%' : 0 }}
          transition={{ type: 'spring', bounce: .3, duration: .7 }}
        >
          <div className="flex justify-between items-center p-1.5 pl-5">
            <svg
              className="w-7 h-7 fill-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M4.98 4a.5.5 0 0 0-.39.188L1.54 8H6a.5.5 0 0 1 .5.5 1.5 1.5 0 1 0 3 0A.5.5 0 0 1 10 8h4.46l-3.05-3.812A.5.5 0 0 0 11.02 4zm-1.17-.437A1.5 1.5 0 0 1 4.98 3h6.04a1.5 1.5 0 0 1 1.17.563l3.7 4.625a.5.5 0 0 1 .106.374l-.39 3.124A1.5 1.5 0 0 1 14.117 13H1.883a1.5 1.5 0 0 1-1.489-1.314l-.39-3.124a.5.5 0 0 1 .106-.374z"></path>
            </svg>
            <svg
              className="w-6 h-6 fill-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"></path>
            </svg>
            <svg
              className="w-7 h-7 fill-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M9.828.722a.5.5 0 0 1 .354.146l4.95 4.95a.5.5 0 0 1 0 .707c-.48.48-1.072.588-1.503.588-.177 0-.335-.018-.46-.039l-3.134 3.134a6 6 0 0 1 .16 1.013c.046.702-.032 1.687-.72 2.375a.5.5 0 0 1-.707 0l-2.829-2.828-3.182 3.182c-.195.195-1.219.902-1.414.707s.512-1.22.707-1.414l3.182-3.182-2.828-2.829a.5.5 0 0 1 0-.707c.688-.688 1.673-.767 2.375-.72a6 6 0 0 1 1.013.16l3.134-3.133a3 3 0 0 1-.04-.461c0-.43.108-1.022.589-1.503a.5.5 0 0 1 .353-.146"></path>
            </svg>
            <motion.svg
              className="w-7 h-7 fill-gray-700 -scale-x-100"
              viewBox="0 0 16 16"
              initial={{ filter: 'blur(0px)' }}
              animate={{ filter: hasTranslation ? 'blur(1px)' : 'blur(0px)' }}
            >
              <path d="M2 1a1 1 0 0 0-1 1v4.586a1 1 0 0 0 .293.707l7 7a1 1 0 0 0 1.414 0l4.586-4.586a1 1 0 0 0 0-1.414l-7-7A1 1 0 0 0 6.586 1zm4 3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
            </motion.svg>
            <motion.button
              whileTap={{ scale: .9 }}
              onClick={() => setHasTranslation(true)} 
              className="h-full aspect-square flex justify-center items-center bg-white rounded-full"
            >
              <svg
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-7 h-7 fill-none stroke-gray-500"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </motion.button>
          </div>
          <div className="flex justify-between items-center p-1.5 pr-5">
            <motion.button
              whileTap={{ scale: .9 }}
              onClick={() => setHasTranslation(false)} 
              className="h-full aspect-square flex justify-center items-center bg-white rounded-full"
            >
              <svg
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-7 h-7 fill-none stroke-gray-500"
                viewBox="0 0 24 24"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            </motion.button>
            <motion.svg
              initial={{ filter: 'blur(0px)' }}
              animate={{ filter: !hasTranslation ? 'blur(1px)' : 'blur(0px)' }}
              className="w-6 h-6 fill-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3"></path>
              <path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2M14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1M2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1z"></path>
            </motion.svg>
            <svg
              className="w-6 h-6 fill-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M12.643 15C13.979 15 15 13.845 15 12.5V5H1v7.5C1 13.845 2.021 15 3.357 15zM5.5 7h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1M.8 1a.8.8 0 0 0-.8.8V3a.8.8 0 0 0 .8.8h14.4A.8.8 0 0 0 16 3V1.8a.8.8 0 0 0-.8-.8z"></path>
            </svg>
            <svg
              className="w-8 h-8 fill-gray-700 -scale-x-100"
              viewBox="0 0 16 16"
            >
              <path d="M5.921 11.9 1.353 8.62a.72.72 0 0 1 0-1.238L5.921 4.1A.716.716 0 0 1 7 4.719V6c1.5 0 6 0 7 8-2.5-4.5-7-4-7-4v1.281c0 .56-.606.898-1.079.62z"></path>
            </svg>
            <svg
              className="w-6 h-6 fill-gray-700"
              viewBox="0 0 16 16"
            >
              <path d="M11 1.5v1h3.5a.5.5 0 0 1 0 1h-.538l-.853 10.66A2 2 0 0 1 11.115 16h-6.23a2 2 0 0 1-1.994-1.84L2.038 3.5H1.5a.5.5 0 0 1 0-1H5v-1A1.5 1.5 0 0 1 6.5 0h3A1.5 1.5 0 0 1 11 1.5m-5 0v1h4v-1a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5M4.5 5.029l.5 8.5a.5.5 0 1 0 .998-.06l-.5-8.5a.5.5 0 1 0-.998.06m6.53-.528a.5.5 0 0 0-.528.47l-.5 8.5a.5.5 0 0 0 .998.058l.5-8.5a.5.5 0 0 0-.47-.528M8 4.5a.5.5 0 0 0-.5.5v8.5a.5.5 0 0 0 1 0V5a.5.5 0 0 0-.5-.5"></path>
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default App
