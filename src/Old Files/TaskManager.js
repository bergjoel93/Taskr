import Task from "./task";
/**
 * TaskManager class to create, manage, and store a collection of tasks.
 * This class provides methods to add, delete, edit, and retrieve tasks,
 * leveraging the local storage for persistence across sessions.
 *
 */

class TaskManager {
    constructor() {
        this.tasks = this.loadTasks(); // loads tasks array from local storage. 
        this.nextId = 0;
        this.initializeNextId();
    }
    /**
    * Retrieves all tasks managed by the TaskManager.
    * 
    * @returns {Array} An array of all Task objects.
    */
   getTasks() {
       return this.tasks;
   }
    /**
     * Retrieves a task by its unique ID.
     * 
     * @param {number} taskId - The unique identifier of the task to retrieve.
     * @returns {Task|null} The task with the specified ID, or null if no such task exists.
     */
    getTaskById(taskId) {
        const task = this.tasks.find(task => task.id === taskId);
        return task || null;  // Return the task if found, otherwise return null
    }
    /**
     * Initializes the 'nextId' property by finding the highest task ID currently in the tasks array and setting nextId to one more than the highest ID. 
     */
    initializeNextId() {
        // Iterate over each task in the current task list. 
        this.tasks.forEach(task => {
            if (task.id >= this.nextId) {
                this.nextId = task.id + 1;
            }
        });
    }
    /**
     * Adds a new Task to the task collection and updates local storage.
     * 
     * @param {Task} task - The Task object to be added.
     */
    addTask(task) {
        task.id = this.nextId++;
        this.tasks.push(task);
        this.saveTasks();
    }
    /**
     * Removes a Task from the collection by its index.
     * 
     * @param {number} taskIndex - The index of the Task to be removed.
     */

    deleteTask(taskId) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }
    /**
     * Updates the properties of a Task at the specified index.
     * 
     * @param {number} taskIndex - The index of the Task to be updated.
     * @param {Object} updatedDetails - An object containing the updated task properties.
     */
    editTask(taskId, updatedDetails) {
        let index = this.tasks.findIndex(task => task.id === taskId);
        if (index !== -1) {
            // Ensure dueDate is converted to Date object if it's coming as a string
            if (updatedDetails.dueDate && !(updatedDetails.dueDate instanceof Date)) {
                updatedDetails.dueDate = new Date(updatedDetails.dueDate);
            }
            this.tasks[index] = {...this.tasks[index], ...updatedDetails};
            this.saveTasks();
        }
        else {
            console.error("Task not found with ID: "+taskId);
        }
    }
    
    /**
     * Loads and deserializes the tasks array from local storage.
     * Ensures that each task is an instance of Task.
     * 
     * @returns {Array} An array of Task objects.
     */
    loadTasks() {
        const tasksData = localStorage.getItem('tasks');
        if (tasksData) {
            const tasks = JSON.parse(tasksData);
            return tasks.map(taskData => new Task(taskData.id, taskData.title, taskData.description, new Date(taskData.dueDate), taskData.priority, taskData.complete));
        }
        return [];
    }
    /**
     * Serializes and saves the tasks array to local storage.
     */
    saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    /**
     * Sorts tasks by due date in ascending order.
     */
    sortTasksByDate() {
        this.tasks.sort((a, b) => {
            const dateA = new Date(a.dueDate);
            const dateB = new Date(b.dueDate);
            return dateA - dateB;
        });
    // // Optionally, you might want to save the sorted tasks if needed
    // this.saveTasks();
    }

   
}

export default TaskManager;
