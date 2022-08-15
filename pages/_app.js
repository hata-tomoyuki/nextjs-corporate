import { AnimatePresence } from 'framer-motion'
import Layout from '../components/Layout'
import '../styles/globals.css'

function MyApp({ Component, pageProps, router }) {
  return (
    <AnimatePresence exitBeforeEnter>
      <Layout>
        <Component key={router.asPath} {...pageProps} />
      </Layout>
    </AnimatePresence>
  )
}

export default MyApp
