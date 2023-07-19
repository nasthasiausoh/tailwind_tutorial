import React from 'react'
import Single from '../assets/single.png'
import Double from '../assets/double.png'
import Triple from '../assets/triple.png'

const Card = () => {
  return (
    <div className='w-full py-[10rem] px-4 bg-white'>
        {/* when it is wide screen we want the 3 cards to be displayed horizontally next to each other but when viewing on a smaller screen then we want it to collapse and be displayed vertically (one below the other). */}
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* rounded-lg gives us rounded corners to the shadow box 
                when adding a hover effect you need to include duration too*/}
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Single} alt='single-img'/>
                <h2 className='text-2xl font-bold text-center py-8'>Single User</h2>
                <p className='text-center text-4xl font-bold'>£149.99</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>500 GB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>1 User Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 2 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300'>
                {/* rounded-lg gives us rounded corners to the shadow box 
                when adding a hover effect you need to include duration too
                my-8 so that when it is on a mobile device, there is not overlay when scrolling up/down */}

                <img className='w-20 mx-auto mt-[-3rem] bg-transparent' src={Double} alt='double-img'/>
                <h2 className='text-2xl font-bold text-center py-8'>Partnership</h2>
                <p className='text-center text-4xl font-bold'>£199.99</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>1 TB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>2 Users Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 10 GB</p>
                </div>
                <button className='text-[#00df9a] bg-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>

            <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300'>
                {/* rounded-lg gives us rounded corners to the shadow box 
                when adding a hover effect you need to include duration too*/}
                <img className='w-20 mx-auto mt-[-3rem] bg-white' src={Triple} alt='triple-img'/>
                <h2 className='text-2xl font-bold text-center py-8'>Group Account</h2>
                <p className='text-center text-4xl font-bold'>£299.99</p>
                <div className='text-center'>
                    <p className='py-2 border-b mx-8 mt-8'>5 TB Storage</p>
                    <p className='py-2 border-b mx-8 mt-8'>Up to 10 Users Allowed</p>
                    <p className='py-2 border-b mx-8 mt-8'>Send up to 20 GB</p>
                </div>
                <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Start Trial</button>
            </div>
        </div>
    </div>
  )
}

export default Card