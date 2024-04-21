import { formatDueDate } from "../dateUtils";
/**
 * Responsible for rendering a single task element. 
 */

function renderTask(task){
    const id = task.id;
    const title = task.title;
    const description = task.description;
    const dueDate = formatDueDate(new Date(task.dueDate));
    const priority = task.priority;
    const complete = task.complete;

    const taskElement = document.createElement('div');
    taskElement.classList.add('task');
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
        <div class="edit-pane">
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

export default renderTask;