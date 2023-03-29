import React from 'react';
import ProjectItem from './ProjectItem';
import propertyImg from "../assets/property.jpg";
import cryptoImg from "../assets/crypto.png";
import netflixImg from "../assets/netflix.jpg";
import twitchImg from "../assets/twitch.jpg";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center font-semibold py-8">Here are a few examples of my work:
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem image={cryptoImg} title="Crypto App"/>
            <ProjectItem image={propertyImg} title="Property App"/>
            <ProjectItem image={netflixImg} title="Netflix App"/>
            <ProjectItem image={twitchImg} title="Twitch App"/>
        </div>
    </div>
  )
}

export default Projects