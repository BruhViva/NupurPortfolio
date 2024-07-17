import React from 'react'

const Contact = () => {
  return (
    <div name='contact' 
    className='w-full h-screen bg-gradient-to-b
     from-black via-blue-800 to-cyan-500 p-4 text-white'>
        <div className='flex flex-col justify-center max-w-screen-lg mx-auto h-full'>
            <div className='pb-8'>
                <p className=' text-4xl font-bold inline border-b-4 border-gray-500'>Contact</p>
                <p className='py-6'>Submit the form below to get in touch with me</p>
            </div>

            <div className='flex justify-center items-center'>
                <form action="https://getform.io/f/byvpppza" method='POST'
                className='flex flex-col w-full md:w-1/2'>
                    <input 
                    type="text" 
                    name='name' 
                    placeholder='Enter your name' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <input type="text" name='email' placeholder='Enter your email' 
                    className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none' />

                    <textarea name='message' placeholder='Enter a one liner on your query, Consultation fees will apply'
                    rows = '10' className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-orange-500
                    to-red-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md
                    hover:scale-110 duration-300'>Let's talk
                    </button>
                    <p className='font-bold'>
                        Consultation fees will apply, payment details via contact method used by client.
                    </p>

                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact