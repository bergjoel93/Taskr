import TaskManager from './TaskManager.js'
import ProjectManager from './project/projectManager.js';


/**
 * This file serves as a central hub for initializing and managing core application logic. 
 */

// Initialize the TaskManager instance
const taskManager = new TaskManager();


// Initialize the ProjectManager instance
const projectManager = new ProjectManager();

// Perform any initial setup, such as rendering the initial list of projects


// The app could potentially have more setup logic here.
// For example, setting up event listeners, routing (if applicable), etc.

// Export the taskManager instance for use in other parts of the application
export { taskManager, projectManager };