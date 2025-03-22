import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='pt-20 px-4 flex items-center justify-center flex-col gap-6'>
      <h2>This page will be used later to create the landing page for realitydiner website</h2>
      <Link to={"/categories"}>
        <button className='bg-primary text-white rounded-md px-4 py-2'>Launch RealityDiner</button>
      </Link>
    </div>
  )
}

export default Home