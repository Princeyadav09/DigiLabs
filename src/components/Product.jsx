import React from 'react'
import img from '../assets/Left/Right.png';
import arrow from '../assets/right.png'
import img1 from '../assets/Left/Icon placeholder (6).png'
import img2 from '../assets/Left/Icon placeholder (7).png'
import img3 from '../assets/Left/Icon placeholder (8).png'

const Product = () => {
  return (
    <div className=' my-10'>
       <center><h1 className='font-bold text-2xl'>Redefining Product Features</h1></center>
        <center>
         <p className='text-gray-600 p-5'>Keeping your eye on the ball while performing a deep dive on the start-up mentality to  derive convergence on cross-platform integration.</p>
        </center>   
        <div className='grid lg:grid-cols-2'>
            <div className='m-auto lg:order-1 order-2 p-5'>
            <div>
                <img src={img1} alt="" />
                <p className='font-bold text-2xl'>Explore ideas together</p>
                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration. </p>
                <p className='flex text-blue-600 font-bold'>Learn more
                    <img src={arrow} alt="" />
                </p>

            </div>
            <div>
                <img src={img2} alt="" />
                <p className='font-bold text-2xl'>Bring those ideas to life</p>
                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration. </p>
                <p className='flex text-blue-600 font-bold'>Learn more
                    <img src={arrow} alt="" />
                </p>

            </div>
            <div>
                <img src={img3} alt="" />
                <p className='font-bold text-2xl'>Ship better outcomes</p>
                <p>Engage audience segments and finally create actionable insights. Amplify vertical integration. </p>
                <p className='flex text-blue-600 font-bold'>Learn more
                    <img src={arrow} alt="" />
                </p>

            </div>

            </div>
            <div className='order-1 lg:order-2 flex justify-center p-5'>
            <img className='' src={img} alt="" />
            </div>

        </div>
    </div>
  )
}

export default Product
