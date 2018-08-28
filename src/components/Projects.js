import projects from '../data/projects.json';
import React from 'react';
import Project from './Project'


class Projects extends React.Component{
  render(){
    return (
      <div>
        {projects.allProjects.map(function(param){
          return <Project title={param.title} imgName = {param.imgName} description = {param.description} />
          })
        }
     </div>
    )
  }
}

export default Projects;
