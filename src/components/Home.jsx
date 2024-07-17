import React from 'react'
import HeroImage from '../assets/heroImage.jpg'
import { MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from 'react-scroll'

const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-blue-800 to-cyan-500
    text-white'> 

        <div className='max-w-screen-lg mx-auto flex flex-col items-center 
        justify-center h-full py-8 px-8 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>
                    I'm an Advocate, with the expertise
                </h2>
                <p className='text-gray-200 py-4 max-w-md font-bold'>
                    I have 6+ years of experience in fighting cases and winning them.
                    Currently I am based out of Supreme Court, Delhi High Court and District and Sessions Court Delhi,Gurugram and Faridabad, working on Family Law, Property Law, Civil Cases, MACT, N.I. Act and Commercial Cases.
                    Press icons on the left to reach out!
                </p>
                <div>
                    <Link 
                    to='experience' 
                    smooth 
                    duration = {500}
                    className='group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-red-400 to-white cursor-pointer'>
                        Experience 
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                    <img src={HeroImage} alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
        </div>
    </div>
  )
}

export default Home