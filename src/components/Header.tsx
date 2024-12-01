import React from 'react'

const Header = () => {
  return (
    <>
      <nav className="flex items-center justify-between p-4 text-white bg-blue-500">
        <a href="#" className="text-lg font-bold">Digital Pencil</a>
        <ul className="flex space-x-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About</a></li>
          <li><a href="#" className="hover:underline">Contact</a></li>
        </ul>
      </nav>
    </>
  )
}

export default Header
