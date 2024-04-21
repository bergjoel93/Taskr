import Task from "./Task";
/**
 * Responsible for creating a Project object which contains a collection of tasks. 
 * @param {Integer} id : generated when Project is pushed to Project Manager
 * @param {String} title 
 * @param {String} description 
 */
class Project {

  constructor(id, title, description) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.tasks = []; // Collection of Task objects
  }

  addTask(taskData) {
    const task = Task.fromJSON({...taskData, id: this.#generateTaskId()});
    this.tasks.push(task);
  }

  removeTask(taskId) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  updateTask(taskId, updatedTaskData) {
    let task = this.tasks.find(task => task.id === taskId);
    if (task) {
      // Assuming updatedTaskData might not include 'id' but includes other fields to update
      Object.assign(task, updatedTaskData);
    }
  }

  #generateTaskId() {
    return this.tasks.length > 0 ? Math.max(...this.tasks.map(task => task.id)) + 1 : 1;
  }

  toJSON() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      tasks: this.tasks.map(task => task.toJSON()),
    };
  }

  static fromJSON(data) {
    const project = new Project(Number(data.id), data.title, data.description);
    project.tasks = data.tasks.map(Task.fromJSON);
    return project;
  }
}

export default Project;
