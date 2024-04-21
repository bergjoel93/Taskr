import deleteConfirm from "../UI/deleteConfirm";
import { projectManager } from "../app";
import renderProjectPage from "./renderProjectPage";
/**
 * Responsible for handling what happens when the project is open and edited in real time just by clicking in the text fields and description. 
 */

function handleProjectEdit(project) {
    const projectId = project.id;

    const titleInput = document.querySelector('#projectTitle');
    const titleContainer = document.querySelector(".project-title-container"); // add the border effect when textinput is in focus. 
    
    // Title input
    titleInput.addEventListener('input', ()=> {
        projectManager.updateProjectTitle(projectId, titleInput.value);
    });
    // once user clicks out of focus from title input, then the page will re-render. 
    titleInput.addEventListener('blur', ()=> {
        renderProjectPage(project);
    });

    // Add an event listener for the 'focus' event
    titleInput.addEventListener('focus', function() {
        // Use setTimeout to ensure the browser has time to focus the element
        // adds border effect when text input is in focus. applies to container. 
        titleContainer.style.border="solid black 2px";
        titleContainer.style.borderRadius = '8px';
        
        setTimeout(() => {
            titleInput.select();  // This will highlight all the text in the input
        }, 0);
    });

    // Description Input
    const descriptionInput = document.querySelector('#projectDescription');
    descriptionInput.addEventListener('input', ()=>{
        projectManager.updateProjectDescription(projectId, descriptionInput.value);
    });

    // Delete project button 
    const deleteProjectButton = document.querySelector('#delete-project-button');
    deleteProjectButton.addEventListener('click', ()=>{
        deleteConfirm('delete-project-button');
    });


    // update UI
    descriptionInput.addEventListener('blur', ()=>{
        renderProjectPage(project);
    });


}






export {handleProjectEdit};