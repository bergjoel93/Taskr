/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/dateUtils.js":
/*!**************************!*\
  !*** ./src/dateUtils.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   formatDueDate: () => (/* binding */ formatDueDate)
/* harmony export */ });
// Function to format the date
function formatDueDate(dueDate) {
  var options = {
    weekday: 'long',
    // full day of the week (e.g., Thursday)
    month: 'long',
    // full month name (e.g., April)
    day: 'numeric',
    // day of the month (e.g., 4)
    hour: 'numeric',
    // hour (e.g., 8)
    minute: 'numeric',
    // minute (e.g., 0)
    hour12: true // 12-hour clock format (AM/PM)
  };
  return new Intl.DateTimeFormat('en-US', options).format(dueDate);
}


/***/ }),

/***/ "./src/navigation.js":
/*!***************************!*\
  !*** ./src/navigation.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   handleNavigation: () => (/* binding */ handleNavigation),
/* harmony export */   setupNavEventListeners: () => (/* binding */ setupNavEventListeners)
/* harmony export */ });
/* harmony import */ var _renderToday_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderToday.js */ "./src/renderToday.js");
/* harmony import */ var _renderAddTask_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderAddTask.js */ "./src/renderAddTask.js");
/* harmony import */ var _renderAllTasks_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderAllTasks.js */ "./src/renderAllTasks.js");
// Import necessary modules



/**
 * Purpose of this module: To setup Nav event handlers and to handle logic of what happens when you click a particular button in the nav sidebar. 
 */

function setupNavEventListeners() {
  // Get all buttons in nav
  var nav = document.querySelector('nav');
  var navBtns = nav.querySelectorAll('button');

  // Add event listener to each button
  navBtns.forEach(function (button) {
    button.addEventListener('click', function () {
      var buttonClass = button.classList[0]; // buttons can only have 1 class. 
      console.log(buttonClass + " was clicked");
      // You can add your navigation logic here
      handleNavigation(buttonClass);
    });
  });
}
function removeActive() {
  var activeClasses = document.querySelectorAll('.active');
  activeClasses.forEach(function (deactive) {
    deactive.classList.remove('active');
  });
}

// Function to handle navigation actions
function handleNavigation(navItem) {
  // Determine which navigation item was clicked
  switch (navItem) {
    case 'todayBtn':
      (0,_renderToday_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
      removeActive();
      document.querySelector(".todayBtn").classList.add("active");
      break;
    // Add more cases for other navigation items as needed
    case 'addTaskBtn':
      (0,_renderAddTask_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
      break;
    case 'allTasksBtn':
      (0,_renderAllTasks_js__WEBPACK_IMPORTED_MODULE_2__["default"])();
      removeActive();
      document.querySelector(".allTasksBtn").classList.add("active");
      break;
    default:
      break;
  }
}

// Function to clear the main content
// function clearMainContent() {
//     const mainContent = document.querySelector('main');
//     mainContent.innerHTML = ''; // Clear the content
// }

// // Function to render "Today" content
// function renderTodayContent() {
//     const mainContent = document.querySelector('main');
//     const todayContent = renderToday(tasks); // Assuming renderToday returns the content
//     mainContent.appendChild(todayContent);
// }

// Export the functions


/***/ }),

/***/ "./src/renderAddTask.js":
/*!******************************!*\
  !*** ./src/renderAddTask.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _taskList__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./taskList */ "./src/taskList.js");
/* harmony import */ var _task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task */ "./src/task.js");
/* harmony import */ var _renderAllTasks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderAllTasks */ "./src/renderAllTasks.js");



