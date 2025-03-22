import React, { useContext, useMemo } from 'react'
import ModelViewer from '../components/ModelViewer'
import { useNavigate, useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';

const AR = () => {
  const { id } = useParams();
  const { getProductById } = useContext(ShopContext);
  const navigate = useNavigate()

  const product = useMemo(() => getProductById(id))
  console.log(product)


  return (
    <div className='py-20 px-4 h-screen w-full'>
      {product && <ModelViewer src={`https://realitydiner.onrender.com${product?.model3d}`} />}
    </div>
  )
}

export default AR