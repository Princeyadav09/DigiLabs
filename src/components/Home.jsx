import React from 'react'
import img from '../assets/Hero 3 ~ desktop.png'
import img1 from '../assets/Company Logo.png'
import img2 from '../assets/Company Logo (1).png'
import img3 from '../assets/Company Logo (2).png'
import img4 from '../assets/Company Logo (3).png'


const Home = () => {
  return (
    <div className='grid lg:grid-cols-2 md:grid-cols-1 bg-blue-600 h-full mt-[80px]'>
         <div className=' m-auto p-3 order-2 lg:order-1'>
                <h1 className='text-white font-bold text-5xl '>Your Supercharged <br /> Design Workflow.</h1>
                <p className='text-gray-300 my-10'>We've been told it is not possible to overachieve our customers' <br />
                    expectations.we have not reinvented the wheel, we decided to build upon it.
                </p>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-auto">
                  Get Started
                </button>
                <h1 className='text-white font-bold mt-10 mb-3'>Who supports us </h1>
                <div className='grid md:grid-cols-4 grid-cols-2 gap-5'>
                      <div>
                        <img src={img1} alt="" />
                      </div>
                      <div>
                        <img src={img2} alt="" />
                      </div>
                      <div>
                        <img src={img3} alt="" />
                      </div>
                      <div>
                        <img src={img4} alt="" />
                      </div>
                </div>
         </div>
         <div className='order-1 lg:order-2'>
            <img className='h-full w-full' src={img} alt="" />
         </div>
    </div>
  )
}

export default Home
