/**
 * Creates the NavBar template. 
 */

// CreateNavbar.js
class CreateNavbar {
    constructor(userName) {
        this.userName = userName;
    }

    getNavbar() {
        return `
        <div class="name">
            <div class="name-icon"></div>
            <div class="name-name">${this.userName}</div>
            <div class="name-notification-icon"><span class="material-symbols-outlined">
                notifications
                </span></div>
        </div>
        <nav>
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

            <div class="nav-project-container" style="max-height: 200px; overflow-y: auto;">
                <!-- New buttons with project titles added here -->
            </div>
        </nav>
        `;
    }
}


export default CreateNavbar;
