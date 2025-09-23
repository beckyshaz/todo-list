
import "./styles.css";

import { handleTodoForm } from "./project";

import { Todos } from "./project";

import { createProjectForm } from "./project";

import { createTodosForm } from "./project";

import { listProjects } from "./project";

import { handleProjectCancelButton } from "./project";

import { handleAddProjectBtn } from "./project";

import { handleSubmitTodo } from "./project";

import { showMyProjects } from "./project";

//const project = new Project("Love", "love is a beautiful thing when founded"); 
//console.log(project);

const todo = new Todos("washing", "washing clothes is diffult but we manage", 13, "low", "done");
console.log(todo);

//createProjectForm();

//createTodosForm();

//listProjects();

//handleProjectCancelButton()
//handleAddTodoButton()

//handleSubmitTodo();

//handleTodoForm();

handleAddProjectBtn();

showMyProjects();