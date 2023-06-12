const readline = require('readline');

/* Primer Modo: Lectura */

let taskList = [];
function addTask (taskList = [], taskName) {
    let task = {done: false, name: taskName}
    taskList.push(task);
}
function printTaskList (taskList = []) {
    for ( let task of taskList) {
        if (task.done) {
            console.log('[X] ' + task.name);
        } else {
            console.log('[] ' + task.name);
        }
    }
}
//let task = {done: null, name: null};
addTask(taskList, 'Sacar la Basura');
addTask(taskList, 'Lavar los Platos');
addTask(taskList, 'Cocinar');
addTask(taskList, 'Programar');
addTask(taskList, 'Jugar');
printTaskList(taskList);