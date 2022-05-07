import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'

export default function MainLayout({children}) {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
