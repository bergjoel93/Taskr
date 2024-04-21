import projectManager from "../manage/ProjectManager";
import RenderPage from "../render/renderPage";
import { renderEditTaskForm } from "../render/renderAddTaskForm";
class HandlePage {
    constructor(projectId){
        this.projectId = projectId; // project Id is a number
        this.project = projectManager.getProjectById(this.projectId);
        this.tasks = this.project.tasks;
    }

    handlePage(){
        if(this.projectId == 1){
            this.byTask();
        }
        else { // setup project edit handler stuff. 
            
        }
    }

    byTask(){
        // Check if tasks is empty. If so, setup event handlers. 
        if(this.tasks){
           // get all the delete buttons 
            const deleteBtns = document.querySelectorAll('.delete');
            // get all edit buttons
            const editBtns = document.querySelectorAll('.edit');

            // setup handlers for all of the delete buttons
            deleteBtns.forEach(deleteBtn =>{
                deleteBtn.addEventListener('click', ()=>{
                    // get taskId from button
                    const taskId = Number(deleteBtn.getAttribute('data-id'));
                    projectManager.deleteTaskFromProject(this.projectId,taskId);
                    // re render page. 
                    const renderPage = new RenderPage();
                    renderPage.renderPage();
                });
                
            }); 

            // setup handlers for all edit buttons
            editBtns.forEach(editBtn => {
                editBtn.addEventListener('click', ()=>{
                    // get taskId from button
                    const taskId = Number(editBtn.getAttribute('data-id'));
                    // get task from taskId
                    const task = projectManager.getTaskFromProject(this.projectId, taskId);
                    //console.log(task);
                    renderEditTaskForm(this.projectId, task);

                })
            });
        }
        else {
            console.log('No tasks to make event handlers for.');
        }
    }

}
export default HandlePage;