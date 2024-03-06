import React from 'react'
import Category from './Category/Category'
import Colors from './Colors/Colors'
import Price from './Price/Price'



const Sidebar: React.FC<{ handleChange: React.ChangeEventHandler<HTMLInputElement> }> = ({handleChange}) => {
  return (
    <>
        <section className="sidebar w-2/5 md:w-2/12 absolute h-full border-r-2 border-[#e5e5e5] flex z-3 flex-col items-center mt-20 md:mt-32">
        <Category handleChange={handleChange}/> 
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>
        </section>
    </>
  )
}

export default Sidebar