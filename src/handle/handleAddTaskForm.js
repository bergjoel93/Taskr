import { closeTaskForm } from "../render/renderAddTaskForm";
import projectManager from "../manage/ProjectManager";
import RenderPage from "../render/renderPage";
import { parseISO } from "date-fns";
/**
 * Responsible for handling user input from a new task form. Accepts a projectId and taskId. If no paramaters are input, then the new task will be added to default task list in default Project 0. 
 * @param {Integer} projectId - id of project
 * @param {Integer} taskId - id of task 
 */


function handleAddTaskForm(projectId = 1, taskId = null, filter = 'all') {
    const form = document.querySelector('#newTaskForm');
    const submitBtn = form.querySelector('#submit');
    const cancelButton = form.querySelector('#cancel');


    cancelButton.addEventListener('click', () => {
        closeTaskForm();
    });
    
    submitBtn.addEventListener('click', (event) => {
        event.preventDefault();
        console.log("submit has been pressed");
        // get new task info
        const dateString = document.querySelector("#date").value; // '2024-04-12T08:00'
        const date = new Date(dateString);


        const newTask = {
            title: form.querySelector('#title').value,
            description: form.querySelector('#description').value,
            date: date,
            priority: form.querySelector("#priority").value,
            complete: false
        }

        if(taskId){ //updating an old task if there's a taskId. 
            projectManager.updateProjectTask(projectId, taskId, newTask);
        }
        else { // creating and adding a new task. 
            //Add task to project 
            projectManager.addTaskToProject(projectId, newTask);
        }

        // close the form
        closeTaskForm();
        // re-render everything 
        const pageRenderer = new RenderPage(projectId, filter);
    });
}



export default handleAddTaskForm;
