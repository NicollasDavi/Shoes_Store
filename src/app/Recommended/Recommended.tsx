import React from 'react'

const Recommended = () => {
  return (
    <>
        <div>
            <h2 className='ml-80 text-2xl mt-5 font-bold'>Recomended</h2>
            <div className='Recomended-flex flex ml-80 mb-5 mt-5 '>
                <button className='px-5 py-2 mr-2 bg-transparent border border-solid border-[#ccc] rounded-md cursor-pointer'>All Products</button>
                <button className='px-5 py-2 mr-2 bg-transparent border border-solid border-[#ccc] rounded-md cursor-pointer'>Nike</button>
                <button className='px-5 py-2 mr-2 bg-transparent border border-solid border-[#ccc] rounded-md cursor-pointer'>Adidas</button>
                <button className='px-5 py-2 mr-2 bg-transparent border border-solid border-[#ccc] rounded-md cursor-pointer'>Puma</button>
                <button className='px-5 py-2 mr-2 bg-transparent border border-solid border-[#ccc] rounded-md cursor-pointer'>Vans</button>
            </div>
            
        </div>
    </>
  )
}

export default Recommended