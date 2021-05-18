const readlineSync = require("readline-sync");
var taskTab = [];
let askTask;
let addTask;
let removeTask;
let indice = 0;
let number ;


while (number != 5){
    console.log('Welcome to your task manager, Press');
    console.log();
    console.log('1. to see all your tasks');
    console.log('2. to add a task')
    console.log('3. to delete a task')
    console.log('4. to mark a task as done')
    console.log('5. to Exit the task manager')
    number = parseInt(readlineSync.question("Enter a number : "));
    console.log();

    switch(number) {
        case 1:
            console.log('Ironing');
            break;
        
        case 2:
            askTask = parseInt(readlineSync.question ('How many tasks would you like to add ? '));
            for (indice; indice < askTask; indice++){
                addTask = readlineSync.question('Which task would like to add ? ');
                taskTab.push(addTask);
            }
            console.log(taskTab);
            console.log()
            break;

        case 3:
            for (let i = 0; i < taskTab.length; i++){
                console.log(taskTab);
                removeTask = parseInt(readlineSync.question('enter your action number '));
                taskTab.splice(removeTask - 1, 1)
                console.log('You removed task number ' + removeTask)
                console.log(taskTab)
                break;

            }
            break;
        case 4:
            console.log('Task: ' + taskTab + ' has been done ');
            break;

        case 5 :
            console.log('Exit');
            break;
        default: console.log('no task to do')

    }



}