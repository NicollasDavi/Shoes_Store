import React from 'react'
import Buttons from '../components/Buttons'

const Recommended = ({handleClickHandler}) => {
  return (
    <>
        <div>
            <h2 className='ml-80 text-2xl mt-5 font-bold'>Recomended</h2>
            <div className='Recomended-flex flex ml-80 mb-5 mt-5 '>
                <Buttons handleClick={handleClickHandler} value="" title="All Products"/>
                <Buttons handleClick={handleClickHandler} value="Nike" title="Nike"/>
                <Buttons handleClick={handleClickHandler} value="Adidas" title="Adidas"/>
                <Buttons handleClick={handleClickHandler} value="Puma" title="Puma"/>
                <Buttons handleClick={handleClickHandler} value="Vans" title="Vans"/>
            </div>
            
        </div>
    </>
  )
}

export default Recommended