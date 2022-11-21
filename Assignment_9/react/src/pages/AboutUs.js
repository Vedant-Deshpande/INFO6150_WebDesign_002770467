import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

function AboutUs() {
  return (
    <div className='App'>
      <Navbar />
      <Card
        title='AboutUS'
        imageUrl='https://media.gettyimages.com/id/1210552730/photo/computer-key-about-us.jpg?s=1024x1024&w=gi&k=20&c=mNEPZtviEq6cQup8jfrlHDyXlGxvXbOKHBKZiFjG_7c='
        body='This is the website AboutUs page'
      />
    </div>
  )
}

export default AboutUs;