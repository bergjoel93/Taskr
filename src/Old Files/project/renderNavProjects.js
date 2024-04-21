import { projectManager } from "../app";
import handleNavProject from "./handleNavProject";

/**
 * Responsible for rendering the names of the projects under the Add Project Button
 */

function renderNavProjects() {
    const projectContainer = document.querySelector('.nav-project-container');

    projectContainer.innerHTML ='';

    const projects = projectManager.getProjects();
    
    const titles = projects.map(project => project.title); // extracts an array of project titles. 

    projects.forEach(project =>{
        const titleButton = document.createElement('button');
        titleButton.textContent = `# ${project.title}`;
        titleButton.setAttribute('data-id', `${project.id}`);
        titleButton.setAttribute('id', 'titleButton');
        titleButton.classList.add(`project-${project.id}`)
        projectContainer.appendChild(titleButton);
    });

    // setup event handlers in nav bar
    handleNavProject();

}

export default renderNavProjects;