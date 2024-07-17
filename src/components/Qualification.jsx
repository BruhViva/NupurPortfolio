import React from 'react'
import DelhiUniversity from '../assets/DelhiUniversity.png'
import LSRCollege from '../assets/LSRCollege.jpeg'
import NotreDamePatna from '../assets/NotreDamePatna.png'

const Qualification = () => {

    const schools= [
        {
            id:1,
            src: DelhiUniversity,
            title: 'Faculty of Law, University of Delhi',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            src: LSRCollege,
            title: 'LSR College',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            src: NotreDamePatna,
            title: 'Notre Dame Patna',
            style: 'shadow-yellow-500'
        },
    ]



  return (
    <div name='qualification' className='bg-gradient-to-b
     from-cyan-500 via-blue-800 to-black  pt-40'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
            <div>
                <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline'>Educational Qualifications</p>
                <p className='py-6 font-semibold'>These are the esteemed institutions 
                    where I have obtained qualifications</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0'>

                {
                    schools.map(({id, src, title, style}) => (
                        <div key={id} 
                        className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg 
                            ${style}`}>
                            <img src={src} alt="" />
                            <p className='mt-4'>{title}</p>
                        </div>

                    ))
                }
                
            </div>
            <div>
            </div>
        </div>
    </div>
  )
}

export default Qualification