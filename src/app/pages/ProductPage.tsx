import React from 'react'
import Products from '../Products/Products'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar'

const ProductPage = () => {
  return (
    <div>
      <Sidebar />
      <Recommended />
      <Products />
    </div>
  )
}

export default ProductPage
