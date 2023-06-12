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
function markTaskAsDone (taskList = [], index) {
    if (index >= 0 && index < taskList.length) {
        taskList[index].done = true;
    } else {
        console.log('Invalid Task Number');
    }
}
function printTaskList (taskList = []) {
    let number = 1;
    for ( let task of taskList) {
        if (task.done) {
            console.log(number + '. [X] ' + task.name);
        } else {
            console.log(number + '. [] ' + task.name);
        }
        number += 1;
    }
}
function checkAllDone(taskList = []) {
    for (let task of taskList) {
        if (!task.done) return false;
    }
    return true;
}
function mode1 (taskList = []) {
    rl.question('Introduce una Nueva Tarea (fin si terminas) ', taskName => {
        switch (taskName) {
            case 'fin':
                console.log('No se Introducen ya mas tareas');               
                mode2(taskList);
                break;
            case 'exit':
                rl.close();
                break;
            default:
                addTask(taskList, taskName);
                console.log('La Lista de tareas Actual es:');
                printTaskList(taskList);
                mode1(taskList);
        }
    })
}
/* Segundo Modo: Interaccion */
function mode2 (taskList) {
    printTaskList(taskList);
    rl.question('Que tarea has realizado? (1-N) ', taskId => {
        switch (taskId) {
            case 'fin':
            case 'exit':
                console.log('Bey Bey');
                rl.close();
                break;
            default:
                markTaskAsDone(taskList, taskId - 1);
                if (checkAllDone(taskList)) {
                    console.log('Muy Bien Has Completado Todo...');
                    printTaskList(taskList)
                    rl.close();
                } else {mode2(taskList)}
        }
    })
}
mode1(taskList);
/* addTask(taskList, 'Sacar la Basura');
addTask(taskList, 'Lavar los Platos');
addTask(taskList, 'Cocinar');
addTask(taskList, 'Programar');
addTask(taskList, 'Jugar'); */
//printTaskList(taskList);