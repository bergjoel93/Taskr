import { projectManager } from "../app";
import Project from "./project";
import renderNavProjects from "./renderNavProjects";
import renderProjectPage from "./renderProjectPage";
import handleNavProject from "./handleNavProject";
/**
 * Responsible for handling the central logic that happens when you click the Add Project button. This function will be called in navigation.js. 
 * 1. default project name "New Project" button appears underneath it in nav bar. 
 * 2. Main content is filled with project page generated from createProjectPage. 
 * 3. Event handlers handle any new keystrokes in the title box and description box, that are automatically updated to storage. 
 * 4. User can click the add task button on the page to start adding tasks to project. This will add overlay and dialog box where user can add new task, which will be sent to specific project. 
 */

function addProject() {
    console.log("Add project clicked");
    // add new project to project manager
    const newProject = new Project(null, "New Project", "");
    projectManager.addProject(newProject);
    
    // extract recently made blank project from data storage
    const projects = projectManager.getProjects();
    const recentlyAddedProject = projects[projects.length - 1];
    

    // fill main content with blank project. 
    renderProjectPage(recentlyAddedProject);

     // add project name to nav bar. Will need a way to refresh the nav bar.
     renderNavProjects();
     
}

export default addProject;