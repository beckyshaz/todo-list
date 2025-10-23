import { CreateForm } from "./createForm";

import { TodoFormHandlers } from "./todoFormhandlers";

export class Todos {
    constructor (title,  dueDate=null, priority="low", notes="") {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
        this.id = crypto.randomUUID();
    }

    markTodoComplete(isCompleted){
        this.completed = isCompleted;
    }
}

export class TodosForm {
    constructor() {
        this.form = CreateForm.createTodoForm();
        this.handler = new TodoFormHandlers(this.form);
    }

    getTodoForm() {
        return this.form;
    }

    getTodoFormHandlers() {
        return this.handler;
    }
    
}
