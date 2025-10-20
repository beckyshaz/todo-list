
import "./styles.css";

//import { ProjectForm } from "./project";

//import { AddBtnUI } from "./project";

//import { SelectMyProjects } from "./project";


//import { TodosForm } from "./project";

import { UIComponents } from "./UIComponents";

import { ProjectForm } from "./project";

import { TodosForm } from "./todos";



const projectformInstance = new ProjectForm();

const projectForm = projectformInstance.getProjectForm();

const projectFormContainer = document.querySelector(".project-form-div");
projectFormContainer.appendChild(projectForm);

const projectFormHandlers = projectformInstance.getProjectFormHandlers();



const projectAddBtn = UIComponents.createAddButton(projectFormHandlers);

const myProjects = document.querySelector(".my-projects");
myProjects.appendChild(projectAddBtn);


/*const todoFormInstance = new TodosForm();

if (todoFormInstance) {
    console.log(todoFormInstance);
    const todoForm = todoFormInstance.getTodoForm();

    if (todoForm) {
        const todoFormContainer = document.querySelector(".todo-form-div");
        todoFormContainer.appendChild(todoForm);

    }else {
        console.log("Todo form not found");
    }
}else {
    console.log("failed to create form instance");
}

*/



//const project = new Project("Love", "love is a beautiful thing when founded"); 
//console.log(project);

UIComponents.showProjects();

UIComponents.monitorProjects();





