import React from 'react'
import Products from '../Products/Products'
import Recommended from '../Recommended/Recommended'
import Sidebar from '../Sidebar/Sidebar'

interface Product {
  img: string;
  title: string;
  star: number;
  newPrice: number;
  prevPrice: number;
  category: string; // Adicione os tipos conforme necessário
  color: string;
  company: string;
}

import { useState } from "react";
import Nav from "../Navigation/Nav";

//database
import products from '../../db/data'
import { title } from "process";
import Card from "../components/Card";

const ProductPage = () => {

  const [selectedCategory , setSelectedCategory] = useState(null)

  //input filter

  const [query, setQuery] = useState("")

  const handleInputChange = (event:any) => {
    setQuery(event.target.value)
  }

  const filteredIcons = products.filter(product => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1);


  const handleChange = (event:any) => {
    setSelectedCategory(event.target.value)
  }

  const handleClick = (event:any) => {
    setSelectedCategory(event.target.value)
  }


  function filteredData(products: any, selected: any, query: any){
    let filteredProducts = products

    if(query){
      filteredProducts = filteredIcons
    }

    if(selected){
      filteredProducts = filteredProducts.filter(
        ({category, color, company, newPrice, title} : Product) => 
        category === selected || 
        color === selected || 
        company === selected || 
        newPrice === selected || 
        title === selected
        )
    }


    return filteredProducts.map(({img, title, star, newPrice, prevPrice} : Product) => (
      <Card  
      key={Math.random()}
      img={img}
      title={title}
      star={star}
      newPrice={newPrice}
      prevPrice={prevPrice}

      />
    ))



  }

  const result = filteredData(products, selectedCategory, query)



  return (
    <div >
      <Sidebar handleChange={handleChange}/>
      <Nav query={query} handleInputChange={handleInputChange}/>
      <Recommended handleClickHandler={handleChange}/>
      <Products result={result}/>
    </div>
  )
}

export default ProductPage
