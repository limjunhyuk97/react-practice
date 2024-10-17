import TheHeader from '@/components/TheHeader'
import { useLocation, useOutlet } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Outlet : 방출하는 컴포넌트 (페이지가 들어갈 위치에 사용함)

export default function DefaultLayout() {
  const location = useLocation()
  const outlet = useOutlet()
  return (
    <>
      <TheHeader />
      <AnimatePresence>
        {/* position:absolute 주면, 사라질 때 자연스럽게 사라짐 */}
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0, position: 'absolute' }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          key={location.pathname}>
          {outlet}
        </motion.div>
      </AnimatePresence>
    </>
  )
}
