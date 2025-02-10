import React from 'react'
import {Link} from 'react-router-dom'

const NavbarItems = [
    {id: 1, title:'home', link:'/'},
    {id: 2, title:'produtos', link:'/produtos'},
    {id: 3, title:'contato', link:'/contato'}
]

const Navbar = () => {
  return (
    <>
    <ul className='flex gap-10'>
    {NavbarItems.map((item)=>(
        
            <li key={item.id}>
                <Link to={item.link}>{item.title}</Link>
            </li>
        
    ))}
    </ul>
    </>
  )
}

export default Navbar
