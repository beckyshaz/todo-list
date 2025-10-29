
import { format } from "date-fns";

import { StoreProject } from "./storeProject";

import { ProjectFormHandlers } from "./projectFormHandlers";

import { CreateForm } from "./createForm";
import { Todos } from "./todos";

export class Project {
    constructor (title, description=""){

        this.title = title;
        this.description = description;
        this.id = crypto.randomUUID();
        this.tasks = [];
    };

    addTaskToProject(task) {
        this.tasks.push(task);
    }

    getProjectTodo() {
        return this.tasks;
    }

    deleteProjectTodo(todoId) {
        const todoArray = this.getProjectTodo();

        const todoIndex = todoArray.findIndex((todo) => todo.id === todoId) 
        if (todoIndex !== -1) {
            todoArray.splice(todoIndex, 1);
        }
        return todoArray;

    }

    getProjectTodoByID(todoID) {
        const todosArray = this.getProjectTodo();      

        const todos = todosArray.find((todo) => todo.id === todoID);

        if (!todos) {
            console.log("todo not found by that id");
        }

        return todos;

        
    }
}



export class ProjectForm {
    constructor() {

        this.form = CreateForm.createProjectForm();
        //console.log(this.form);
        this.handlers = new  ProjectFormHandlers(this.form);
    }

    getProjectForm() {
        return this.form;
    }

    getProjectFormHandlers() {
        return this.handlers;
    }
}

const form = new ProjectForm();
console.log(form);