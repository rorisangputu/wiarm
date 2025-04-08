import React from 'react'
import { Link } from "react-router-dom";
import corn from '../assets/corn_img.png'
import { FaPhoneAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='w-full bg-[#34633c] py-7 text-white'>
      <div className='w-[90%] max-w-7xl mx-auto flex flex-col justify-between'>
        
        {/* Top Section */}
        <div className='w-full grid grid-cols-1 md:grid-cols-3 gap-10'>
          
          {/* Logo and Contact Info */}
          <div className='flex flex-col gap-3'>
            <Link to={"/"}>
              <div className="flex items-center gap-3 my-2">
                <img src={corn} alt="WiARM Logo" className="w-7 h-7" />
                <h1 className="font-semibold text-xl">WiARM</h1>
              </div>
            </Link>
            <div className='flex flex-col gap-2 text-sm'>
              <p>125 Crop Street, Johannesburg</p>
              <p>House Name: Regal House</p>
              <div className='flex items-center gap-2'>
                <FaPhoneAlt />
                <p>+27 (11)-574-9802</p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h1 className='text-xl font-semibold mb-3'>Quick Links</h1>
            <ul className='space-y-2 text-sm'>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/blog">Blog</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Contact Form */}
          <div className=''>
            <p className='text-xl font-semibold mb-2'>Send a Message</p>
            <form className='flex flex-col gap-3'>
              <div className='flex flex-col sm:flex-row gap-3'>
                <input 
                  type="text" 
                  placeholder="Name" 
                  className='w-full sm:w-1/2 p-2 rounded bg-white text-black placeholder-gray-600' 
                />
                <input 
                  type="email" 
                  placeholder="Email" 
                  className='w-full sm:w-1/2 p-2 rounded bg-white text-black placeholder-gray-600' 
                />
              </div>
              <textarea 
                placeholder="Your Message" 
                rows={4}
                className='w-full p-2 rounded bg-white text-black placeholder-gray-600 resize-none' 
              />
              <button 
                type="submit" 
                className='bg-[#588157] hover:bg-[#47664b] px-4 py-2 rounded text-white text-sm w-fit'
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Section */}
        <div className='w-full flex flex-col md:flex-row justify-between items-center mt-6 text-sm border-t border-white pt-4'>
          <p>Terms & Conditions | Privacy Policy</p>
          <p>&copy; 2025 WiARM - Women in Agriculture Rural Movement</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
