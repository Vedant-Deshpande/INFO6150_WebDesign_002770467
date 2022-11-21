import React from 'react'
import Card from '../components/card'
import Navbar from '../components/navbar';

function Jobs() {
  return (
    <div className='App'>
      <Navbar />
      <Card
        title='Jobs'
        imageUrl='https://media.gettyimages.com/id/1318810406/vector/a-group-of-cartoon-worker-characters-with-different-professions-businessmen-and-business.jpg?s=1024x1024&w=gi&k=20&c=XwF8Ffdaxi8B6iHZm1muYuCw0E8LgwYGp1HgRV5lu9k='
        body='This is the website Jobs page'
      />
    </div>
  )
}
export default Jobs;