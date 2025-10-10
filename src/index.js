
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


const todoForm = new TodosForm();
console.log(todoForm);
//const project = new Project("Love", "love is a beautiful thing when founded"); 
//console.log(project);

//const todo = new Todos("washing");
//console.log(todo);

//createProjectForm();

//createTodosForm();

//listProjects();

//handleProjectCancelButton()
//handleAddTodoButton()

//handleSubmitTodo();

//handleTodoForm();

//handleAddProjectBtn();

//showMyProjects();


//addBtn.crea
//console.log(addBtn);


//const projectForm = new ProjectForm();
//console.log (projectForm);
//const addBtn = new AddBtnUI();
//const projectAddBtn = addBtn.createAddTodoButton(projectForm);
//console.log(projectAddBtn);
//const myProjects = document.querySelector(".my-projects");
//myProjects.appendChild(projectAddBtn);

//const TodoBtn = new AddBtnUI();

/*const addTodoBtn = TodoBtn.createAddTodoButton(todoForm);
addTodoBtn.classname = "add-todo";
addTodoBtn.textContent = "Add Todo";*/

//const selectProject = new SelectMyProjects();
//selectProject.createAddTodoButton();


