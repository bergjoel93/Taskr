/**
 * Task class to create and manage individual tasks.
 * 
 * Properties:
 *  - title (String): The title of the task.
 *  - description (String): A detailed description of the task.
 *  - dueDate (Date): The due date for the task.
 *  - priority (String): The priority level of the task.
 *  - complete (Boolean): The completion status of the task.
 * 
 * Methods:
 *  - getFormattedDueDate(): Returns a string representing the formatted due date.
 *  - isOverdue(): Checks if the task is overdue based on the current date.
 * 
 * Usage:
 *  const task = new Task('Buy milk', 'Buy 2 liters of milk', '2023-04-15', 'High', false);
 *  console.log(task.getFormattedDueDate());
 *  console.log(task.isOverdue());
 */
class Task {
    /**
     * Constructs a new Task instance.
     * @param {int}    id - generated in TaskManager and is unique to each task. 
     * @param {string} title - The title of the task.
     * @param {string} description - A detailed description of the task.
     * @param {string} dueDate - The due date for the task in YYYY-MM-DD format.
     * @param {string} priority - The priority level of the task (e.g., 'High', 'Medium', 'Low').
     * @param {boolean} complete - The completion status of the task.
     */
    constructor(id, title, description, dueDate, priority, complete ){
        this.id = id;
        this.title = title;
        this.description = description;
        this.dueDate = new Date(dueDate);
        this.priority = priority;
        this.complete = complete;
    }
}

export default Task;