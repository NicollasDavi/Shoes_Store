import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'

const Sidebar = ({handleChange}) => {
  return (
    <>
        <section className="sidebar w-2/12 fixed h-full border-r-2 border-[#e5e5e5] flex z-3 flex-col items-center mt-32">
        <Category handleChange={handleChange}/> 
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar