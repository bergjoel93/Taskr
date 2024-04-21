import createTask from "./createTask";
/**
 * responsible for creating the html for the .tasks div which prints the collection of tasks. 
 * @param {tasks[]} tasks - array of tasks
 */

function createTasks(tasks){
    const taskElement = document.createElement('div');
    taskElement.classList.add('tasks');
    tasks.forEach(task =>{
        taskElement.appendChild(createTask(task));
    })
    return taskElement;
}


export default createTasks;