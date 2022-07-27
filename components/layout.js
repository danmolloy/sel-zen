import { useState } from 'react'
import Footer from '../components/footer'
import Header from './header'
import Menu from './menu'

export default function Layout({ children }) {
  const [showMenu, setShowMenu] = useState(false)

  return (
    <div className='layout-div'>
      {showMenu && <Menu showMenu={e => setShowMenu(e)}/>}
      <Header showMenu={e => setShowMenu(e)}/>
      <div className="main-div">
        {children}      
      </div>
      <Footer />
    </div>
  )
}
