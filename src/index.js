
import "./styles.css";

import { ProjectForm } from "./project";

import { AddBtnUI } from "./project";




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
const projectForm = new ProjectForm();
console.log (projectForm);
const addBtn = new AddBtnUI();
const projectAddBtn = addBtn.createAddTodoButton(projectForm);
console.log(projectAddBtn);
const projectList = document.querySelector(".project-list");
projectList.appendChild(projectAddBtn);
