/**
 * Responsible for creating the task form html. 
 */

function createTaskForm(task = null) {
    const overlay = document.createElement('div');
    overlay.classList.add('overlay');
    
    const taskForm = document.createElement('div');
    taskForm.classList.add('task-form-container');

        // Ensure the date string is correctly formatted for the date input field
        const taskDate = task ? new Date(task.date) : '';
        const formattedDate = taskDate ? taskDate.toISOString().substring(0, 10) : '';  // Adjusts the date string to 'YYYY-MM-DD'
    
    

    taskForm.innerHTML = `
        <form id="newTaskForm">
            <h2>${task ? 'Edit Task' : 'Add New Task'}</h2>
            <input type="text" name="title" id="title" placeholder="Title" required maxlength="40" value="${task ? task.title : ''}">
            <input type="text" name="description" id="description" placeholder="Description..." required maxlength="100" value="${task ? task.description : ''}">
            <input type="date" id="date" required value="${formattedDate}">
            <div class="priority-container">
                <label for="priority">Priority Level</label>
                <select id="priority" required>
                    <option value="Low" ${task && task.priority === 'Low' ? 'selected' : ''}>Low</option>
                    <option value="Regular" ${task && task.priority === 'Regular' ? 'selected' : ''}>Regular</option>
                    <option value="High" ${task && task.priority === 'High' ? 'selected' : ''}>High</option>
                </select>
            </div>
            <input type="submit" id="submit" name="submit" value="${task ? 'Update Task' : 'Add Task'}" style="cursor: pointer;">
            <button type="button" id="cancel">Cancel</button>
        </form>
    `;

    overlay.appendChild(taskForm);

    return overlay;
}

export default createTaskForm;