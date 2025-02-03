import { motion } from 'motion/react'
import { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)


  return (
    <div className="bg-[#060606] h-screen w-screen flex justify-center items-center">
        <div className="bg-[#252525] h-52 w-[30rem] rounded-full">
            <div className="flex h-full w-full items-center justify-between">
                <motion.button 
                    className="text-[#5A5A5A] text-6xl h-32 w-32 rounded-full cursor-pointer p-"
                    whileTap={{
                        color:"#E0E0E0"
                    }}
                    onClick={()=>setCount(count - 1)}
                >-</motion.button>
                <div 
                    className="text-[#E0E0E0] text-6xl bg-[#5A5A5A] h-32 w-32 rounded-full flex justify-center items-center"
                >
                    <motion.span                
                        animate={{ 
                            y:[20,0],
                            opacity:[0,1]
                        }}
                        transition={{ duration:0.3, ease:'easeInOut' }}
                        key={count}
                    >
                    {count}
                    </motion.span>
                    </div>
                <motion.button 
                    className="text-[#5A5A5A] text-6xl h-32 w-32 rounded-full cursor-pointer"
                    whileTap={{
                        color:"#E0E0E0"
                    }}
                    onClick={()=>setCount(count + 1)}
                >
                    +
                </motion.button>
            </div>
        </div>
    </div>
  )
}

export default Counter