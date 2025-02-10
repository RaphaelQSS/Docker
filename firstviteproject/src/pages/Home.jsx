import React from 'react'
import motion, { delay } from 'framer-motion'

const Home = () => {
  return (
    <motion.div initial={{opacity:0}} animate={{opacity:1, rotate:178907}} transition={{duration:1, delay:1}}>
      HAHAHAHAHAHAH
    </motion.div>
  )
}

export default Home
