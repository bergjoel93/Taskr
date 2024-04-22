import createTaskForm from "../create/createAddTaskForm";
import handleAddTaskForm from "../handle/handleAddTaskForm";
/**
 * responsible for rendering the add task form for new tasks and editing old ones. 
 */
const body = document.querySelector('body');

function renderEditTaskForm(projectId, task) {
    body.appendChild(createTaskForm(task));
    const taskId = task.id;
    handleAddTaskForm(projectId, taskId);
}

function renderNewAddTaskForm(projectId){
    body.appendChild(createTaskForm());
    handleAddTaskForm(projectId);
}

function closeTaskForm(){
    const overlay = document.querySelector('.overlay');
    body.removeChild(overlay);

}

export {renderEditTaskForm, renderNewAddTaskForm, closeTaskForm}