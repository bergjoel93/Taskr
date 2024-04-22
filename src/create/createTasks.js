import createTask from "./createTask";
/**
 * responsible for creating the html for the .tasks div which prints the collection of tasks. 
 * @param {tasks[]} tasks - array of tasks
 */

function createTasks(tasks){
    const tasksElement = document.createElement('div');
    tasksElement.classList.add('tasks');
    if(!tasks){
        // if no tasks exist, return empty task element. 
        return tasksElement;
    }
    else{
        tasks.forEach(task =>{
            const taskElement = createTask(task);
        tasksElement.appendChild(taskElement);
        })
        return tasksElement;
    }
    
}


export default createTasks;