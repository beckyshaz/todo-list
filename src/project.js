
import { format } from "date-fns";

export class Project {
    constructor (title, description){

        this.title = title;
        this.description = description;
    };

    createAddTodoButton() {
        const addTodoButton = document.createElement("button");
        addTodoButton.className = "add-todo";
        addTodoButton.innerHTML = "add Todo";

        const container = document.querySelector(".project-contents");

        container.appendChild(addTodoButton);
        //todoButton.addEventListener("click", createProjectForm);
    }
}

/*export function handleProjectCancelButton() {

    const projectcancelbutton = document.querySelector("cancel-project");
        projectcancelbutton.addEventListener("click", () => {
            const projectForm = document.querySelector(".project-form");
            alert("You unsaved details will be discarded");
            projectForm.style.display = "none";
        })
}*/

export function getProjectInfo() {
    const projectForm = document.querySelector(".project-form");
    projectForm.addEventListener("submit", (event) => { 
        event.preventDefault();
        alert("Details submitted successfully");

        //const project = new Project()

        const titleInput = document.getElementById("title");
        const projectTitle = titleInput.value;

        const descriptionInput = document.getElementById("project-description");
        const projectDescription = descriptionInput.value;

        console.log(projectTitle);
        console.log(projectDescription);

        projectForm.style.display = "none";

        const project = new Project(projectTitle, projectDescription);

        //project.createAddTodoButton();

        //const addTodoButton = document.querySelector(bu)

        console.log(project);

        const projectTitleDiv = document.createElement("div");
        projectTitleDiv.innerHTML = `
        <h1>${projectTitle}</h1>
        <p>${projectDescription}</p>
        `;

        const container = document.querySelector(".project-contents");

        container.appendChild(projectTitleDiv);

        project.createAddTodoButton();
        handleAddTodoButton();

        //const addTodoButton = document.querySelector(bu)


    })



}

function handleAddTodoButton () { 
    const addTodoButton = document.querySelector(".add-todo");
    addTodoButton.addEventListener("click", () => {
        createTodosForm();
        handleTodoForm();
    });
}

function handleTodoForm() {
    //const todoFormContiner = document.querySelector(".todo-form-div");
    const todoForm = document.querySelector(".todo-form");
    if (!todoForm){
        return;
    }

    const cancelTodoBtn = document.querySelector(".cancel-todo");
    cancelTodoBtn.addEventListener("click", () => {
        todoForm.style.display = "none";
    });
    
    const submitTodoBtn = document.querySelector(".submit-todo");
    submitTodoBtn.addEventListener("click", (event) => {
        event.preventDefault();
        alert("Details submitted successfully");
        const todoTitleInput = document.getElementById("todo-title");
        const todoTitle = todoTitleInput.value;
            
                    
        const todoDescriptionInput = document.getElementById("todo-description");
                    
        const todoDescription =todoDescriptionInput.value;
            
        console.log(todoTitle);
        console.log(todoDescription);
            
        const todoTitleDiv = document.createElement("div");
        todoTitleDiv.innerHTML = 
        `
        <h1>${todoTitle}</h1>
        <p>${todoDescription}</p>
        `;
        
        todoForm.style.display = "none";
            
        const container = document.querySelector(".project-contents");
            
        container.appendChild(todoTitleDiv);
    });

    todoForm.style.display = "block";

};

