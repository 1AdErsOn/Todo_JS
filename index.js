const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
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
function askForTasks (taskList = []) {
    rl.question('Introduce una Nueva Tarea (fin si terminas) ', taskName => {
        switch (taskName) {
            case 'fin':
                console.log('No se Introducen ya mas tareas');
                rl.close();
                break;
            case 'exit':
                rl.close();
                break;
            default:
                addTask(taskList, taskName);
                console.log('La Lista de tareas Actual es:');
                printTaskList(taskList);
                askForTasks(taskList);
        }
    })
}
askForTasks(taskList);
/* addTask(taskList, 'Sacar la Basura');
addTask(taskList, 'Lavar los Platos');
addTask(taskList, 'Cocinar');
addTask(taskList, 'Programar');
addTask(taskList, 'Jugar'); */
//printTaskList(taskList);