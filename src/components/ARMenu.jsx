import React, { useState } from 'react'

const ARMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <div className='absolute top-20 right-4 bg-white-light py-2 px-5 rounded-lg shadow-md cursor-pointer'>
      <p className='p-xl text-xl font-bold'>{menuVisible ? 'Close' : 'Menu'}</p>
    </div>
  )
}

export default ARMenu