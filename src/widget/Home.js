import React from 'react'
import AlgeriaMap from './Alge';
import Navbar from './navbar';
import Search from './search';

function Home() {
  return (
    <>
        <AlgeriaMap />
        <Navbar />
        <Search />
    </>
  )
}

export default Home