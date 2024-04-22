import projectManager from "../manage/ProjectManager";
import RenderPage from "../render/renderPage";
import { renderEditTaskForm, renderNewAddTaskForm } from "../render/renderAddTaskForm";
import deleteConfirm from "../render/deleteConfirm";
import RenderNavbar from "../render/renderNavbar";

class HandlePage {
    constructor(projectId){
        this.projectId = projectId; // project Id is a number
        this.project = projectManager.getProjectById(this.projectId);
        this.tasks = this.project.tasks;
    }

    handlePage(){
        // Check if we're updaing All Tasks Page
        if(this.projectId == 1){
            this.byTask(); 
        }
        else { // setup project edit handler stuff. 
            this.byTask();
            const titleInput = document.querySelector('#projectTitle');
            const titleContainer = document.querySelector(".project-title-container"); // add the border effect when textinput is in focus. 

            // Title input
            titleInput.addEventListener('input', ()=> {
            projectManager.updateProjectTitle(this.projectId, titleInput.value);
            });
            
            // once user clicks out of focus from title input, then the page will re-render. 
            titleInput.addEventListener('blur', ()=> {
                const renderPage = new RenderPage(this.projectId);
                renderPage.renderPage();
                const renderNavBar = new RenderNavbar();
                renderNavBar.render();
            });

            // Add an event listener for the 'focus' event
            titleInput.addEventListener('focus', function() {
                // Use setTimeout to ensure the browser has time to focus the element
                // adds border effect when text input is in focus. applies to container. 
                titleContainer.style.border="solid black 2px";
                titleContainer.style.borderRadius = '8px';
                setTimeout(() => {
                    titleInput.select();  // This will highlight all the text in the input
                }, 0);
            });

            // Description Input
            const descriptionInput = document.querySelector('#projectDescription');
            descriptionInput.addEventListener('input', ()=>{
                projectManager.updateProjectDescription(this.projectId, descriptionInput.value);
            });

            // when user clicks out of description the page will refresh. 
            descriptionInput.addEventListener('blur', ()=>{
                const renderPage = new RenderPage(this.projectId);
                renderPage.renderPage();
                const renderNavBar = new RenderNavbar();
                renderNavBar.render();
            });

            // Delete project button 
            const deleteProjectButton = document.querySelector('#delete-project-button');
            deleteProjectButton.addEventListener('click', ()=>{
                deleteConfirm('delete-project-button');
            });

            // Add Task Button 
            const addTaskBtn = document.querySelector('.add-project-task');
            addTaskBtn.addEventListener('click',()=>{
                renderNewAddTaskForm(this.projectId);
            });
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