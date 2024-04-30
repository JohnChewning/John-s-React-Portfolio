import React from "react";
import ProjectItem from "./ProjectItem";
import emojiTranslatorImg from "../assets/emoji translator.png";
import weatherDashboardImg from "../assets/weather dashboard.png";
import workdaySchedulerImg from "../assets/work day scheduler.png";
import textEditorImg from "../assets/text editor.png";

const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16 text-center">
      <h1 className="text-4xl font-bold text-[#00000]">Projects</h1>
      <p className="text-xl font-semibold py-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
        commodi qui odio hic inventore, corrupti labore enim maiores tempore non
        modi eaque cupiditate eligendi facilis, quae reiciendis illo, nobis in.
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <a href="https://github.com/JohnChewning/Weather-Dashboard" target="_blank" rel="noopener noreferrer">
        <ProjectItem img={weatherDashboardImg} title='Weather Dashboard' />
        </a>
        <a href="https://github.com/JohnChewning/Work-Day-Scheduler" target="_blank" rel="noopener noreferrer">
        <ProjectItem img={workdaySchedulerImg} title='Workday Scheduler' />
        </a>
        <a href="https://github.com/JohnChewning/Emoji-Translator" target="_blank" rel="noopener noreferrer">
        <ProjectItem img={emojiTranslatorImg} title='Emoji Translator' />
        </a>
        <a href="https://github.com/JohnChewning/Text-Editor-App" target="_blank" rel="noopener noreferrer">
        <ProjectItem img={textEditorImg} title='Text Editor' />
        </a>
        
      </div>
    </div>
  );
};

export default Projects;
