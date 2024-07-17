import React from 'react'

const About = () => {
  return (
    <div name="about" className='w-full h-screen bg-gradient-to-b
     from-cyan-500 via-blue-900 to-black text-white'
     >
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>

            <div className='pb-8'>

                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About</p>


            </div>
            <p className='text-xl mt-5 font-semibold '>
                Having studied law at the prestigious Faculty of Law, University of Delhi, 
                I bring a wealth of experience across various legal fields to meet your case 
                requirements. With extensive knowledge in diverse case categories, I am 
                well-equipped to offer comprehensive legal advice and support. Feel free to 
                approach me for any legal needs.


            </p>
            <br />

            <p className='text-xl mt-5 font-semibold'>
                I am focused on getting justice for my clients through the 
                approach of getting favorable outcomes. Be it matrimonial, civil law, property law, MACT, consumer court and 
                N.I. Act matters, I always ensure my clients get the justice they deserve.
                Working with HONESTY and INTEGRITY is my mantra. For I truly believe in the Shloka
                from the Upanishads: Satyameva Jayate!
            </p>


        </div>


    </div>
  )
}

export default About