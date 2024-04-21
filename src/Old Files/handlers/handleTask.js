import renderTasks from "../UI/renderTasks";
import { taskManager } from "../app";
import { openOverlay } from "../UI/renderOverlay";
/**
 * Responsible for handling the UI for an individual task that includes the checkbox to mark complete, the edit and delete button. This method is called within renderTasks. 
 */
let currentFilter = 'all'
function taskHandlers(filter, project = null) {
    currentFilter = filter;
    document.querySelectorAll('.completed').forEach(checkbox => {
        checkbox.removeEventListener('change', handleComplete); // Prevent duplicate handlers
        checkbox.addEventListener('change', handleComplete);
    });

    document.querySelectorAll('button.edit').forEach(button => {
        button.removeEventListener('click', handleEdit); // Prevent duplicate handlers
        button.addEventListener('click', handleEdit);
    });

    document.querySelectorAll('button.delete').forEach(button => {
        button.removeEventListener('click', handleDelete); // Prevent duplicate handlers
        button.addEventListener('click', handleDelete);
    });
}

function handleComplete(event) {
    console.log("checkbox clicked");
    const checkbox = event.target;
    const id = Number(checkbox.getAttribute('data-id'));
    const task = taskManager.getTaskById(id); 
    // const updatedTask = { ...task, complete: checkbox.checked };
    taskManager.editTask(id, {complete: checkbox.checked});
    console.log(`Task ${id} completion toggled to ${checkbox.checked}`);
    // Optionally, refresh the tasks display based on the filter without recursively calling setup
    renderTasks(currentFilter);
}

function handleEdit(event) {
    let editButton = event.target;
    if (editButton.nodeName !== 'BUTTON') {
        // If the target is not the button (e.g., an icon inside the button), find the button
        editButton = editButton.closest('button.edit');
    }
    const id = Number(editButton.getAttribute('data-id'));
    console.log("Edit ID:", id);
    const task = taskManager.getTaskById(id);
    // Implement editing logic
    openOverlay(task);
    console.log(`Edit task ${id}`);
}

function handleDelete(event) {
    let deleteButton = event.target;
    if(deleteButton.nodeName !=='BUTTON'){
        deleteButton = deleteButton.closest('button.delete');
    }
    const id = Number(deleteButton.getAttribute('data-id'));
    taskManager.deleteTask(id);
    renderTasks(currentFilter); // Refresh the task display after deletion
}

export { taskHandlers};