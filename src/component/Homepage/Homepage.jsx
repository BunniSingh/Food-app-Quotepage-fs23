import React from 'react'
import { Nevbar } from './Nevbar/Nevbar'
import Footer from './Footer/Footer'
import Quotes from '../Quotepage/Quotes'

export const Homepage = () => {
  return (
    <>
        <Nevbar/>
          <Quotes/>
        <Footer/>
    </>
  )
}