var body = document.querySelector('body');
function renderAddTask() {
  // Create a dialog element
  var overlay = document.createElement('div'); //semi-transparent overlay over top of window. 
  overlay.classList.add('overlay');

  // Set the HTML content for the dialog box
  overlay.innerHTML = "\n        <div class=\"dialog-container\">\n            <form id=\"newTaskForm\">\n                <h2>Add New Task</h2>\n                <input type=\"text\" name=\"title\" id=\"title\" placeholder=\"Title\" required maxlength=\"20\">\n                <input type=\"text\" name=\"description\" id=\"description\" placeholder=\"Description...\" required maxlength=\"100\">\n                <input type=\"datetime-local\" id=\"dueDate\" required>\n                <div class=\"priority-container\">\n                <label for=\"priority\">Priority Level</label>\n                <select id=\"priority\" required>\n                    <option value=\"Low\">Low</option>\n                    <option selected=\"selected\" value=\"Regular\">Regular</option>\n                    <option value=\"High\">High</option>\n                </select>\n                </div>\n                <input type=\"submit\" id=\"submit\" name=\"submit\" value=\"Add Task\" style=\"cursor: pointer;\">\n                <button type=\"button\" id=\"cancel\">Cancel</button>\n            </form>\n        </div>\n    ";

  // Append the dialog to the document body
  openOverlay();

  // Get reference to the form
  newTaskForm();
  function newTaskForm() {
    var submitBtn = document.querySelector('#submit');
    var cancelButton = document.querySelector('#cancel');
    // Add event listener for form submission
    submitBtn.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent default form submission behavior
      // Get form input values
      var title = document.querySelector("#title").value;
      var description = document.querySelector("#description").value;
      var dueDate = document.querySelector("#dueDate").value;
      var priority = document.querySelector("#priority").value;

      // Create a new task object with the form input values
      var newTask = new _task__WEBPACK_IMPORTED_MODULE_1__["default"](title, description, dueDate, priority, false);
      // add task to task list
      console.log(newTask);
      _taskList__WEBPACK_IMPORTED_MODULE_0__["default"].addTask(newTask);
      console.log("added new task.");

      // Add logic to add the new task to localStorage or wherever needed
      // For example, you can call a function from another module to handle task addition
      // Close the dialog box
      (0,_renderAllTasks__WEBPACK_IMPORTED_MODULE_2__["default"])();
      closeOverlay();
    });
    // Add event listener for cancel button to close the dialog box
    cancelButton.addEventListener('click', function () {
      closeOverlay();
    });
  }
  function openOverlay() {
    body.appendChild(overlay);
  }
  function closeOverlay() {
    body.removeChild(overlay);
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAddTask);

/***/ }),

/***/ "./src/renderAllTasks.js":
/*!*******************************!*\
  !*** ./src/renderAllTasks.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dateUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateUtils.js */ "./src/dateUtils.js");
/* harmony import */ var _taskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList.js */ "./src/taskList.js");


/**
 * Purpose of this module: To create the stuff that goes in the main content and to append it. Simply call renderToday() and it should reach into dataStore to pull out the objects to render them under Today. 
 */
