import React from 'react'

function NavMenu() {
  return (
    <nav className="nav">
    <a href="/"  className=" Infinity Stores" >
        Infinity stores
    </a>
    <ul>
      <li>
      <a href="/about" >About</a>
      </li>
      <li>
      <a href="/products" >Products</a>
      </li>
      <li>
      <a href="/home" >Home</a>
      </li>
    </ul>

  </nav>
  )
}

    export default NavMenu;       