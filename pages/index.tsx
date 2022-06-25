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
        <meta name="title" content="Larry Cutts Portfolio" />
        <meta
          name="description"
          content="I am Larry Cutts, A FullStack Blockchain Developer"
        />
        <meta
          name="keywords"
          content="Larry Cutts, nextjs developer, solidity developer, frontend developer, smart contract developer, portfolio"
        />
        <meta
          property="og:image"
          content="https://user-images.githubusercontent.com/85313109/175751057-8e9572aa-6d9c-4d2e-af6d-2b3948d19bf8.JPG"
        />
        <link
          itemProp="image"
          href="https://user-images.githubusercontent.com/85313109/175751057-8e9572aa-6d9c-4d2e-af6d-2b3948d19bf8.JPG"
        />
        <meta name="author" content="Larry J Cutts" />
        <link rel="icon" href="/Capture-6.JPG" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Work />
      <Contact />
    </div>
  );
}

export default Home
