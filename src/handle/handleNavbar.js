import RenderTasks from "../render/renderTasks";
import projectManager from "../manage/ProjectManager";
import { renderNewAddTaskForm } from "../render/renderAddTaskForm";
import RenderPage from "../render/renderPage";
import RenderNavbar from "../render/renderNavbar";
/**
 * Sets up all event handlers within the navbar. 
 */

class HandleNavbar {
    constructor() {
        this.currentlyActive = 'allTasksBtn'; // default active element
        this.setupEventListeners(); // sets up event listeners once instantiated. 
    }

    setupEventListeners() {
        // Add Task Button
        const addTaskBtn = document.querySelector('.addTaskBtn');
        addTaskBtn.addEventListener('click', ()=>{
            this.addActive('.addTaskBtn');
            console.log('Add Task Button Clicked');
            renderNewAddTaskForm();

            // TODO 
        });

        // All Tasks Button
        const allTasksBtn = document.querySelector('.allTasksBtn');
        allTasksBtn.addEventListener('click', ()=>{
            this.addActive('.allTasksBtn');
            const pageRenderer = new RenderPage(1);
            pageRenderer.renderPage('all');
            console.log('All Tasks Button Clicked');
        });

        // Today Button
        const todayBtn = document.querySelector('.todayBtn');
        todayBtn.addEventListener('click', ()=>{
            this.addActive('.todayBtn');
            const pageRenderer = new RenderPage(1);
            pageRenderer.renderPage('today');

        });

        // Add Project Btn
        const addProjectBtn = document.querySelector('.addProjectBtn');
        addProjectBtn.addEventListener('click', ()=>{
            this.addActive('.addProjectBtn');
            console.log("Add Project button Clicked.");
            // If this button is clicked, first we create a new project and add it to the project manager. Then we render a new project page with the default stuff filled out. Then we add our handler stuff. 

            // create a new project 
            const newProject = projectManager.createProject();
            const newProjectId = newProject.id;
            console.log("New project created with ID: "+ newProjectId);

            // render the page with project ID
            const renderProjectPage = new RenderPage(newProjectId);
            // render the navbar
            const renderNavbar = new RenderNavbar();
            renderNavbar.render();
        });

        // check if there are projects and add event listeners to those. 
        const projects = projectManager.getProjects();
        if(projects){
            const projectBtns = document.querySelectorAll('.projectBtn');
            projectBtns.forEach(projectBtn =>{
                const projectId = Number(projectBtn.getAttribute('data-id'));
                projectBtn.addEventListener('click', ()=>{
                    console.log("ProjectId: "+projectId+'clicked');
                    const renderPage = new RenderPage(projectId);
                    //render navbar
                });
                
            });
        }
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