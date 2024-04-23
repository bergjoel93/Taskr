import projectManager from "../manage/ProjectManager";
/**
 * Creates the NavBar template. 
 */

// CreateNavbar.js
class CreateNavbar {
    constructor(userName) {
        this.userName = userName;
    }

    getNavbar() {
        const navbarContainer = document.createElement('div');
        navbarContainer.classList.add('navbar-container');
        navbarContainer.innerHTML = `
        <div class="sidebar-title">Taskr</div>  
        <div class="name">
                <div class="name-icon"></div>
                <div class="name-name">${this.userName}</div>
                <div class="name-notification-icon"><span class="material-symbols-outlined">
                    notifications
                    </span></div>
            </div>
        `;
        const nav = document.createElement('nav');
        nav.innerHTML = `
                <h3>My Tasks</h3>
                <div class="nav-line"></div>
                <button class="addTaskBtn">
                    <span class="material-symbols-outlined">
                        add_circle
                        </span>
                    Add Task
                </button>
                <button class="todayBtn">Today</button>
                <button class="allTasksBtn active">All Tasks</button>

                <h3>My Projects</h3>
                <div class="nav-line"></div>

                <button class="addProjectBtn">
                    <span class="material-symbols-outlined">
                        add_circle
                        </span>
                    Add Project
                </button>

            `;
        const navProjectContainer = document.createElement('div');
        navProjectContainer.classList.add('nav-project-container');

        //print the projects list 
        // get the project name array. 
        const projects = projectManager.getProjects();
        
        projects.forEach(project => {
            //skip the first project
            if(project.id !== 1){
                const projectBtn = document.createElement('button');
                projectBtn.setAttribute('data-id',`${project.id}`);
                // every project btn has an identifying class
                projectBtn.classList.add('projectBtn');
                projectBtn.innerHTML = `# ${project.title}`;
                // append btn to navProjectContainer. 
                navProjectContainer.appendChild(projectBtn);
            }
        });

        //append everything
        nav.append(navProjectContainer);
        navbarContainer.append(nav);

        return navbarContainer;
    }
}


export default CreateNavbar;
