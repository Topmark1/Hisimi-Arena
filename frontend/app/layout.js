//'use client'

import Header from "../components/Header";
import Footer from "../components/Footer";

import '../styles/globals.css'


export default async function RootLayout({children}) {
  

  return (
    <html lang="en">
    <body className=''>
    <div className='font-Sa' >
      <Header />
      {children}
      <Footer />
      </div>
      </body>
  </html>
  )
}
