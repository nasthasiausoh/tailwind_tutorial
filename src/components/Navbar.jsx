import React, {useState} from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    // setting the useState for our nav bar


    // creating function that handles the toggling of our nav bar. Starting off with it being false when we instantiate the variable in the useState. 
    const handleNav = () => {
        setNav(!nav);
    }
    

  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
        {/* 
        h-24 is height and is equivalent to 6rem 
        max-w- is max width
        mx-auto is margin-left and margin-right set to auto
        padding on the left = px-4: 4 is equivalent to 1 rem
        */}

            <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
            {/* 
            w-full is width full
            text-3xl is setting the text size to 3xl */}
            <ul className='hidden md:flex'>
                <li className='p-4'>Home</li>
                <li className='p-4'>Company</li>
                <li className='p-4'>Resources</li>
                <li className='p-4'>About</li>
                <li className='p-4'>Contact </li>
            </ul>

            {/* Since this is a .jsx file we have been typing in JSX however, if we want to include JavaScript syntax, we must include curly braces and put the text within there like we have done below: */}
            <div onClick={handleNav} className='block md:hidden'> 
            {/* gave this a class name because we dont want it to show unless we are on smaller screens* So we are displaying=block and anything above the medium break point (778px) then qe want it to be hidden. (There are different break points. default is approx 660px and medium is 778px) */ }
                {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} /> }
                {/* this means: if the nav is TRUE then show the X menu icon otherwise so the normal hamburger menu icon. These two lines allow us to toggle the icons when we click on it. */}


            <div className={!nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ' : 'fixed left-[-100%]'} >
            {/* So if !nav then display vertical navbar if not then hide the nav bar (hence the -100%) */}

            <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4'>REACT.</h1>
            {/* m-4 => margin-4 */}

                <ul className='uppercase p-4'>
                    {/* pt means padding-top and we are setting that to 24 which is equivalent to 6rem */}
                    <li className='p-4 border-b border-gray-600'>Home</li>
                    <li className='p-4 border-b border-gray-600'>Company</li>
                    <li className='p-4 border-b border-gray-600'>Resources</li>
                    <li className='p-4 border-b border-gray-600'>About</li>
                    <li className='p-4'>Contact </li>
                </ul>
            </div>
        </div>
    </div>
    

  ) 
}

export default Navbar
// downloaded tailwind css intellisense 