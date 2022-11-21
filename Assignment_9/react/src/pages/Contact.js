import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

function Contact() {
  return (
    <div className='App'>
      <Navbar />
      <Card
        title='Contact'
        imageUrl='https://media.gettyimages.com/id/1338286892/vector/business-card-icons.jpg?s=2048x2048&w=gi&k=20&c=FAdg9rOwmkc3d5AMptFyG4Wuc94VelsWVX6VhZvi1tI='
        body='This is the website Contact page'
      />
    </div>
  )
}

export default Contact;