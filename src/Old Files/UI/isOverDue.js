/**
 * This module is responsible for providing a function that checks if a date is overdue or not. If it's overdue, then it will inject a caution message, along adding a class wthat will highlight the date in the tasks. 
 */

function isOverDue(task){
    const taskDate = new Date(task.date);

    const today = new Date(); // today's date. 
    today.setHours(0,0,0,0); //normalize today's date to start at midnight making it easier to compare later. 

    

}