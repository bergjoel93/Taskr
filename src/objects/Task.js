/**
 * Responsible for defining the structure and functionality of a Task object. 
 * A Task object has:
 *  ID: Integer that is generated when it's pushed into a Project. 
 *  title: string
 *  description: String
 *  dueDate: javascript date
 *  priority: High, Regular, and Low
 *  complete: boolean of true of false. 
 */
class Task {
    constructor(id, title, description, date, priority, complete) {
      this.id = id;
      this.title = title;
      this.description = description;
      this.date = new Date(date);
      this.priority = priority;
      this.complete = complete;
    }
    /**
     * 
     * @returns Used to create a plain object representation of an instance of the Task class that can be stringified into JSON format. 
     */
    toJSON() {
      return {
        id: this.id,
        title: this.title,
        description: this.description,
        date: this.date.toISOString(),
        priority: this.priority,
        complete: this.complete,
      };
    }
    /**
     * Takes a plain object or string that has been parsed from JSON and creates a Task instance out of it. 
     * @param {jsonString} data 
     * @returns 
     */
    static fromJSON(data) {
      return new Task(
        Number(data.id),
        data.title,
        data.description,
        new Date(data.date),
        data.priority,
        data.complete
      );
    }
  }
  
  export default Task;
  