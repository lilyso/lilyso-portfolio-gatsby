import { motion } from "framer-motion"
import React from "react"

const Drag = ({ children }) => (
  <motion.div
    drag
    dragConstraints={{
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    }}
  >
    {children}
  </motion.div>
)

export default Drag
