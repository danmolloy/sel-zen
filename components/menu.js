import Link from "next/link"
import { AiOutlineClose } from 'react-icons/ai'

export default function Menu({ showMenu, menuItems }) {
  

  return (
    <div className="menu-div">
      <div className="menu-header h-16"></div>
      {menuItems.map(i => (
        <Link href={i.link}>
          <div className="menu-item">
            <p>{i.title}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}