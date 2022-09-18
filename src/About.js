import React from 'react'
import web from '../src/image/img2.jpg'
import Common from './Common'

const About = () => {
  return (
    <>
    <Common 
       name = "Welcome to about page"
       imgsrc = {web}
       visit = {'/contact'}
       btname = "Contact Now"
    />
    </>
  )
}

export default About