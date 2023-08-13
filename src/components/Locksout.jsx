import React from 'react'
import cmplogo from '../assets/Left/Company Logo (5).png'
import avatar from '../assets/Left/Avatar (3).png'


const Locksout = () => {
  return (
    <div className='p-10 bg-gray-100'>
         <center><img src={cmplogo} alt="" /></center>
         <center>
         <p className='p-5'>
         Thank you for making it painless, pleasant and most of all hassle <br /> free! I love LookScout. I can't say enough about LookScout. <br /> Great job, I will definitely be ordering again!
         </p>
         </center>
         <center>
                 <div className='flex justify-center'>
                    <img src={avatar} alt="" />
                    <p className='ms-1'>Lisa Smith <br /> CEO</p>
                </div>
         </center>

    </div>
  )
}

export default Locksout
