export class Todos {
    constructor (title,  dueDate=null, priority="low", notes="") {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.completed = false;
        this.id = new Date() + Math.random();
    }
}

export class TodosForm {
    constructor() {
        this.CreateForm.createTodoForm();
        this.bindTodoEvents();
    }
    
}