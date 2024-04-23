import createTasks from "../create/createTasks";
import projectManager from "../manage/ProjectManager";
import HandlePage from "../handle/handlePage";
import { isToday } from "date-fns";
/**
 * Responsible for rendering pages in website. User must call the correct function. 
 */

/**
 * 
 * @param {string} filter - default is 'all', or you can choose today if you're rendering the today page. 
 * @param {*} projectId - default is 0, or you can input what project you want to display. 
 */
class RenderPage {
    constructor(projectId = 1, filter = 'all'){
        this.projectId = projectId;
        this.filter = filter
        this.main = document.querySelector('main');
        this.init(); // initializes class by checking if project exists and tasks exist. 
    }

    init() {
        // get the project
        this.project = projectManager.getProjectById(this.projectId);
        // check if project exsists. 
        if(!this.project) {
            console.error('Project not found!');
        }
        else {
            this.tasks = this.project.tasks;
            this.completeTasks = this.tasks.filter(task => task.complete);
            this.incompleteTasks = this.tasks.filter(task => !task.complete);
        }
        //initial render based on filter
        this.renderPage()
    }

    renderPage(){
        // clear innerHTML 
        this.main.innerHTML = '';
        // Rendering All Tasks Page for default project. 
        if(this.projectId == 1) {
            if(this.filter == 'all'){
                this.main.appendChild(this.renderAllTasks());
                //setup page handlers
                const handlePage = new HandlePage(1,this.filter);
                handlePage.byTask();
            }
            else if(this.filter =='today'){
                this.main.appendChild(this.renderToday());
                //setup page handlers
                const handlePage = new HandlePage(1,this.filter);
                handlePage.byTask();
            }
            else{
                console.error(" There was an error ");
            }
            
        }
        else {
            this.renderProjectPage();
            // setup page Handlers. 
            const handlePage = new HandlePage(this.projectId, this.filter);
            handlePage.handlePage();
        }

    }

    renderToday(){
        const mainTaskContainer = document.createElement('div');
        mainTaskContainer.classList.add('main-task-container');
        const todayTasks = this.filterTasksByToday(this.incompleteTasks);
        const completeTodayTasks = this.filterTasksByToday(this.completeTasks);
        const taskElement = createTasks(todayTasks);
        const completeTasksElement = this.createCompleteElement(completeTodayTasks);
        // create header
        const taskHeader = this.createTaskHeader("Today")
        mainTaskContainer.appendChild(taskHeader);
        mainTaskContainer.appendChild(taskElement);
        mainTaskContainer.appendChild(completeTasksElement);
        return mainTaskContainer;
    }

    renderAllTasks(){
        const mainTaskContainer = document.createElement('div');
        mainTaskContainer.classList.add('main-task-container');
        const taskHeader = this.createTaskHeader("All Tasks")
        const taskElement = createTasks(this.incompleteTasks);
        const completeTasksElement = this.createCompleteElement(this.completeTasks);
        mainTaskContainer.appendChild(taskHeader);
        mainTaskContainer.appendChild(taskElement);
        mainTaskContainer.appendChild(completeTasksElement);
        return mainTaskContainer;
    }

    renderProjectPage() {
        // create project container
        const projectContainer = document.createElement('div');
        projectContainer.classList.add('project-container');
        // create project form
        const projectForm = document.createElement('div');
        projectForm.classList.add('project-form-container');
        projectForm.innerHTML = `
            <div class="project-info-container">
                <div class="project-title-container">
                    <input type="text" id="projectTitle" value="${this.project.title}">
                    <button id = "delete-project-button" data-id ="${this.project.id}"><span class="material-symbols-outlined">
                    delete
                    </span></button>
                </div>
                <textarea name="projectDescription" id="projectDescription" cols="30" rows="3" placeholder="Description...">${this.project.description}</textarea> 
            </div>
        `;
        // append projectForm to main
        projectContainer.appendChild(projectForm);
        
        // create project-task-list container
        const mainTaskContainer = document.createElement('div');
        mainTaskContainer.classList.add('main-task-container');
        
        const addTaskProjectBtn = document.createElement('button');
        addTaskProjectBtn.classList.add('add-project-task');
        addTaskProjectBtn.setAttribute('data-id', `${this.project.id}`);
        addTaskProjectBtn.innerHTML = `<span> + </span>Add Task`;            

        mainTaskContainer.appendChild(addTaskProjectBtn);
        mainTaskContainer.appendChild(this.renderAllTasks());

        // append taskContainer to main
        projectContainer.appendChild(mainTaskContainer);
       // append the projectContainer to main.
       this.main.appendChild(projectContainer);

    }

    createCompleteElement(completeTasks){
       const completeTasksElement = document.createElement('div');
       completeTasksElement.classList.add('complete-tasks');
       if(completeTasks.length > 0){// if there are complete tasks
            //create header
            const completeTasksHeader = this.createTaskHeader('Complete');
            const completeTasks = createTasks(this.completeTasks);
            // create complete task list. 
            completeTasksElement.appendChild(completeTasksHeader);
            completeTasksElement.appendChild(completeTasks);
       }
       return completeTasksElement;
    }

    filterTasksByToday(tasks) {
        return tasks.filter(task => isToday(new Date(task.date)));
    }

    createTaskHeader(headerName){
        const taskHeader = document.createElement('div');
        taskHeader.classList.add('task-header');
        taskHeader.innerHTML = `<h2>${headerName}</h2><div class="main-line"></div>`;
        return taskHeader;
    }


}

export default RenderPage;

