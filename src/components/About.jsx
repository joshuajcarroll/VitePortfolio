import React from 'react'
import aboutPic from "../assets/Profile1pic.jpg";

function About() {
  return (
    <div id="about" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">About Me</h1>
        <div className='flex flex-col justify-center items-center md:flex'>
            <div className="justify-center items-center"> 
                <img className='w-[150px] md:w-[200px] lg:w-[250px] rounded-lg my-8' src={aboutPic} alt="Profile pic" />
            </div>
            <div className="flex flex-col justify-center items-center">
                
                <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Soluta, veniam!
                </p>
            </div>
  </div>
    </div>
  )
}

export default About