function renderAllTasks() {
  var mainContent = document.querySelector('main');
  var tasks = document.createElement('div');
  var taskArr = _taskList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTasks();
  /// Complete Section//// 
  var complete = document.createElement('div');
  complete.classList.add("complete");
  tasks.setAttribute('id', 'tasks');
  // console.log(taskArr.length);
  // console.log(taskArr);
  for (var i = 0; i < taskArr.length; i++) {
    var task = taskArr[i];
    var title = taskArr[i].title;
    var description = taskArr[i].description;
    var unformattedDueDate = new Date(task.dueDate);
    var dueDate = (0,_dateUtils_js__WEBPACK_IMPORTED_MODULE_0__.formatDueDate)(unformattedDueDate);
    var priority = taskArr[i].priority;
    var _complete = taskArr[i].complete;
    if (!_complete) {
      // Check if the task's due date matches today's date
      var taskElement = renderTask(title, description, dueDate);
      // console.log(taskElement);
      tasks.appendChild(taskElement);
    } else {
      var completeTaskElement = renderTask(title, description, dueDate);
      _complete.appendChild(completeTaskElement);
    }
  }
  ;

  // create entire html content
  var taskContent = document.createElement('div');
  taskContent.classList.add('all-tasks');
  taskContent.innerHTML = "<h1>All Tasks</h1>";
  taskContent.appendChild(tasks);
  mainContent.innerHTML = ''; // clear main content
  mainContent.appendChild(taskContent);
  //Complete section
  complete.innerHTML = "\n        <h1>Complete</h1>\n        <div class=\"main-line\"></div>\n        ";
  mainContent.appendChild(complete);
  function renderTask(title, description, dueDate) {
    var taskElement = document.createElement('div'); // creates <div class="task">
    taskElement.classList.add('task');
    taskElement.innerHTML = "\n                <div class=\"main-line\"></div>\n                <div class=\"task-1\">\n                    <input type=\"checkbox\" class=\"completed\" id=\"completed\">\n                    <label for=\"completed\">".concat(title, "</label>\n                </div>\n                <div class=\"task-2\">").concat(description, "</div>\n                <div class=\"date\"><span class=\"material-symbols-outlined\">\n                calendar_month\n                </span>").concat(dueDate, "</div>\n                <div class=\"main-line\"></div>\n            ");
    return taskElement;
  }
  function renderComplete(task) {
    complete.innerHTML = "\n        <h1>Complete</h1>\n        <div class=\"main-line\"></div>\n        ";
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderAllTasks);

/***/ }),

/***/ "./src/renderToday.js":
/*!****************************!*\
  !*** ./src/renderToday.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dateUtils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dateUtils.js */ "./src/dateUtils.js");
/* harmony import */ var _taskList_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./taskList.js */ "./src/taskList.js");


/**
 * Purpose of this module: To create the stuff that goes in the main content and to append it. Simply call renderToday() and it should reach into dataStore to pull out the objects to render them under Today. 
 */
function renderToday() {
  var mainContent = document.querySelector('main');
  var tasks = document.createElement('div');
  var taskArr = _taskList_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllTasks();
  var today = new Date(); // get's today's date. 

  tasks.setAttribute('id', 'tasks');
  // console.log(taskArr.length);
  // console.log(taskArr);
  for (var i = 0; i < taskArr.length; i++) {
    var task = taskArr[i];
    var title = taskArr[i].title;
    var description = taskArr[i].description;
    var unformattedDueDate = new Date(task.dueDate);
    var dueDate = (0,_dateUtils_js__WEBPACK_IMPORTED_MODULE_0__.formatDueDate)(unformattedDueDate);
    var priority = taskArr[i].priority;
    var complete = taskArr[i].complete;
    // Check if the task's due date matches today's date
    if (unformattedDueDate.getFullYear() === today.getFullYear() && unformattedDueDate.getMonth() === today.getMonth() && unformattedDueDate.getDate() === today.getDate()) {
      var taskElement = document.createElement('div'); // creates <div class="task">
      taskElement.classList.add('task');
      taskElement.innerHTML = "\n                <div class=\"main-line\"></div>\n                <div class=\"task-1\">\n                    <input type=\"checkbox\" class=\"completed\" id=\"completed\">\n                    <label for=\"completed\">".concat(title, "</label>\n                </div>\n                <div class=\"task-2\">").concat(description, "</div>\n                <div class=\"date\"><span class=\"material-symbols-outlined\">\n                calendar_month\n                </span>").concat(dueDate, "</div>\n                <div class=\"main-line\"></div>\n            ");
      // console.log(taskElement);
      tasks.appendChild(taskElement);
    }
  }
  ;

  // create entire html content
  var taskContent = document.createElement('div');
  taskContent.classList.add('tasks-today');
  taskContent.innerHTML = "<h1>Today</h1>";
  taskContent.appendChild(tasks);
  mainContent.innerHTML = ''; // clear main content
  mainContent.appendChild(taskContent);
}
// TODO : create a function that goes through the objects and only pulls out the ones that happen today. 
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (renderToday);

/***/ }),

