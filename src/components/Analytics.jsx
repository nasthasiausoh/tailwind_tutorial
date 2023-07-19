import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
             {/*this is going to start off with grid columns = 1 but then pass the medium break point then we will have have grid columns = 2. Remember we are taking a mobile design first approach. */}
             <img className='w-[500px] mx-auto my-4' src={Laptop} alt='laptop-img'/>
             <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold uppercase '>Data analytics dashboard</p>
                <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ducimus odit, neque totam temporibus ipsum ipsa, sapiente molestias, debitis voluptatem reprehenderit. Necessitatibus voluptas odit quam omnis eos nam at alias!</p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 mx-auto md:mx-0'>Get Started</button>
                {/* here we are doing margin-auto but anything over medium then we are setting the margin x to 0 */}
           
             </div>

        </div>

    </div>
  )
}

export default Analytics