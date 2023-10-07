import React from 'react'
import Announcement from '../componentes/Announcement'
import Navbar from '../componentes/Navbar'
import Slider from '../componentes/Slider'
import Categories from '../componentes/Categories'
import Products from '../componentes/Products'
import Newsletter from '../componentes/Newsletter'
import Footer from '../componentes/Footer'

export default function Home() {
  return (
    <div>
        <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
    </div>
  )
}
