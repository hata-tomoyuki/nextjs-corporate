import { data } from '../data'
import Head from 'next/head'
import Image from 'next/image'
import Intro from '../components/Intro'
import Navbar from '../components/Navbar'
import Services from '../components/Services'
import Testimonials from '../components/Testimonials'

export default function Home({ services }) {
  return (
    <div className='overflow-x-hidden'>
      <Head>
        <title>Web Builder</title>
        <meta name="description" content="We'll give you the best quality through web site development!" />
      </Head>
      <Intro />
      <Services services={ services } />
      <Testimonials />
    </div>
  )
}

export const getStaticProps = async () => {
  const services = data;
  return {
    props: { services },
  };
};
