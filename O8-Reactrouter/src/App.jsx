import { useState } from 'react'
import './App.css'
import Header from './component/header/Header'
import Footer from './component/footer/Footer'
import { Outlet } from 'react-router-dom'


  export default function App() {
    return (
      <>
      <Header/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