export function createProjectForm () {
    const projectForm = document.createElement("form");
    projectForm.className = "project-form";
    const titleInput = document.createElement("input");
    titleInput.type = "text";
    titleInput.value = "Project Name";
    titleInput.className = "project-name";
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
    submit.className = "submit-project";

    const cancelButton = document.createElement("button");
    cancelButton.innerHTML = "Cancel";
    cancelButton.classList = "cancel-project";

    buttonsDiv.append(cancelButton, submit);

    projectForm.append(titleInput, descriptionInput, buttonsDiv);

    


    const container = document.querySelector(".project-form-div");

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
    const todosForm = document.querySelector(".todo-form");

    if (!todosForm) {
        const todosForm = document.createElement("form");
        todosForm.className = "todo-form";
        const titleTodoInput = document.createElement("input");
        titleTodoInput.type = "text";
        titleTodoInput.value = "Visit my Grandmother together with my family";
        titleTodoInput.style.color = "rgba(0, 0, 0, 0.4)";
        titleTodoInput.id = "todo-title";

        const descriptionTodoInput = document.createElement("input");
        descriptionTodoInput.value = "Description";
        descriptionTodoInput.style.color = "rgba(0, 0, 0, 0.4)";
        descriptionTodoInput.style.border = "none";
        descriptionTodoInput.id = "todo-description";

        const featuresContainer = document.createElement("div");
        featuresContainer.className = "todo-features-container";

        const dateInput = document.createElement("input");
        dateInput.type = "date";

        //const currentDate = format(new Date(), "yyyy-MM-dd");
        //console.log(currentDate);
        //dateInput.value = currentDate;

        dateInput.id = "mydate";
        dateInput.name = "date";

        //const currentDate = format(new Date(), "yyyy-MM-dd");
        //console.log(currentDate);

        const dateLabel = document.createElement("label");
        dateLabel.className = "date-label";
        dateLabel.setAttribute("for", "mydate");
        dateLabel.innerHTML = "Set date";
        
        
        const datepickerDiv = document.createElement("div");
        datepickerDiv.append(dateLabel,dateInput);


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

        const todoButtonsDiv = document.createElement("div");
        todoButtonsDiv.className = "todo-buttons-div";

        const submitTodo = document.createElement("button");
        submitTodo.innerHTML = "Submit";
        submitTodo.type = "submit";
        submitTodo.className = "submit-todo";
        

        const todoCancelButton = document.createElement("button");
        todoCancelButton.innerHTML = "Cancel";
        todoCancelButton.className = "cancel-todo";
        todoCancelButton.type = "button";

        todoButtonsDiv.append(todoCancelButton, submitTodo);



        featuresContainer.append(titleTodoInput, descriptionTodoInput, datepickerDiv, prioritiesDiv, todoNotesDiv, todoButtonsDiv);
        
        todosForm.appendChild(featuresContainer);
        
        const container = document.querySelector(".todo-form-div");

        container.appendChild(todosForm);
    }
        
    //handleSubmitTodo();
    //handleCancelTodo();
   
}


//export function handleSubmitTodo() {
   
//}

//handleSubmitTodo()

/*export function handleAddTodoButton() {
    const addTodoButton = document.querySelector(".add-todo");
    addTodoButton.addEventListener("click", createTodosForm);

}*/

/*function handleCancelTodo() {
    const todoForm = document.querySelector(".todo-form");
    const cancelTodoBtn = document.querySelector(".cancel-todo");
    //const inputs = todoForm.querySelectorAll("input, textarea");
    //const todoFormContiner = document.querySelector(".cancel-todo");
    cancelTodoBtn.addEventListener("click", () => {

            todoForm.style.display = "none";
        })
}*/
/*
function handleTodoForm() {
    const todoFormContiner = document.querySelector(".todo-form-div");
    const todoForm = document.querySelector(".todo-form");
    todoFormContiner.addEventListener("click", (event) => {
        if (event.target.className === "cancel-todo") {
            todoForm.reset();
            todoForm.style.display = "none";
        }
        else if (event.target.className === "submit-todo") {
            const todoForm = document.querySelector(".todo-form");

            const submitTodoBtn = document.querySelector(".submit-todo");
            submitTodoBtn.addEventListener("click", (event) => {
                event.preventDefault();
                alert("Details submitted successfully");
            
                const todoTitleInput = document.getElementById("todo-title");
                const todoTitle = todoTitleInput.value;
            
                    
                const todoDescriptionInput = document.getElementById("todo-description");
                    
                const todoDescription =todoDescriptionInput.value;
            
                console.log(todoTitle);
                console.log(todoDescription);
            
                const todoTitleDiv = document.createElement("div");
                todoTitleDiv.innerHTML = 
                `
                <h1>${todoTitle}</h1>
                <p>${todoDescription}</p>
                `;
        
                todoForm.style.display = "none";
            
                const container = document.querySelector(".project-contents");
            
                container.appendChild(todoTitleDiv);
                
            })
        }
    })
     
}*/