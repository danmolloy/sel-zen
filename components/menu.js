import Link from "next/link"
import { AiOutlineClose } from 'react-icons/ai'

const menuItems = [
  {
    title: "About",
    link: "/about"
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
    title: "Contact",
    link: "/contact"
  },
]

export default function Menu({ showMenu }) {
  

  return (
    <div className="menu-div">
      <div className="menu-header flex flex-row">
        <button className="close-menu-icon" onClick={() => showMenu(false)}>
          <AiOutlineClose />
        </button>
      </div>
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