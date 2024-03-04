import React from 'react'
import './home.scss'
import Hero from './hero/Hero'
import Section1 from './section1/Section1'
import Section2 from './section2/Section2'
import Section3 from './section3/Section3'
import Section4 from './section4/Section4'
import Section5 from './section5/Section5'
import Section6 from './section6/Section6'

const Home = () => {
  return (
    <div className='Home'>
      <Hero />
      <Section1 />
      {/* <Section2 /> */}
      <Section3 />
      <Section4 />
      {/* <Section5 /> */}
      <Section6 />
    </div>
  )
}

export default Home