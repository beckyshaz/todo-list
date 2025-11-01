
import "./styles.css";

//import { ProjectForm } from "./project";

//import { AddBtnUI } from "./project";

//import { SelectMyProjects } from "./project";


//import { TodosForm } from "./project";


import { UIComponents } from "./UIComponents";

import { ProjectForm } from "./project";

import { TodosForm } from "./todos";

import { StoreProject } from "./storeProject";

const projectformInstance = new ProjectForm();

const projectForm = projectformInstance.getProjectForm();

const projectFormContainer = document.querySelector(".project-form-div");
projectFormContainer.appendChild(projectForm);

const projectFormHandlers = projectformInstance.getProjectFormHandlers();



const projectAddBtn = UIComponents.createAddButton(projectFormHandlers);

const myProjects = document.querySelector(".my-projects");
myProjects.appendChild(projectAddBtn);


//const todoFormArray = UIComponents.createTodoForm()



//const project = new Project("Love", "love is a beautiful thing when founded"); 
//console.log(project);

UIComponents.showProjects();
//UIComponents.showTodo();


//UIComponents.monitorProjects();


//const store = new StoreProject();
//store.clearProjets();

//console.log(store);
UIComponents.addListenerToCompletedBtn();



