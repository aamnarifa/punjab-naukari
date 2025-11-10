import React from 'react'
import logo from "../assets/punjab-naukari-logo-new.svg"
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <>
    {/* Top Bar */}
    <div className='bg-gradient-to-r from-[#2563eb] to-[#3b82f6] h-[50px] flex justify-end pr-12 text-[13px] items-center font-[400] text-white shadow-md'>
      <span className='hover:text-gray-200 transition-colors cursor-pointer'>English / ਪੰਜਾਬੀ</span>
      <span className='mx-4'>|</span>
      <span className='hover:text-gray-200 transition-colors cursor-pointer'>FAQs</span>
    </div>

    {/* Main Navigation */}
    <div className='bg-gradient-to-r from-[#e0f2fe] to-[#f0f9ff] py-4 shadow-lg'>
        <div className='flex justify-between items-center mx-12'>
            <div className='flex items-center'>
              <div className='mr-6'>
                <img src={logo} alt="logo" className='h-16 w-auto' />
              </div>
              <div>
                <div className='text-[18px] font-[800] text-gray-800 tracking-wide'>PUNJAB NAUKARI</div>
                <div className='text-[14px] font-[600] text-gray-700'>
                  Your Gateway to Punjab Employment
                </div>
                <div className='text-[14px] font-[600] text-gray-700'>
                  Connecting Talent with Opportunities
                </div>
              </div>
            </div>
            <div className='text-[14px] font-[600]'>
              <ul className='flex space-x-8'>
                <li className='hover:text-[#2563eb] transition-colors cursor-pointer'>HOME</li>
                <li className='hover:text-[#2563eb] transition-colors cursor-pointer'>ABOUT US</li>
                <li className='hover:text-[#2563eb] transition-colors cursor-pointer'>CONTACT US</li>
                <li className='hover:text-[#2563eb] transition-colors cursor-pointer'>
                  <Link to='/analytics' className='bg-[#2563eb] text-white px-4 py-2 rounded-lg hover:bg-[#3b82f6] transition-colors'>
                    ADMIN LOGIN
                  </Link>
                </li>
              </ul>
            </div>
        </div>

        {/* Announcement Bar */}
        <div className='text-[12px] flex justify-between mx-12 mt-4'>
           <div className='bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-800 max-w-fit px-6 py-2 rounded-lg shadow-md font-semibold'>
             List of registered Recruiting Agents in Punjab - for sending abroad on work visa
           </div>
        </div>
    </div>
    </>
  )
}

export default Navbar