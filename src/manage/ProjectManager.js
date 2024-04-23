import Project from "../objects/Project";

class ProjectManager {
  constructor() {
    this.projects = [];
    this.#loadProjects();
    this.initializeDefaultProject();
  }

  initializeDefaultProject() {
    //check if there is no default project. 
    if(this.projects.length === 0){
      this.createProject('Default', 'This is the default project.');
    }
  }
  
  // Public method to get the projects array safely
  getProjects() {
    return this.projects;
  }

  createProject() {
    const project = new Project(this.#generateProjectId(), "New Project", "");
    this.projects.push(project);
    this.#saveProjects();
    return project;
  }

  getProjectById(id) {
    return this.projects.find(project => project.id === id) || null;
  }

  /**
   * Retrieves a specific task from a specific project using the project ID and task ID.
   * @param {number} projectId - The ID of the project to search within.
   * @param {number} taskId - The ID of the task to retrieve.
   * @returns {Task|null} The task if found, or null if not found.
   */
  getTaskFromProject(projectId, taskId) {
    const project = this.getProjectById(projectId);
    if (project) {
      const task = project.tasks.find(task => task.id === taskId);
      if (task) {
        return task;
      } else {
        console.log(`Task with ID ${taskId} not found in project with ID ${projectId}`);
        return null;
      }
    } else {
      console.log(`Project with ID ${projectId} not found.`);
      return null;
    }
  }
  // returns either a task array from the project or an empty task array if no tasks were yet assigned to this project. 
  getTasksFromProject(projectId) {
    // Find the project by ID
    const project = this.projects.find(p => p.id === projectId);
    // Return the tasks array if the project is found, otherwise return an empty array
    return project ? project.tasks : [];
  }

  updateProjectTitle(projectId, newTitle) {
    const project = this.getProjectById(projectId);
    if (project) {
      project.title = newTitle;
      this.#saveProjects();
      //console.log('Project '+project.title+ "updated");
    }
  }

  updateProjectDescription(projectId, newDescription) {
    const project = this.getProjectById(projectId);
    if (project) {
      project.description = newDescription;
      this.#saveProjects();
    }
  }

  updateProjectTask(projectId, taskId, updatedTask) {
    const project = this.getProjectById(projectId);
    if (project) {
      project.updateTask(taskId, updatedTask);
      this.#sortTasksByDate(projectId);  // Ensure tasks are sorted after updating
      this.#saveProjects();
    }
  }

  /**
 * Updates the completion status of a specific task within a project.
 * @param {number} projectId - The ID of the project containing the task.
 * @param {number} taskId - The ID of the task to update.
 * @param {boolean} complete - The new completion status of the task.
 */
updateTaskComplete(projectId, taskId, complete) {
  const project = this.getProjectById(projectId);
  if (project) {
      const task = project.tasks.find(t => t.id === taskId);
      if (task) {
          task.complete = complete;  // Update the complete status
          this.#saveProjects();  // Persist the change
      } else {
          console.error(`Task with ID ${taskId} not found in project with ID ${projectId}`);
      }
  } else {
      console.error(`Project with ID ${projectId} not found.`);
  }
}


  addTaskToProject(projectId, task) {
    const project = this.getProjectById(projectId);
    if (project) {
      project.addTask(task);
      this.#sortTasksByDate(projectId);  // Sort tasks immediately after adding a new one
      this.#saveProjects();
    }
  }

  deleteTaskFromProject(projectId, taskId) {
    const project = this.getProjectById(projectId);
    if (project) {
      project.removeTask(taskId);
      this.#sortTasksByDate(projectId);  // Sort tasks immediately after removing one
      this.#saveProjects();
    }
    console.log("TaskId: "+taskId+" removedd from projectId: "+project.id);
  }

  deleteProject(id) {
    this.projects = this.projects.filter(project => project.id !== id);
    this.#saveProjects();
  }


  // Private method to sort tasks by date within a project
  #sortTasksByDate(projectId) {
    const project = this.getProjectById(projectId);
    if (project) {
      project.tasks.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    }
  }

  // Private Methods for Persistence
  #saveProjects() {
    localStorage.setItem('projects', JSON.stringify(this.projects.map(project => project.toJSON())));
  }

  #loadProjects() {
    const projectsData = JSON.parse(localStorage.getItem('projects') || '[]');
    this.projects = projectsData.map(Project.fromJSON);
  }

  #generateProjectId() {
    return this.projects.reduce((maxId, project) => Math.max(maxId, project.id), 0) + 1;
  }
}
const projectManager = new ProjectManager(); 

export default projectManager;
