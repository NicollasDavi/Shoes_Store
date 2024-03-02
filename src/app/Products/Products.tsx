import React from 'react'


const Products = ({result}) => {
  return (
    <>
      <section className='card-container flex flex-wrap ml-80 mt-8'>
        {result}
      </section>
    </>
  )
}

export default Products
