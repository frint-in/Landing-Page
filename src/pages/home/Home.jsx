import React from 'react'
import './home.scss'
import Hero from './hero/Hero'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'

const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <Section1 />
      <Section2 />
    </div>
  )
}

export default Home