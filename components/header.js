import Link from 'next/link'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'

export default function Header({ showMenu, menuItems, showingMenu }) {
  return (
    <div className='header-div'>
      <div className='header-upper'>
      <Link href={"/"}>
        <h2 className='header-title'>Zen in South London</h2>
        </Link>
      {showingMenu 
      ? <button className='menu-icon md:hidden' onClick={() => showMenu(false)}>
          <AiOutlineClose />
        </button>
      : <button className='menu-icon md:hidden' onClick={() => showMenu(true)}>
        <AiOutlineMenu />
      </button>}
      </div>
      <div className='header-lower'>
        {menuItems.map(i => (
          <Link href={i.link}>
          <div className="header-menu-item">
            <p>{i.title}</p>
          </div>
        </Link>
        ))}
      </div>
    </div>
  )
}
