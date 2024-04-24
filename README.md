Taskr - the to-do list web app

Reflection
Up to this point in my TOP journey, this has been the most challenging! I think I spent about a month overall studying and trying to complete this project. I restarted fresh 3 times with the 3rd attemp being what I have published here. I learned a lot about modular design, and class structures, along with increasing my skills with event handling. I added some fancy features that I'm proud of like the hovering effect displaying the edit-pane on an individual task. 

Overall, I still think there could be a lot of improvement with how I code and my code organization. I would like to further understand better function calls throughout and across modules. At some points, my function calls and object instantiation became somewhat muddled, and would get confusing. When I would get lost in this project, literally staring at the screen unsure what to do next, I would simply start adding comments, which significantly helped me trace the logic. 

I hope if you're a developer and read this that you would look through my code and see if you can understand it. If you can't, I'd be thrilled to get some constructive feedback. 

email: jberg33.student@gmail.com

Purpose of the Project
The Todo List project was designed as an educational exercise to deepen understanding and application of modern web development practices, specifically focusing on Object-Oriented Programming (OOP) and the SOLID design principles. The aim was to create a practical, user-friendly application that allows users to manage their tasks effectively, showcasing the ability to structure and maintain a robust codebase using advanced JavaScript concepts.

Achievements
The project successfully implements a fully functional Todo List application that allows users to:

* Create, edit, and delete tasks within a clean and intuitive interface.
* Organize tasks into projects for better categorization and access.
* Set priorities and due dates for tasks, enhancing task management.
* View tasks filtered by completion status or due date, with special views for "Today" and "All Tasks".
* Persist data locally using the browser's localStorage to retain user data between sessions.

Project Functionality
The application features a dynamic interface where users can interact with various elements such as:

* Task Management: Users can add new tasks with details such as title, description, due date, and priority. Tasks can be marked as complete or reopened, and they can be edited or    deleted as needed.
* Project Management: Users can create multiple projects to categorize tasks. Each project can be accessed separately, and tasks can be managed within their respective projects.
* Navigation Bar: A dedicated navbar allows easy navigation between different views and projects, enhancing user experience by making task and project management seamless and accessible.

Project Structure and Build Process
The project was structured around key principles of OOP and SOLID to ensure modularity, maintainability, and scalability:

* Modular Design: The codebase is divided into multiple modules, each responsible for specific aspects of the application (e.g., handling tasks, rendering UI components, managing projects).
* Class-based Architecture: Key components like tasks, projects, and UI handlers are implemented as classes, ensuring encapsulation and the coherent grouping of related properties and methods.
* Event Handling: The application uses event listeners extensively to manage user interactions and update the UI accordingly.
* Persistence: Using the localStorage API, the application saves and retrieves user data, ensuring that task information persists across sessions.
* Build System: The project utilizes Webpack to bundle modules, allowing for organized development and efficient deployment.

