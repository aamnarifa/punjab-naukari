import React, { useState, useEffect } from 'react'
import searchicon from '../../assets/searchicon.svg';
import JobDisplay from '../../components/JobDisplay';
import Featured from '../../components/Featured';
import axios from 'axios';
const Jobs = () => {
  // const [data, setData] = useState({});
  const [hasPremium, setHasPremium] = useState(false);
  const [showPremiumPopup, setShowPremiumPopup] = useState(false);
  const [jobsArray, setJobsArray] = useState([])


  const handleJobFinderClick = () => {
    if (!hasPremium) {
      setShowPremiumPopup(true);
    } else {
    }
  };

  

  const removeJob = (id) => {
    // setJobsArray((prevJobs) => prevJobs.filter((job) => job.id !== id));
  };

  const handleSaveJob = (id) => {
    const savedJobs = JSON.parse(localStorage.getItem('savedJobs')) || {};

    // Check if the job ID is already saved
    if (savedJobs[id]) {
      console.log('Job is already saved');
    } else {
      savedJobs[id] = true;
      localStorage.setItem('savedJobs', JSON.stringify(savedJobs));
      console.log('Job saved successfully');
    }
  };

  const handlePopupClose = () => {
    setShowPremiumPopup(false);
  };
  
  // fetching the data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pgrkam-backend.onrender.com/get-jobs');
        setJobsArray(Object.values(response.data['Featured']));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);
  
  console.log(jobsArray);

  return (
    <div className='p-8'>
      {/* Main Content */}
      <div className='max-w-6xl mx-auto'>

        {/* search */}
        <div className='flex gap-4 mb-8'>
          <div className='bg-white shadow-lg rounded-xl flex-1 flex items-center px-6 py-4'>
            <input className='flex-1 py-2 px-4 text-gray-700 border-none outline-none' type='text' placeholder='Search jobs, companies, or keywords...' />
            <button className='bg-gradient-to-r from-[#ED9017] to-[#FF6B35] text-white p-3 rounded-lg hover:shadow-lg transition-all duration-300'>
              <img className='w-5 h-5' src={searchicon} alt="searchicon" />
            </button>
          </div>
          <button 
            onClick={handleJobFinderClick} 
            className='bg-gradient-to-r from-[#ED9017] to-[#FF6B35] hover:from-[#FF6B35] hover:to-[#ED9017] text-white px-8 py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105'
          >
            Job Finder
          </button>
        </div>

        {/* Premium Popup */}
        {showPremiumPopup && (
          <div className='fixed top-0 left-0 w-full h-full flex flex-col items-center justify-center bg-white bg-opacity-70'
          >
            <div className='my-8 text-[24px]  text-center font-semibold'>Join <span className='text-[#4f2ce0] font-bold'>PGRKAM Premium </span> and get access to career - boosting features. </div>
            <div className='bg-white w-[40vw] p-8 rounded-md shadow-2xl'>
              {/* Close button */}
              <div className='flex justify-end'> <button
                className='flex p-2 cursor-pointer'
                onClick={handlePopupClose}
                >
                &times;
              </button></div>

              {/* Popup content */}
              <div className='my-4 '>
                <h2 className='text-xl font-semibold mb-4 text-center'>Premium Information</h2>
                <ul className='list-disc my-auto'>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, ab!</li>
                  <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos provident exercitationem accusantium recusandae modi quidem vitae consequatur perferendis sit repudiandae sint repellendus voluptatum beatae velit natus, neque fugit tempora corporis.  </li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>

                <div className='text-center my-4'>
                  <button className='rounded-lg py-2 px-8 bg-[#ED9017] text-white font-bold text-center'>
                    XXX / Month
                  </button>
                </div>
              </div>
              {/* Add more premium details as needed */}
            </div>
          </div>
        )}

        {/* filters */}
        <div className='bg-white rounded-xl shadow-lg p-6 mb-8'>
          <h3 className='text-lg font-semibold text-gray-800 mb-4'>Filter Jobs</h3>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Salary Range</label>
              <select className='w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED9017] focus:border-transparent'>
                <option value="Salary">Select Salary Range</option>
                <option value="0-25000">₹0 - ₹25,000</option>
                <option value="25000-50000">₹25,000 - ₹50,000</option>
                <option value="50000+">₹50,000+</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Workplace Type</label>
              <select className='w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED9017] focus:border-transparent'>
                <option value="workplace">Select Workplace Type</option>
                <option value="office">Office</option>
                <option value="remote">Remote</option>
                <option value="hybrid">Hybrid</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Experience Level</label>
              <select className='w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED9017] focus:border-transparent'>
                <option value="experience">Select Experience</option>
                <option value="fresher">Fresher (0-1 years)</option>
                <option value="junior">Junior (1-3 years)</option>
                <option value="senior">Senior (3+ years)</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700 mb-2'>Location</label>
              <select className='w-full py-3 px-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#ED9017] focus:border-transparent'>
                <option value="location">Select Location</option>
                <option value="chandigarh">Chandigarh</option>
                <option value="ludhiana">Ludhiana</option>
                <option value="amritsar">Amritsar</option>
              </select>
            </div>

          </div>
        </div>

        {/* start of jobs */}
        <div className='text-center mb-8'>
          <h2 className='text-2xl font-bold text-gray-800 mb-2'>Recommended Jobs For You</h2>
          <p className='text-gray-600'>Based on your profile and preferences</p>
        </div>

        {/* jobs */}
        <div className='space-y-6'>
          {jobsArray.map(jobData => (
            <JobDisplay jobData={jobData} key={jobData.key} removeJob={removeJob} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs 
