import React from 'react'
import { FaFacebookF,FaTwitter, FaYoutube, FaSearch, FaMapMarkerAlt } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <div>
        <div className='flex items-center min-h-[60vh] justify-between bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 relative overflow-hidden'>

{/* social media links */}
<div className='flex flex-col space-y-2 ml-8'>
    <div className='bg-gradient-to-r from-[#4a5893] to-[#3b4a7a] text-white px-4 py-3 flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
      <FaFacebookF className='text-lg'/>
    </div>
    <div className='bg-gradient-to-r from-[#7baae8] to-[#5a9ae8] text-white px-4 py-3 flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
      <FaTwitter className='text-lg'/>
    </div>
    <div className='bg-gradient-to-r from-[#6a6a6a] to-[#5a5a5a] text-white px-4 py-3 flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
      <AiFillInstagram className='text-lg'/>
    </div>
    <div className='bg-gradient-to-r from-[#a12517] to-[#8a1f14] text-white px-4 py-3 flex justify-center items-center rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer'>
      <TfiYoutube className='text-lg'/>
    </div>
</div>

{/* form */}
<div className='text-center bg-white/10 backdrop-blur-sm rounded-2xl p-8 mx-8 shadow-2xl border border-white/20'>
    <div className='text-white font-bold text-[24px] text-left mb-6 flex items-center'>
      <FaSearch className='mr-3 text-[#ED9017]' />
      Fill out the form below to search Jobs
    </div>

        {/* taking filters  */}
    <div className='grid grid-cols-2 gap-4 mb-6'>
    <div className='bg-white rounded-lg shadow-md p-3'>
<label htmlFor="jobType" className='text-gray-500 text-xs font-semibold block mb-1'>Job Type</label>
<select id="jobType" className='w-full text-gray-700 text-sm border-none outline-none'>
<option value="option1">Select Job type</option>
<option value="option2">Government</option>
<option value="option3">Private</option>
</select>
</div>

<div className='bg-white rounded-lg shadow-md p-3'>
<label htmlFor="qualification" className='text-gray-500 text-xs font-semibold block mb-1'>Qualification</label>
<select id="qualification" className='w-full text-gray-700 text-sm border-none outline-none'>
<option value="option1">Select Qualification</option>
<option value="option2">Graduate</option>
<option value="option3">Post Graduate</option>
</select>
</div>

<div className='bg-white rounded-lg shadow-md p-3'>
<label htmlFor="experience" className='text-gray-500 text-xs font-semibold block mb-1'>Experience</label>
<select id="experience" className='w-full text-gray-700 text-sm border-none outline-none'>
<option value="option1">Experience upto (in years)</option>
<option value="option2">0-2 years</option>
<option value="option3">2-5 years</option>
</select>
</div>

<div className='bg-white rounded-lg shadow-md p-3'>
<label htmlFor="place" className='text-gray-500 text-xs font-semibold block mb-1'>Location</label>
<input className='w-full text-gray-700 text-sm border-none outline-none' id="place"  type='text' placeholder='Place of Posting'/>
</div>
    </div>

    {/* or line */}
    <div className='text-white text-[14px] font-semibold mb-4 flex items-center'>
      <div className='flex-1 h-px bg-white/30'></div>
      <span className='mx-4'>OR</span>
      <div className='flex-1 h-px bg-white/30'></div>
    </div>

    <div className='bg-white rounded-lg shadow-md p-4 mb-6'>
        <input className='w-full text-gray-700 text-sm border-none outline-none' type='text' placeholder='Enter Job Title or Organization Name'/>
    </div>

    <button className='bg-gradient-to-r from-[#ED9017] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#ED9017] text-white px-8 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
      Search Jobs
    </button>

    {/* numbers tab */}
    <div className='grid grid-cols-2 gap-4 mt-8'>

        <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white p-3 text-center font-bold text-lg'>10,234</div>
            <div className='bg-gray-50 p-3 text-center text-sm font-semibold text-gray-700'>Available Govt. Jobs</div>
        </div>

        <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white p-3 text-center font-bold text-lg'>15,234</div>
            <div className='bg-gray-50 p-3 text-center text-sm font-semibold text-gray-700'>Private Sector Jobs</div>
        </div>

        <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-[#2563eb] to-[#3b82f6] text-white p-3 text-center font-bold text-lg'>8,567</div>
            <div className='bg-gray-50 p-3 text-center text-sm font-semibold text-gray-700'>Skill Training Programs</div>
        </div>

        <div className='bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300'>
            <div className='bg-gradient-to-r from-[#ED9017] to-[#FF6B35] text-white p-3 text-center font-bold text-lg'>12,890</div>
            <div className='bg-gray-50 p-3 text-center text-sm font-semibold text-gray-700'>Registered Users</div>
        </div>
    </div>
</div>

{/* reg form */}
<div className='bg-gradient-to-br from-gray-900 to-black mr-8 h-full text-center rounded-2xl shadow-2xl border border-white/10'>
<div className='bg-gradient-to-r from-[#ED9017] to-[#FF6B35] text-white text-[20px] rounded-full w-2/3 m-auto mt-8 justify-center flex items-center p-3 shadow-lg'>
  Registration
  <span className='bg-white text-[#ED9017] text-[12px] border-2 border-white p-1 rounded-full ml-2 font-bold'>Free</span>
</div>
<div className='text-white my-6 flex items-center'>
  <div className='flex-1 h-px bg-white/30'></div>
  <span className='mx-4 font-semibold'>OR</span>
  <div className='flex-1 h-px bg-white/30'></div>
</div>
<div className='px-6 space-y-4'>
<input className='w-full p-3 rounded-lg text-gray-700 bg-white shadow-md border-none outline-none' type='text' placeholder='Enter username'/>
<input className='w-full p-3 rounded-lg text-gray-700 bg-white shadow-md border-none outline-none' type='password' placeholder='Enter password'/>
</div>

<div className='text-white text-sm px-6 my-4'>
  <span className='hover:text-[#ED9017] cursor-pointer transition-colors'>Forgot password</span> | 
  <span className='hover:text-[#ED9017] cursor-pointer transition-colors ml-1'>Login using OTP</span>
</div>
<button className='bg-gradient-to-r from-[#ED9017] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#ED9017] text-white px-6 py-3 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'>
  <Link to='/user'>Login</Link>
</button>
</div>

</div>
    </div>
  )
}

export default HeroSection