/**
 * responsible for rendering the tasks (collection) element to something. 
 */

class RenderTasks {
    constructor(project) {
        this.project = project;
        this.tasks = project.tasks;
        this.main = document.querySelector('main');
    }

    renderAllTasks() {
        if(this.project.id === 1){
            this.main.innerHTML=''; //clear main. 
            this.main.appendChild(createTasks(this.tasks));
        }
    }

}

export default RenderTasks;