/***/ "./src/task.js":
/*!*********************!*\
  !*** ./src/task.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
var Task = /*#__PURE__*/function () {
  function Task(title, description, dueDate, priority, complete) {
    _classCallCheck(this, Task);
    this.title = title;
    this.description = description;
    this.dueDate = new Date(dueDate);
    this.priority = priority;
    this.complete = complete;
  }
  //Method to get formatted due date
  return _createClass(Task, [{
    key: "getFormattedDueDate",
    value: function getFormattedDueDate() {
      var options = {
        weekday: 'long',
        // displays full name of the day (e.g. Monday)
        month: 'long',
        // displays full name of the month (e.g. January)
        day: 'numeric' // displays day of the month (e.g. 1)
      };
      return this.dueDate.toLocaleDateString(undefined, options);
    }

    // Method to check if task is overdue
  }, {
    key: "isOverdue",
    value: function isOverdue() {
      var currentDate = new Date();
      return this.dueDate < currentDate;
    }
  }]);
}();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Task);

/***/ }),

/***/ "./src/taskList.js":
/*!*************************!*\
  !*** ./src/taskList.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }
function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// TaskList class responsible for managing an array of tasks
var TaskList = /*#__PURE__*/function () {
  function TaskList() {
    _classCallCheck(this, TaskList);
    // Check if tasks exist in localStorage and parse them
    this.tasks = JSON.parse(localStorage.getItem('tasks')) || [];
  }

  // Method to add a task to the task list and localStorage
  return _createClass(TaskList, [{
    key: "addTask",
    value: function addTask(task) {
      // Check if a task with the same ID already exists in the task list
      var existingTask = this.tasks.find(function (existingTask) {
        return existingTask.title === task.title;
      });

      // If the task doesn't already exist, add it to the task list and localStorage
      if (!existingTask) {
        this.tasks.push(task);
        this.saveTasksToLocalStorage();
      }
    }

    // Method to remove a task from the task list and localStorage
  }, {
    key: "removeTask",
    value: function removeTask(task) {
      var index = this.tasks.indexOf(task);
      if (index !== -1) {
        this.tasks.splice(index, 1);
        this.saveTasksToLocalStorage();
      }
    }

    // Method to save tasks to localStorage
  }, {
    key: "saveTasksToLocalStorage",
    value: function saveTasksToLocalStorage() {
      localStorage.setItem('tasks', JSON.stringify(this.tasks));
    }

    // Method to get the length of the tasks array
  }, {
    key: "length",
    get: function get() {
      return this.tasks.length;
    }

    // Method to retrieve all tasks as an array
  }, {
    key: "getAllTasks",
    value: function getAllTasks() {
      return this.tasks;
    }

    // Method to get a specific property of a task by index
  }, {
    key: "getTaskProperty",
    value: function getTaskProperty(index, propertyName) {
      var task = this.tasks[index];
      if (task && propertyName in task) {
        return task[propertyName];
      }
      return undefined;
    }

    // Method to retrieve a task by its title
  }, {
    key: "getTaskByTitle",
    value: function getTaskByTitle(title) {
      return this.tasks.find(function (task) {
        return task.title === title;
      });
    }
    // toggles completed task true or false. 
  }, {
    key: "toggleComplete",
    value: function toggleComplete(title) {
      var task = getTaskByTitle(title);
      // if task.complete is true, change to false. 
      if (task) {
        task.complete = !task.complete;
        this.saveTasksToLocalStorage();
      } else {
        task.complete = true;
        this.saveTasksToLocalStorage();
      }
    }

    // Other methods for managing tasks (update, filter, etc.) can go here
  }]);
}();
var taskList = new TaskList();
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (taskList);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/user6.png */ "./src/assets/user6.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap);"]);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `:root {
    --sidebarColorLight: #fffbeb;
    --addButtonText: #a81f00;
    --highlightColor: #ffedd5;
    --profileImg: '../assets/user6.png';
}
* {
    font-family: "Reddit Mono", monospace;
    font-optical-sizing: auto;
    font-style: normal;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
* button {
    cursor: pointer;
}

body {
    display: flex;
    height: 100vh;
}
/* Sidebar Stuff */
.sidebar {
    padding: .5rem;
    height: auto;
    width: 210px;
    max-width: 420px;
    min-width: 210px;
    flex-shrink: 0;
    background-color: var(--sidebarColorLight);
    box-shadow: 8px -2px 23px -6px rgba(145,135,103,0.75);
-webkit-box-shadow: 8px -2px 23px -6px rgba(145,135,103,0.75);
-moz-box-shadow: 8px -2px 23px -6px rgba(145,135,103,0.75);
}

.sidebar .name{
    display: flex;
    width: auto;
    align-items: center;
    justify-content: start;
}

.sidebar .name-name {
    font-size: 1.8rem;
}

.sidebar .name .name-icon {
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
    background-size: contain;
    background-repeat: no-repeat;
    margin: 8px;
}

.sidebar .name-notification-icon {
    padding-left: 50px;
    
}

nav {
padding: .5rem;
display: flex;
flex-direction: column;
}

.nav-line {
    width: 90%;
    height: 1px;
    background-color: grey;
    margin-top: 3px;
    margin-bottom: 12px;
}

nav {
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: flex-start;
    margin-bottom: 1rem;
}

nav button {
    background-color: transparent;
    border-style: none;
    font-size: 1.1rem;
    margin-top: 12px;
    margin-bottom: 12px;
    width: 100%;
}

nav button:hover {
    border-bottom: solid red 1px;
}

nav .active {
    border-radius: 8px;
    background-color: var(--highlightColor);
}

/* Main Content  */
main{
    margin: 1rem;
    background-color: #fff;
}

.main-line {
    width: 100%;
    height: 1px;
    background-color: #e5e5e5;;
    margin-top: 12px;
    margin-bottom: 12px;
}

.tasks-today {
    margin-top: 16px;
    margin-bottom: 16px;
}
.date {
    color: #dc4c3e;
    display: flex;
    justify-content: start;
    align-items: center;
}
.task-1 input, .task-1 label {
    font-size: 1.2rem;
}

.task-1 input {
    width: 20px;
    height: 20px;
}
/* Dialog container Stuff */
.overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */
    display: flex;
    justify-content: center;
    align-items: center;
  }

.dialog-container {
    background-color: var(--sidebarColorLight);
    display: flex;
    width: 60%;
    padding: 1rem;
    border-radius: 12px;
    justify-content: center;
}
.dialog-container form{
    display: flex;
    flex-direction: column;
    justify-content: center;
    
}
.dialog-container form input, .dialog-container form button {
margin: 8px;
padding: 6px;
}






`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"AAEA;IACI,4BAA4B;IAC5B,wBAAwB;IACxB,yBAAyB;IACzB,mCAAmC;AACvC;AACA;IACI,qCAAqC;IACrC,yBAAyB;IACzB,kBAAkB;IAClB,SAAS;IACT,UAAU;IACV,sBAAsB;AAC1B;AACA;IACI,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,aAAa;AACjB;AACA,kBAAkB;AAClB;IACI,cAAc;IACd,YAAY;IACZ,YAAY;IACZ,gBAAgB;IAChB,gBAAgB;IAChB,cAAc;IACd,0CAA0C;IAC1C,qDAAqD;AACzD,6DAA6D;AAC7D,0DAA0D;AAC1D;;AAEA;IACI,aAAa;IACb,WAAW;IACX,mBAAmB;IACnB,sBAAsB;AAC1B;;AAEA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,kBAAkB;IAClB,yDAA4C;IAC5C,wBAAwB;IACxB,4BAA4B;IAC5B,WAAW;AACf;;AAEA;IACI,kBAAkB;;AAEtB;;AAEA;AACA,cAAc;AACd,aAAa;AACb,sBAAsB;AACtB;;AAEA;IACI,UAAU;IACV,WAAW;IACX,sBAAsB;IACtB,eAAe;IACf,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,sBAAsB;IACtB,kBAAkB;IAClB,2BAA2B;IAC3B,mBAAmB;AACvB;;AAEA;IACI,6BAA6B;IAC7B,kBAAkB;IAClB,iBAAiB;IACjB,gBAAgB;IAChB,mBAAmB;IACnB,WAAW;AACf;;AAEA;IACI,4BAA4B;AAChC;;AAEA;IACI,kBAAkB;IAClB,uCAAuC;AAC3C;;AAEA,kBAAkB;AAClB;IACI,YAAY;IACZ,sBAAsB;AAC1B;;AAEA;IACI,WAAW;IACX,WAAW;IACX,yBAAyB;IACzB,gBAAgB;IAChB,mBAAmB;AACvB;;AAEA;IACI,gBAAgB;IAChB,mBAAmB;AACvB;AACA;IACI,cAAc;IACd,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;AACA;IACI,iBAAiB;AACrB;;AAEA;IACI,WAAW;IACX,YAAY;AAChB;AACA,2BAA2B;AAC3B;IACI,eAAe;IACf,MAAM;IACN,OAAO;IACP,WAAW;IACX,YAAY;IACZ,8BAA8B,EAAE,6BAA6B;IAC7D,aAAa;IACb,uBAAuB;IACvB,mBAAmB;EACrB;;AAEF;IACI,0CAA0C;IAC1C,aAAa;IACb,UAAU;IACV,aAAa;IACb,mBAAmB;IACnB,uBAAuB;AAC3B;AACA;IACI,aAAa;IACb,sBAAsB;IACtB,uBAAuB;;AAE3B;AACA;AACA,WAAW;AACX,YAAY;AACZ","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Reddit+Mono:wght@200..900&display=swap');\n\n:root {\n    --sidebarColorLight: #fffbeb;\n    --addButtonText: #a81f00;\n    --highlightColor: #ffedd5;\n    --profileImg: '../assets/user6.png';\n}\n* {\n    font-family: \"Reddit Mono\", monospace;\n    font-optical-sizing: auto;\n    font-style: normal;\n    margin: 0;\n    padding: 0;\n    box-sizing: border-box;\n}\n* button {\n    cursor: pointer;\n}\n\nbody {\n    display: flex;\n    height: 100vh;\n}\n/* Sidebar Stuff */\n.sidebar {\n    padding: .5rem;\n    height: auto;\n    width: 210px;\n    max-width: 420px;\n    min-width: 210px;\n    flex-shrink: 0;\n    background-color: var(--sidebarColorLight);\n    box-shadow: 8px -2px 23px -6px rgba(145,135,103,0.75);\n-webkit-box-shadow: 8px -2px 23px -6px rgba(145,135,103,0.75);\n-moz-box-shadow: 8px -2px 23px -6px rgba(145,135,103,0.75);\n}\n\n.sidebar .name{\n    display: flex;\n    width: auto;\n    align-items: center;\n    justify-content: start;\n}\n\n.sidebar .name-name {\n    font-size: 1.8rem;\n}\n\n.sidebar .name .name-icon {\n    width: 40px;\n    height: 40px;\n    border-radius: 50%;\n    background-image: url('../assets/user6.png');\n    background-size: contain;\n    background-repeat: no-repeat;\n    margin: 8px;\n}\n\n.sidebar .name-notification-icon {\n    padding-left: 50px;\n    \n}\n\nnav {\npadding: .5rem;\ndisplay: flex;\nflex-direction: column;\n}\n\n.nav-line {\n    width: 90%;\n    height: 1px;\n    background-color: grey;\n    margin-top: 3px;\n    margin-bottom: 12px;\n}\n\nnav {\n    display: flex;\n    flex-direction: column;\n    align-items: start;\n    justify-content: flex-start;\n    margin-bottom: 1rem;\n}\n\nnav button {\n    background-color: transparent;\n    border-style: none;\n    font-size: 1.1rem;\n    margin-top: 12px;\n    margin-bottom: 12px;\n    width: 100%;\n}\n\nnav button:hover {\n    border-bottom: solid red 1px;\n}\n\nnav .active {\n    border-radius: 8px;\n    background-color: var(--highlightColor);\n}\n\n/* Main Content  */\nmain{\n    margin: 1rem;\n    background-color: #fff;\n}\n\n.main-line {\n    width: 100%;\n    height: 1px;\n    background-color: #e5e5e5;;\n    margin-top: 12px;\n    margin-bottom: 12px;\n}\n\n.tasks-today {\n    margin-top: 16px;\n    margin-bottom: 16px;\n}\n.date {\n    color: #dc4c3e;\n    display: flex;\n    justify-content: start;\n    align-items: center;\n}\n.task-1 input, .task-1 label {\n    font-size: 1.2rem;\n}\n\n.task-1 input {\n    width: 20px;\n    height: 20px;\n}\n/* Dialog container Stuff */\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background: rgba(0, 0, 0, 0.5); /* Semi-transparent overlay */\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n.dialog-container {\n    background-color: var(--sidebarColorLight);\n    display: flex;\n    width: 60%;\n    padding: 1rem;\n    border-radius: 12px;\n    justify-content: center;\n}\n.dialog-container form{\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    \n}\n.dialog-container form input, .dialog-container form button {\nmargin: 8px;\npadding: 6px;\n}\n\n\n\n\n\n\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/assets/user6.png":
/*!******************************!*\
  !*** ./src/assets/user6.png ***!
  \******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "user6.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"bundle": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _task_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./task.js */ "./src/task.js");
