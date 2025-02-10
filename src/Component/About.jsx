import React from 'react'
import photo from '../Image/photo.jpg'

function About() {
  return (
    <div className=' pt-6 w-full h-full flex justify-center'>
        <div className='relative w-[600px] h-[400px]  rounded-lg shadow-2xl justify-items-center'>
            <h1 className=' pt-4 font-bold'>About</h1>
       
        <div className='' >
            <img className='rounded-full w-32 aspect-square' src={photo} alt="" />
        </div>
        <div>
            <label className='font-bold' >Pawan Sharma</label>
        </div>
        <div>
            <p className='text-justify p-8'>Driven by my love for technology, I pursued a B.Tech degree in Information Technology from Netaji Subhas University of Technology (NSUT), Delhi. During my academic journey, I gained hands-on experience through an internship as a software developer at CRIS (Centre for Railway Information Systems), where I worked on real-world projects that fueled my interest in software development.</p>
        </div>

        </div>
    </div>
  )
}

export default About