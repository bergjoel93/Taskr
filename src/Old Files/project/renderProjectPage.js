import createProjectPage from "./createProjectPage";
import { handleProjectEdit } from "./handleProjectEdit";
import handleProjectTasks from "./handleProjectTasks";
import renderNavProjects from "./renderNavProjects";
import renderTasks from "../UI/renderTasks";
/**
 * Renders the web page to show the project that was clicked on or was created. 
 */

function renderProjectPage(project) {
    const main = document.querySelector('main');
    main.innerHTML = '';

    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    projectContainer.appendChild(createProjectPage(project));

    // add project container to main. 
    main.appendChild(projectContainer);

    handleProjectEdit(project); // sets up event listeners
    renderNavProjects(); // re-renders project nav. 
    handleProjectTasks();
    renderTasks('all', project);
}

export default renderProjectPage;