
import React from "react"
import { useState } from "react"
import Footer from "./Footer"
import Header from "./header"
import Sidebar from "./Sidebar"
import './styles/GlobalStyles.css'

const Layout = ({ children }) => {
  const [clicked, setClicked] = useState(false)
  return (
    <>
      <Header clicked={clicked} setClicked={setClicked} />
      <Sidebar clicked={clicked} setClicked={setClicked} />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
