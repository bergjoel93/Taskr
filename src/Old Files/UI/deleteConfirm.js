import { projectManager } from "../app";
import renderNavProjects from "../project/renderNavProjects";
import renderTasks from "./renderTasks";
/**
 * Responsible for generating a nifty little dialog box that appears whenever you try to delete something. 
 */


const body = document.querySelector('body');
function deleteConfirm(elementId) {
    const element = document.getElementById(elementId);
    // Element position on page
    const rect = element.getBoundingClientRect();
    const top = rect.top + window.pageYOffset;
    const left = rect.left + window.pageXOffset;
    
    // make the dialog box element and append to body.
    body.appendChild(createDeleteConfirm(top, left));

    // get project ID to delete
    const projectId = Number(element.getAttribute('data-id'));

    handleDeleteConfirm(projectId);
}


function createDeleteConfirm(top, left){
    const deleteConfirm = document.createElement('dialog');
    deleteConfirm.setAttribute('id', 'deleteConfirm');
    deleteConfirm.innerHTML = `
        <dialog id="deleteConfirm" open>
            <div class="deleteMessage">Delete?</div>
            <div class="deleteConfirmButtons">
                <button id="deleteYes">Yes</button>
                <button id="deleteNo">No</button>
            </div>
        </dialog>
    `;
   // Set the style properties
   deleteConfirm.style.position = 'absolute';
   deleteConfirm.style.top = `${top}px`;
   deleteConfirm.style.left = `${left}px`;

    return deleteConfirm;
}

function handleDeleteConfirm(projectId) {
    const yes = document.getElementById('deleteYes');
    const no = document.getElementById('deleteNo');

    yes.addEventListener('click', ()=>{
        // delete project
        projectManager.deleteProject(projectId);
        //close dialog box
        closeDialog();
        renderTasks();
        renderNavProjects();
    })

    no.addEventListener('click', ()=>{
        closeDialog();
    })
}

function closeDialog(){
    body.removeChild(document.getElementById('deleteConfirm'));
}

export default deleteConfirm;

