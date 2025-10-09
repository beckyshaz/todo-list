
import { format } from "date-fns";

import { StoreProject } from "./storeProject";

import { ProjectFormHandlers } from "./projectFormHandlers";

import { CreateForm } from "./createForm";

export class Project {
    constructor (title, description=""){

        this.title = title;
        this.description = description;
        this.id = new Date() + Math.random();
        this.tasks = [];
    };

    addTaskToProject(task) {
        this.tasks.push(task);
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