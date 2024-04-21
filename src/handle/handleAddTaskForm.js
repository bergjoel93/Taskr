import { closeTaskForm } from "../render/renderAddTaskForm";
import projectManager from "../manage/ProjectManager";
import RenderPage from "../render/renderPage";
/**
 * Responsible for handling user input from a new task form. Accepts a projectId and taskId. If no paramaters are input, then the new task will be added to default task list in default Project 0. 
 * @param {Integer} projectId - id of project
 * @param {Integer} taskId - id of task 
 */


function handleAddTaskForm(projectId = 1, taskId = null) {
    const form = document.querySelector('#newTaskForm');
    const submitBtn = form.querySelector('#submit');
    const cancelButton = form.querySelector('#cancel');


    cancelButton.addEventListener('click', () => {
        closeTaskForm();
    });
    
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("submit has been pressed");
        // Check if there's a taskId. If there is, then we're editing an existing task and not creating a new one. 
        if(taskId){
            // TODO add the logic to update a task once the form has been submitted. 
        }
        else { // creating a new task. 
            // Create new task
            const newTask = {
                title: form.querySelector('#title').value,
                description: form.querySelector('#description').value,
                date: new Date(form.querySelector("#date").value),
                priority: form.querySelector("#priority").value,
                complete: false
            }
            
            //Add task to project 
            projectManager.addTaskToProject(projectId, newTask);
            // close the form
            closeTaskForm();
            // re-render everything 
            const pageRenderer = new RenderPage(projectId);
            pageRenderer.renderAllTasks('all');
            
        }

    });
}



export default handleAddTaskForm;
