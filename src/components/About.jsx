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
                
                <p className='text-[#001b5e]'>
                    I am passionate about leveraging technology to drive innovation and efficiency. I am a Full Stack Developer with experience in building web applications using JavaScript, React, Node.js, and MongoDB.
                    I have always had an interest in technology and how it can be used to solve real-world problems. Constantly learning and improving my skills to stay up-to-date with the latest technologies and trends in the industry.
                    A quick learner and a team player with excellent communication skills. I am currently seeking opportunities to work on exciting projects and collaborate with talented individuals.
                </p>
            </div>
  </div>
    </div>
  )
}

export default About