import type { NextPage } from 'next'
import Head from 'next/head'
import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Skills from './components/Skills'
import Work from './components/Work'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Larry J Cutts</title>
        <meta name="description" content="Larry J Cutts Portfolio Website" />
        <link rel="icon" href="/Capture-6.JPG" />
      </Head>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Work/>
      <Contact/>
    </div>
  )
}

export default Home
