import React from 'react'
import CivilLaw from '../assets/portfolio/CivilLaw.jpg'
import CommercialLaw from '../assets/portfolio/CommercialLaw.jpeg'
import CriminalLaw from "../assets/portfolio/CriminalLaw.jpg"
import FamilyLaw from "../assets/portfolio/FamilyLaw.png"
import PropertyLaw from "../assets/portfolio/PropertyLaw.jpg"
import MACTLaw from "../assets/portfolio/MACTLaw.jpg"



const Experience = () => {
  const experiences = [
    {
      id:1,
      src: FamilyLaw,
      desc: 'Family Law',
      
    },
    {
      id:2,
      src: PropertyLaw,
      desc: 'Property Law',
    },
    {
      id:3,
      src: CivilLaw,
      desc: 'Civil Law',
    },
    {
      id:4,
      src: CommercialLaw,
      desc: 'N.I. Act and Commercial Law',
    },
    {
      id:5,
      src: MACTLaw,
      desc: 'Motor Accidents Claims Tribunal',
    },
    {
      id:6,
      src: CriminalLaw,
      desc: 'Bharatiya Nyay Sanghita',
    },
  ]



  return (
    <div name="experience" className='bg-gradient-to-b from-black via-blue-800 to-cyan-500 text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
          <div className='py-40 pb-8'>
            <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Experience</p>
            <p className='py-6'> Check out some of my fields of expertise right here</p>
          </div>
          <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8
          px-12 sm:px-0'>
          {
            experiences.map(({id,src,desc})=>(
              <div key={id} className='shadow-md  shadow-gray-600 rounded-lg'>
              <img src={src} alt=""  className='rounded-md duration-200 hover:scale-105 size-auto'/>
              <div className=' text-lg flex items-center justify-center'>
                <button className='w-full px-3 py-0 m-4 duration-200 hover:scale-105'>{desc}</button>
              </div>
            </div>
            ))}
          </div>
        </div>
    </div>
  )
}

export default Experience