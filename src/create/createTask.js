import { format } from "date-fns";
/**
 * responsible for creating the single .task element div. 
 */

function createTask(task){
    const id = task.id;
    const title = task.title;
    const description = task.description;
    const dueDate = format(new Date(task.date), 'PPPp'); // Example: "April 12, 2024, 8:30 PM"
    const priority = task.priority;
    const complete = task.complete;

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
    taskElement.setAttribute('data-id',`${id}`);
    taskElement.innerHTML = `
        <div class="task-pane">
            <div class="title-box">
                <input type="checkbox" class="completed" data-id="${id}" ${complete ? 'checked' : ''} >
                <label for="${id}">${title} <span class="priority ${priority}">${priority}</span></label>
            </div>
            <div class="description-box">${description}</div>
            <div class="date"><span class="material-symbols-outlined">
            calendar_month
            </span>${dueDate}</div>
        </div>
        <div class="edit-pane" id="edit-pane-${id}">
                <button class="edit" data-id="${id}"><span class="material-symbols-outlined">
                    edit_note
                    </span></button>
                <button class="delete" data-id="${id}"><span class="material-symbols-outlined">
                    delete
                    </span></button>
        </div>    
            `;
        const mainLine = document.createElement('div');
        mainLine.classList.add('main-line');
        taskElement.appendChild(mainLine);
        return taskElement;
}

export default createTask;