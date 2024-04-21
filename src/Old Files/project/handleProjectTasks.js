import { openOverlay } from "../UI/renderOverlay";
/** 
 * Responsible for setting up even handlers for the task stuff on a project page. 
 * Used for Add Task button, and edit/delete Tasks. 
 */

import { projectManager } from "../app";

function handleProjectTasks(){
    const addTaskButton = document.querySelector(".add-project-task");
    addTaskButton.addEventListener('click', ()=>{
        const projectId = Number(addTaskButton.getAttribute('data-id'));
        const project = projectManager.getProjectById(projectId);
        console.log(project);
        openOverlay(null, project);
    });
}

export default handleProjectTasks;