
import "./styles.css";

import { Project } from "./project";

import { Todos } from "./project";

import { createProjectForm } from "./project";

import { createTodosForm } from "./project";

const project = new Project("Love", "love is a beautiful thing when founded"); 
console.log(project);

const todo = new Todos("washing", "washing clothes is diffult but we manage", 13, "low", "done");
console.log(todo);

createProjectForm();

createTodosForm();