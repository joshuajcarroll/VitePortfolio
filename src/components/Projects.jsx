import React from 'react';
import ProjectItem from './ProjectItem';
import gamingImg from "../assets/gaming-app.png";
import medicalImg from "../assets/MediTrack.png";
import foodiesImg from "../assets/Foodies.png";
import newsImg from "../assets/NextJSNews.png";

function Projects() {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
        <h1 className="text-4xl font-bold text-center text-[#001b5e]">Projects</h1>
        <p className="text-center font-semibold py-8">Here are a few examples of my work:
        </p>
        <div className="grid sm:grid-cols-2 gap-12">
            <ProjectItem url="https://health-app-65191.web.app" image={medicalImg} title="MediTrack App"/>
            <ProjectItem url="https://my-gaming-app.vercel.app" image={gamingImg} title="Gaming App"/>
            {/*<ProjectItem url="https://next-js-foodies-project.vercel.app" image={foodiesImg} title="Foodies App"/>
            <ProjectItem image={newsImg} title="News App"/>*/}
        </div>
    </div>
  )
}

export default Projects