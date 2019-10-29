import { addNewTask, updateTask } from './server'

(async function myFunc(){
    await addNewTask({
        name: "My Task",
        id: "12346"
     }); 

     await updateTask({
         name:"my task - update!",
         id:"12346"
     })

})();