/* harmony import */ var _taskList_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./taskList.js */ "./src/taskList.js");
/* harmony import */ var _renderToday_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./renderToday.js */ "./src/renderToday.js");
/* harmony import */ var _navigation_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./navigation.js */ "./src/navigation.js");
/* harmony import */ var _renderAllTasks_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./renderAllTasks.js */ "./src/renderAllTasks.js");
//import generateJoke from "./generateJoke.js"

//import laughing from './assets/laughing.svg'






//Nav listeners
(0,_navigation_js__WEBPACK_IMPORTED_MODULE_4__.setupNavEventListeners)();

// // Create an instance of TaskList
// const taskList = new TaskList();

// Create test tasks
var testTask1 = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Water Plants", "Here's a description of the task. You must water the plants daily. Use the watering can in the closet. Use distilled water for the prayer plant.", '2024-04-04T08:00', 'HIGH', false);
var testTask2 = new _task_js__WEBPACK_IMPORTED_MODULE_1__["default"]("Make Bed", "You must make your bed every morning", '2024-04-04T08:00', 'REGULAR', false);

// Add test tasks to the dataStore
_taskList_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(testTask1);
_taskList_js__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(testTask2);
(0,_renderAllTasks_js__WEBPACK_IMPORTED_MODULE_5__["default"])();

/////////////////////////// Testing Elements Created ////////
// const taskList  = new TaskList(); // create an instance of TaskList
// const taskArr = taskList.getAllTasks();

// let testTask1 = new Task("Water Plants", "Here's a description of the task. You must water the plants daily. Use the watering can in the closet. Use distilled water for the prayer plant.", '2024-04-04T08:00', 'HIGH', false);
// taskList.addTask(testTask1);

// let testTask2 = new Task("Make Bed", "You must make your bed every morning",'2024-04-04T08:00','REGULAR', false );
// taskList.addTask(testTask2);
////////////////////////////////////////////////////////////

// const mainContent = document.querySelector('#main-content');
// mainContent.innerHTML = '';

// mainContent.appendChild(renderToday(taskArr));
// //console.log(taskList);
// console.log('Today stuff rendered success');
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map