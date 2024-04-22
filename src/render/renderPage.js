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
    constructor(projectId = 1){
        this.projectId = projectId;
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
        }
        //initial render based on filter
        this.renderPage()
    }

    renderPage(filter = 'all'){
        // clear innerHTML 
        this.main.innerHTML = '';
        // Rendering All Tasks Page for default project. 
        if(this.projectId == 1) {
            if(filter == 'all'){
                this.renderAllTasks();
            }
            else if(filter =='today'){
                this.renderToday()
            }
            else{
                console.error(" There was an error ");
            }
            //setup page handlers
            const handlePage = new HandlePage(1);
            handlePage.byTask();
        }
        else {
            this.renderProjectPage();
            // setup event Handlers. 
            const handlePage = new HandlePage(this.projectId);
            handlePage.handlePage();
        }

    }

    renderToday(){
        const todayTasks = this.filterTasksByToday(this.tasks);
        const taskElement = createTasks(todayTasks);
        this.main.appendChild(taskElement);
    }

    renderAllTasks(){
        const taskElement = createTasks(this.tasks);
        this.main.appendChild(taskElement);
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
        const projectTaskList = document.createElement('div');
        projectTaskList.classList.add('project-task-list');
        projectTaskList.innerHTML = `
            <h2>Tasks</h2>
            <div class="main-line"></div>
            `;
        const taskContainer = document.createElement('div');
        taskContainer.classList.add('task-container');
        // get the tasksElement 
        const tasksElement = createTasks(this.tasks);
        taskContainer.appendChild(tasksElement);

        const addTaskProjectBtn = document.createElement('button');
        addTaskProjectBtn.classList.add('add-project-task');
        addTaskProjectBtn.setAttribute('data-id', `${this.project.id}`);
        addTaskProjectBtn.innerHTML = `<span> + </span>Add Task`;            
        
        projectTaskList.appendChild(taskContainer);
        projectTaskList.appendChild(addTaskProjectBtn);

        // append taskContainer to main
        projectContainer.appendChild(projectTaskList);
       // append the projectContainer to main.
       this.main.appendChild(projectContainer);

    }

    filterTasksByToday(tasks) {
        return tasks.filter(task => isToday(new Date(task.date)));
        // const today = new Date();  // Get the current date and time
        // const dateToday = today.toISOString().substring(0, 10);  // Format today's date as YYYY-MM-DD
    
        // return tasks.filter(task => {
        //     // Ensure task.date is a Date object
        //     const taskDate = new Date(task.date);
        //     const taskDateFormatted = taskDate.toISOString().substring(0, 10);
            
        //     // Compare the formatted dates
        //     return taskDateFormatted === dateToday;
        // });
    }


}

export default RenderPage;

