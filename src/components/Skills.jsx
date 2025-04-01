import React from 'react';
import "./WorkItem";
import WorkItem from './WorkItem';
import HTML from "../assets/html5.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import Mongo from "../assets/mongo.png";
import Postgres from "../assets/postgresql.png";
import Github from "../assets/github.png";



function Skills() {
    /*const data = [
        {
            year: 2020,
            title: 'Content Creator',
            duration: '3 years',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },

        {
            year: 2017,
            title: 'Google',
            duration: '3 years',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },

        {
            year: 2015,
            title: 'Amazon',
            duration: '2 years',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        },

        {
            year: 2012,
            title: 'Facebook',
            duration: '3 years',
            details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
        }
    ]*/
  return (
    <div id="skills" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        {/*<h1 className="text-4xl font-bold text-center text-[#001b5e]">Work</h1>
        {data.map((item,index) => (
            <WorkItem key={index} year={item.year} title={item.title} duration={item.duration} details={item.details} />
        ))}*/}
        <h1 className="text-4xl font-bold text-center text-[#001b5e] mb-8">Skills</h1>
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-4'>
                <div className='shadow-md shadow-[#040c16] align-center hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon"/>
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon"/>
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactImg} alt="React icon"/>
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 bg-black mx-auto' src={Github} alt="Github icon"/>
                    <p className='my-4'>GITHUB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="Node icon"/>
                    <p className='my-4'>NODE JS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongo} alt="MongoDB icon"/>
                    <p className='my-4'>MONGO DB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Postgres} alt="Postgres icon"/>
                    <p className='my-4'>POSTGRESQL</p>
                </div>
            </div>
        {/*<div className="grid grid-cols-2 gap-12 md:grid-cols-3">
            <div className='justify-center align-center'>
                <img className='w-40' src={htmlImg} alt="CSS Logo" />
            </div>
            <div className='justify-center text-center'>
                <img className='w-28' src={nodeImg} alt="Node JS Logo" />
            </div>
            <div className='justify-center align-center'>
                <img className='w-40' src={javascriptImg} alt="Javascript Logo" />
            </div>
            <div className='justify-center align-center'>
                <img className='w-48 bg-none' src={mongoImg} alt="MongoDB Logo" />
            </div>
            <div className='justify-center align-center'>
                <img className='w-40 bg-transparent' src={postgresImg} alt="PostgreSQL Logo" />
            </div>
            <div className='justify-center align-center'>
                <img className='w-40 bg-transparent' src={reactImg} alt="React Logo" />
            </div>
        </div>*/}
    </div>
  )
}

export default Skills