
import { format } from "date-fns";

export class Project {
    constructor (title, description){

        this.title = title;
        this.description = description
    };
}

export function createProjectForm () {
    const projectForm = document.createElement("form");
    projectForm.className = "project-form";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = "Project Name";
    titleInput.id = "title"
    titleInput.name = "project-name";
    titleInput.style.color = "rgba(0, 0, 0, 0.4)";

    const descriptionInput = document.createElement("input");
    descriptionInput.value = "Description";
    descriptionInput.name = "project-description";
    descriptionInput.id = "project-description";
    descriptionInput.style.color = "rgba(0, 0, 0, 0.4)";
    descriptionInput.style.border = "none";

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-div";

    const submit = document.createElement("button");
    submit.innerHTML = "Submit";
    submit.type = "submit";

    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";

    buttonsDiv.append(cancelButton, submit);

    projectForm.append(titleInput, descriptionInput, buttonsDiv);

    


    const container = document.querySelector(".form-contents");

    container.appendChild(projectForm);



}

export class Todos extends Project{
    constructor (title, description, dueDate, priority, notes, checklist) {
        super(title, description);
        this.dueDate = dueDate;
        this.priority = priority;
        this.notes = notes;
        this.checklist = checklist;
    }
}

//const todo = new Todos("washing", "washing clothes is diffult but we manage", 13, "low", "done")


export function  createTodosForm () {
    const todosForm = document.createElement("form");
    const titleTodoInput = document.createElement("input");
    titleTodoInput.type = "text";
    titleTodoInput.value = "Visit my Grandmother together with my family";
    titleTodoInput.style.color = "rgba(0, 0, 0, 0.4)";

    const descriptionTodoInput = document.createElement("input");
    descriptionTodoInput.value = "Description";
    descriptionTodoInput.style.color = "rgba(0, 0, 0, 0.4)";
    descriptionTodoInput.style.border = "none";

    const dateDiv = document.createElement("div");
    dateDiv.className = "date-container";

    const dateInput = document.createElement("input");
    dateInput.type = "date";

    const currentDate = format(new Date(), "yyyy-MM-dd");
    console.log(currentDate);
    //dateInput.value = currentDate;

    dateInput.id = "mydate";
    dateInput.name = "date";

    //const currentDate = format(new Date(), "yyyy-MM-dd");
    //console.log(currentDate);

    const datepickerDiv = document.createElement("div");
    datepickerDiv.append(dateInput);

    const dateLabel = document.createElement("label");
    dateLabel.className = "date-label";
    dateLabel.setAttribute("for", "mydate");
    dateLabel.innerHTML = "Set date";

    const prioritiesDiv = document.createElement("div");
    prioritiesDiv.textContent = "Priorities";
    const priority1 = document.createElement("input");
    priority1.type = "checkbox";
    priority1.name = "priority1";
    priority1.id = "priority1";

    const priority1label = document.createElement("label");
    priority1label.textContent = "very High";
    priority1label.setAttribute("for", "priority1");

    const priority1Div = document.createElement("div");
    priority1Div.className = "priority1";

    priority1Div.append(priority1, priority1label);


    const priority2 = document.createElement("input");
    priority2.type = "checkbox";
    priority2.name = "priority2";
    priority2.id = "priority2";

    const priority2label = document.createElement("label");
    priority2label.textContent = "High";
    priority2label.setAttribute("for", "priority2");

    const priority2Div = document.createElement("div");
    priority2Div.className = "priority2";

    priority2Div.append(priority2, priority2label);

    const priority3 = document.createElement("input");
    priority3.type = "checkbox";
    priority3.name = "priority3";
    priority3.id = "priority3";

    const priority3label = document.createElement("label");
    priority3label.textContent = "Medium";
    priority3label.setAttribute("for", "priority3");

    const priority3Div = document.createElement("div");
    priority3Div.className = "priority3";

    priority3Div.append(priority3, priority3label);

    const priority4 = document.createElement("input");
    priority4.type = "checkbox";
    priority4.name = "priority4";
    priority4.id = "priority4";

    const priority4label = document.createElement("label");
    priority4label.textContent = "Low";
    priority4label.setAttribute("for", "priority4");

    const priority4Div = document.createElement("div");
    priority4Div.className = "priority4";

    priority4Div.append(priority4, priority4label);

    
    prioritiesDiv.append(priority1Div,priority2Div, priority3Div, priority4Div );

    const todoNotesDiv = document.createElement("div");
    todoNotesDiv.className = "notes-div";

    const notesLabel = document.createElement("label");
    notesLabel.textContent = "Notes";

    const todoNotes = document.createElement("textarea");
    todoNotes.name = "notes";
    todoNotes.rows = "10";
    todoNotes.cols = "50";

    todoNotesDiv.append(notesLabel, todoNotes);


    dateDiv.append(titleTodoInput, descriptionTodoInput,dateLabel, datepickerDiv, prioritiesDiv, todoNotesDiv);
    
    todosForm.appendChild(dateDiv);
    
    const container = document.querySelector(".form-contents");

    container.appendChild(todosForm);
   
}