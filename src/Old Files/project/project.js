class Project {
    constructor(id, title, description) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.tasks = []; // This will hold tasks associated with the project. 
        this.nextTaskId = 0; // Initialize a task ID counter for each project
    }
    // Add methods for adding/removing tasks, etc. 
}
export default Project;