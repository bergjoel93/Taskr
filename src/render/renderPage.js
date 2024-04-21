import createTasks from "../create/createTasks";
import projectManager from "../manage/ProjectManager";
import HandlePage from "../handle/handlePage";
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
        this.project = projectManager.getProjectById(this.projectId);
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
            renderProjectPage();
        }

    }

    renderToday(){
        this.main.innerHTML=``;
        const todayTasks = this.filterTasksByToday(this.tasks);
        const taskElement = createTasks(todayTasks);
        this.main.appendChild(taskElement);
    }

    renderAllTasks(){
        this.main.innerHTML='';
        const taskElement = createTasks(this.tasks);
        this.main.appendChild(taskElement);
    }

    renderProjectPage() {

    }

    filterTasksByToday(tasks) {
        const today = new Date();  // Get the current date and time
        const dateToday = today.toISOString().substring(0, 10);  // Format today's date as YYYY-MM-DD
    
        return tasks.filter(task => {
            // Ensure task.date is a Date object
            const taskDate = new Date(task.date);
            const taskDateFormatted = taskDate.toISOString().substring(0, 10);
            
            // Compare the formatted dates
            return taskDateFormatted === dateToday;
        });
    }


}

export default RenderPage;

