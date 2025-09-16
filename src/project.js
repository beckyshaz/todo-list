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
    titleInput.type = Text;
    titleInput.value = "Project Name";
    titleInput.style.color = "rgba(0, 0, 0, 0.4)";

    const descriptionInput = document.createElement("input");
    descriptionInput.value = "Description";
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