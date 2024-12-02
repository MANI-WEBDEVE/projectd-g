import { Menu } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
  <>
  <nav className='flex justify-between items-center py-2 px-8 relative z-[100]'>
    <div><Image src={"/image/logo.png"} height={130} width={130} alt='logo' className=''/></div>
    <div className='hidden md:block '>
      <div className='flex gap-5 '>
      <Link href={'#'}><p  className='text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  '>Home</p></Link>
      <Link href={'#'}><p className='text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  '>About Us</p></Link>
      <Link href={'#'}><p className='text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  '>Services</p></Link>
      <Link href={'#'}><p className='text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  '>Portfolio</p></Link>
      <Link href={'#'}><p className='text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  '>Testimonial</p></Link>
      <Link href={'#'}><p className='text-[#6BBFBC] transition-all duration-300 cursor-pointer hover:text-white  '>Contact Us</p></Link>
      </div>
    </div>
    <div className="block md:hidden ">
      <Menu />
    </div>
    </nav>
    </>
      
  )
}
    
export default Header
