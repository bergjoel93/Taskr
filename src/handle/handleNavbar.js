import RenderTasks from "../render/renderTasks";
import projectManager from "../manage/ProjectManager";
import { renderNewAddTaskForm } from "../render/renderAddTaskForm";
import RenderPage from "../render/renderPage";
/**
 * Sets up all event handlers within the navbar. 
 */

class HandleNavbar {
    constructor() {
        this.currentlyActive = 'allTasksBtn'; // default active element
        this.setupEventListeners(); // sets up event listeners once instantiated. 
    }

    setupEventListeners() {
        const addTaskBtn = document.querySelector('.addTaskBtn');
        addTaskBtn.addEventListener('click', ()=>{
            this.addActive('.addTaskBtn');
            console.log('Add Task Button Clicked');
            renderNewAddTaskForm();

            // TODO 
        });

        const allTasksBtn = document.querySelector('.allTasksBtn');
        allTasksBtn.addEventListener('click', ()=>{
            this.addActive('.allTasksBtn');
            const pageRenderer = new RenderPage(1);
            pageRenderer.renderPage('all');
            console.log('All Tasks Button Clicked');
        });

        const todayBtn = document.querySelector('.todayBtn');
        todayBtn.addEventListener('click', ()=>{
            this.addActive('.todayBtn');
            const pageRenderer = new RenderPage(1);
            pageRenderer.renderPage('today');

        });

        const addProjectBtn = document.querySelector('.addProjectBtn');
        addProjectBtn.addEventListener('click', ()=>{
            this.addActive('.addProjectBtn');

        });

        // check if there are projects and add event listeners to those. 
    }

    addActive(className) {
        this.removeActive();
        document.querySelector(className).classList.add("active");
    }

    removeActive(){
        let activeClasses = document.querySelectorAll('.active');
        activeClasses.forEach(deactive => {
            deactive.classList.remove('active');
        })
    }

}

export default HandleNavbar