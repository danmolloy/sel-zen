import Link from 'next/link'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Header({ showMenu}) {
  return (
    <div className='header-div'>
      <Link href={"/"}>
        <h2 className='header-title'>Zen in South London</h2>
        </Link>
      <button className='menu-icon' onClick={() => showMenu(true)}>
        <AiOutlineMenu />
      </button>
    </div>
  )
}
