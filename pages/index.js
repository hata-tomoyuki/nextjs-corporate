import { data } from '../data'
import Head from 'next/head'
import Intro from '../components/Intro'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'
import { motion } from 'framer-motion'

export default function Home({ services }) {
  return (
    <motion.div
      initial={{ opacity: 0 }} // 初期状態
      animate={{ opacity: 1 }} // マウント時
      exit={{ opacity: 0 }}    // アンマウント時
      transition={{ ease: "easeOut", duration: 0.3 }}
    >
      <div className='overflow-x-hidden'>
        <Head>
          <title>Web Builder</title>
          <meta name="description" content="We'll give you the best quality through web site development!" />
        </Head>
        <Intro />
        <Services services={ services } />
        <Testimonials />
      </div>
    </motion.div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
