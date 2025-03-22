import React, { useContext, useEffect } from 'react'
import { ShopContext } from '../context/ShopContext'
import AnimatedContent from './reactbits/AnimatedComponent'
import { useNavigate } from 'react-router-dom'

const categoryTile = () => {

  const { categories, getCategoryImage } = useContext(ShopContext)
  const navigate = useNavigate()

  return (
    <div className="min-h-screen bg-gray-100">
      {/* First Component - Full Width */}

      <AnimatedContent
        distance={50}
        reverse={false}
        config={{ tension: 80, friction: 20 }}
        initialOpacity={0.2}
        animateOpacity
        scale={0.8}
        threshold={1}
      >
        <div 
          onClick={() => navigate(`/category/${categories[0]}`)}
          style={{
            backgroundImage: `url('https://realitydiner.onrender.com${getCategoryImage(categories[0])}')`
          }}
          className={`bg-cover bg-center bg-slate-300 aspect-square flex items-center justify-center text-white text-center p-6 rounded-lg shadow-lg mb-2`}>
          <h1 className="text-3xl font-bold">{categories[0]}</h1>
        </div>
      </AnimatedContent>

      {/* Grid Container */}
      <div className="grid grid-cols-2 sm:grid-cols-2 gap-2">
        {/* Grid Items */}
        {
          categories.map((category, index) => index > 0 && (
            <AnimatedContent
              distance={50}
              reverse={false}
              config={{ tension: 100, friction: 20 }}
              initialOpacity={0.2}
              animateOpacity
              scale={0.8}
              threshold={0.8}
              key={index}
            >
              <div
                onClick={() => navigate(`/category/${category}`)}
                style={{
                  backgroundImage: `url('https://realitydiner.onrender.com${getCategoryImage(category)}')`
                }}
                className="bg-cover bg-center bg-slate-300 aspect-square flex items-center justify-center p-6 text-2xl font-bold tracking-wide text-white rounded-lg shadow-lg">
                {category}
              </div>
            </AnimatedContent>
          ))
        }
      </div>
    </div>
  )
}

export default categoryTile