import { useState } from 'react'
import Footer from '../components/footer'
import Header from './header'
import Menu from './menu'

const menuItems = [
  {
    title: "About",
    link: "/about"
  },
  
  {
    title: "Calendar",
    link: "/calendar"
  },
  {
    title: "Gallery",
    link: "/gallery"
  },
  {
    title: "Zazen",
    link: "/zazen"
  },
  {
    title: "Links",
    link: "/links"
  },
  {
    title: "Donations",
    link: "/donations"
  },
  {
    title: "Contact",
    link: "/contact"
  },
]

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='layout-div'>
      {showMenu && <Menu menuItems={menuItems} showMenu={e => setShowMenu(e)}/>}
      <Header menuItems={menuItems} showingMenu={showMenu} showMenu={e => setShowMenu(e)}/>
      <div className="main-div">
        {children}      
      </div>
      <Footer />
    </div>
  )
}
