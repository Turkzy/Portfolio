import React from 'react';
import './MyWork.css';
import project1 from "../Image/project1.png"
import project2 from "../Image/project2.png"

const MyWork = () => {
  return (
    <div id="mywork" className='Mywork'>
      <div className='work-title'>
        <h1><span className='title-Me'>My</span> Projects</h1>  
      </div>
      
      <div className='projects-container'>
        <a href="https://marvelous-ganache-d0e5a2.netlify.app/" className="project-item">
          <img src={project1} alt="Project 1" className="project-image" />
        </a>
        <a href="https://gorgeous-daffodil-65ca8b.netlify.app/" className="project-item">
          <img src={project2} alt="Project 2" className="project-image" />
        </a>
      </div>
    </div>
  );
}

export default MyWork;
