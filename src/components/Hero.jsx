import React from 'react'
import Typed from 'react-typed';

const Hero = () => {
  return (
    <div className='text-white'>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
            {/* mt = margin-top. w-full = width full. h-screen = 100 vh (viewport) of the device's screen. mx-auto= margin-auto. flex-col = flex-direction column */}
            <p className='text-[#00df9a] md:text-xl text-l font font-bold p-2 uppercase'> I'm currently learning how to use tailwind css!</p>
            {/* brackets =[] are used when ever you want to add in a custom thing.like a custom colour or font etc.
            p-2 is padding=> 2.  */}
            <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>My Tailwind Webpage.</h1>
            {/*             
            md: is medium break-point (medium- anything over 778px)
            anything over small text 6xl
            then mobile devices leave text at 4xl
            anything over medium give a padding y of 6
             */}
            <div className='flex justify-center items-center'>
                <p className='md:text-5xl sm:text-4xl text-xl font-bold'>Easy as... </p>
                <Typed
                className='md:text-5xl md:pl-4 sm:text-4xl text-xl font-bold pl-2'
                  strings={['A', 'B', 'C', 'or 123 😆']} 
                  typeSpeed={120} 
                  backSpeed={140}
                  loop 
                  />
            </div>
            <p className='md:text-2xl text-xl font-bold text-gray-500 pt-2'>The sole purpose of this webpage to help me understand the basics of Tailwind CSS while using a mobile-first design approach.</p>
            <button className='bg-[#00df9a] text-black w-[200px] rounded-md font-medium my-6 mx-auto py-3'>Get Started</button>
            {/* for buttons on tailwind css, the default is that it has no styling at all whereas bootstrap does has styling automatically applied. */}
            {/* in this case using mx-auto moved it into the center of the div and  */}



        </div>

    </div>
  )
}

export default Hero