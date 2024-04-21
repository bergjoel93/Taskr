import renderTask from "./renderTask";
import { taskManager } from "../app";
import { taskHandlers } from "../handlers/handleTask";
/**
 * Renders tasks dynamically under specific sections based on their completion status and due date.
 * @param {string} filter - The filter to apply when rendering tasks ("today" or "all").
 */
function renderTasks(filter = 'all', project = null) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);  // Normalize today's date to start at midnight makes it easier to compare later. 
    taskManager.sortTasksByDate();

    // create all tasks element. 
    const tasks = document.createElement('div');
    tasks.classList.add('tasks')

    // create all completed tasks element.
    const completedTasks = document.createElement('div');
    completedTasks.classList.add('completed-tasks')

    
    if(project === null){
        // sort tasks by Date. 
        taskManager.sortTasksByDate();
        // Get tasks array from task manager.
        const allTasks = taskManager.getTasks(); 

        // select main element and clear it. 
        const main = document.querySelector('main'); 
        main.innerHTML = '';

        // Create tasks container
        const tasksContainer = document.createElement('div'); 
        tasksContainer.classList.add('tasks-container'); 

        // Create the completed Section
        const completedSection = document.createElement('div');
        completedSection.innerHTML = `
            <h1> Completed </h1>
            <div class ="main-line"></div>
        `;
        // append tasks to uncompleted and completed. 
        appendTasks(allTasks, filter);
        
        // check if tasks element is empty. If it is, then we print a message saying no tasks are avaialable. 
        if(tasks.innerHTML !== ''){
            // check filter. If today, print today heading, else print all tasks heading. 
            console.log(tasks);
            console.log(filter);
            if(filter === 'today'){
                tasksContainer.innerHTML=`
                <h1>Today</h1>
                <div class="main-line"></div>`;
            }
            else{
                tasksContainer.innerHTML=`
                <h1>All Tasks</h1>
                <div class="main-line"></div>`;
            }
            
            tasksContainer.appendChild(tasks);
            // check if there are completed Tasks. If so, append those. 
            if(completedTasks.innerHTML !==''){
                tasksContainer.appendChild(completedSection);
                tasksContainer.appendChild(completedTasks);
                main.appendChild(tasksContainer);
            }
            //If there are no completed sections, print tasks container without completed header. 
            else{
                main.appendChild(tasksContainer);
            }
            
        }
        else{
            main.innerHTML = `
            <div class = "no-tasks">
                <h1>There are currently no tasks.<span class="material-symbols-outlined" style="font-size:2rem;">
                sentiment_very_satisfied
                </span></h1>
            </div>
            `;
        }
    }
    else if(project){
        // get tasks element from project
        const allTasks = project.tasks;
        // append individual tasks to tasks element, and completedTasks element. 
        appendTasks(allTasks, 'all');

        // print tasks and completed tasks. 
        // get task-container
        const taskContainer = document.querySelector('.task-container');

        taskContainer.append(tasks);
    }

    taskHandlers(filter, project);

    /**
     * appends each task element to tasks, which is an element containing all rendered tasks. 
     * @param {Array} allTasks 
     * @param {string} filter 
     */
    function appendTasks(allTasks, filter) {
        allTasks.forEach(task => {
            // render each task element
            const taskElement = renderTask(task);
            // extract taskDueDate for filtering
            const taskDueDate = new Date(task.dueDate);
            taskDueDate.setHours(0, 0, 0, 0);

            // Filter tasks based on the 'filter' parameter
            if (filter === 'today' && taskDueDate.getTime() !== today.getTime()) {
                //console.log('Task not rendered today:', task);
                return; // Skip tasks not due today if the filter is "today"
            }

            if (task.complete) {
                completedTasks.appendChild(taskElement); // Append to completed section if task is complete
            } else {
                tasks.appendChild(taskElement);
            }
        });
    }
}

export default renderTasks;


