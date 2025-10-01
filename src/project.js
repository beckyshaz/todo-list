
import { format } from "date-fns";

class StoreProject {
    
    constructor() {
        this.projects = [];
    }

    addProject(project) {
        this.projects.push(project);

    } 
}

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

const todo = new Todos("loving myself");
console.log (todo);

export class ProjectForm {
    constructor() {

        this.createProjectForm();

        //this.projectTitleInput = this.ProjectForm.querySelector("#projectTitle");
        //this.projectDescriptionInput = this.form.querySelector("#projectDescription");

        this.bindEvents();
    }

    createProjectForm () {
        this.projectForm = document.createElement("form");
        this.projectForm.className = "project-form";
        this.projectForm.style.display = "none";

        
        this.projectTitleInput = document.createElement("input");
        this.projectTitleInput.type = "text";
        this.projectTitleInput.id = "projectTitle";
        this.projectTitleInput.placeholder = "Project Title";

    
        this.projectDescriptionInput = document.createElement("input");
        this.projectDescriptionInput.id = "projectDescription";
        this.projectDescriptionInput.placeholder = "Project Description";

            
        const submitBtn = document.createElement("button");
        submitBtn.type = "button";
        submitBtn.className = "submit-project";
        submitBtn.textContent = "Submit";

        
        const cancelBtn = document.createElement("button");
        cancelBtn.type = "button";
        cancelBtn.className = "cancel submit";
        cancelBtn.textContent = "Cancel";

            
        this.projectForm.append(
                this.projectTitleInput,
                this.projectDescriptionInput,
                submitBtn,
                cancelBtn
            );

            const projectFormDiv = document.querySelector(".project-form-div");
            projectFormDiv.appendChild(this.projectForm);
    }

    bindEvents() {
        const submitProjectBtn = this.projectForm.querySelector(".submit-project");
        const cancelProjectBtn = this.projectForm.querySelector(".cancel.submit");
        submitProjectBtn.addEventListener("click", (e) => this.handleSubmit(e));

        cancelProjectBtn.addEventListener("click", () => this.hideForm());

    }

    handleSubmit(e) {

        e.preventDefault();

        const project = new Project(this.projectTitleInput.value, this.projectDescriptionInput.value);
        console.log(project);
        const storeProject = new StoreProject()
        storeProject.addProject(project);
        console.log(storeProject);
        this.createProject(project);
        this.hideForm();
    }

    createProject(project) {
        const myProjectDiv = document.createElement("div");
        myProjectDiv.className = "project-container";
        myProjectDiv.id = project.id;
        const titleH2 = document.createElement("h2");
        titleH2.textContent = project.title;
        const descriptionParag = document.createElement("p");
        descriptionParag.textContent = project.description;
        const myProjects = document.querySelector(".project-list");
        myProjectDiv.append(titleH2, descriptionParag);
        myProjects.appendChild(myProjectDiv);
        
    }

    hideForm() {
        this.projectForm.style.display = "none";
    }

    showForm() {
        this.projectForm.style.display = "block";
    }

    toggleForm() {
        if (this.projectForm.style.display === "none") {
            this.showForm();
        }else {
            this.hideForm();
        }
    }

    
    resetForm() {
        this.projectForm.reset();
    }

    handle() {
        this.toggleForm();
        this.resetForm();
    }

}

export class AddBtnUI {
    constructor() {
        this.createAddTodoButton();
    }
    createAddTodoButton(handler) {
        this.addButton = document.createElement("button");
        this.addButton.className = "add-project";
        this.addButton.textContent = "Add Project";
     
         //const container = document.querySelector(".project-contents");
     
         //container.appendChild(addTodoButton);
         //todoButton.addEventListener("click", createProjectForm);
 
        if (handler && typeof handler.handle === "function") {
             this.addButton.addEventListener("click", (e) => handler.handle(e));
        }
 
        else if (handler && typeof handler === "function") {
             this.addButton.addEventListener("click", () =>  handler());
        }
        return this.addButton;
     };
     
 }

 export class SelectMyProjects {

    constructor() {
        this.monitorProjects();
    }
    monitorProjects() {
        const myProjects = document.querySelector(".project-list");
        const contentsContainer = document.querySelector(".contents");
    
        myProjects.addEventListener("click", (event) => {
            //const project = new Project(projectTitle, projectDescription);
            contentsContainer.innerHTML = "";

            const copyContents = event.target.parentElement.cloneNode(true);

            contentsContainer.appendChild(copyContents);
            //const TodoBtn = new AddBtnUI();
            //const addTodoBtn = TodoBtn.createAddTodoButton(todoForm);
            //addTodoBtn.classname = "add-todo";
            //addTodoBtn.textContent = "Add Todo";

        })
    }
}

 
 /*export class ShowForm {

    static showForm(handler) {
        if (handler && typeof handler === "function") {
            handler();
        }
        else if (handler && typeof handler.handle === "function") {
            handler.handle();
        }
    }
}*/

/*export class HandleProjectForm {
    constructor (projectForm) {
        this.projectForm = projectForm;
    }

    handleProjectForm() {
        //const projectForm = document.querySelector(".project-form");
        if (!this.projectForm) {
            return;
        }
        const submitProjectBtn = document.querySelector(".submit-project");
        const cancelProjectBtn = document.querySelector(".cancel-project");
        
        submitProjectBtn.addEventListener("click", (event) => { 
            event.preventDefault();
            alert("Details submitted successfully");
                    
            this.projectForm.style.display = "none";
                    
           //const myProjects = document.querySelector(".my-projects");
            myProjects.appendChild(projectTitleDiv);
        });
        
        cancelProjectBtn.addEventListener("click", () => {
            this.projectForm.style.display = "none";
        });
    }
}

//project = new ProjectUi()
/*export function handleProjectCancelButton() {

    const projectcancelbutton = document.querySelector("cancel-project");
        projectcancelbutton.addEventListener("click", () => {
            const projectForm = document.querySelector(".project-form");
            alert("You unsaved details will be discarded");
            projectForm.style.display = "none";
        })
}*/

    

/*export function handleAddProjectBtn() {
    const addProjectBtn = document.querySelector(".add-project");
    addProjectBtn.addEventListener("click", () => {
        createProjectForm();
    });
}

function handleAddTodoButton () { 
    const addTodoButton = document.querySelector(".add-todo");
    addTodoButton.addEventListener("click", () => {
        createTodosForm();
        //handleTodoForm();
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
        todoTitleDiv.className = "todo-title-container";
        todoTitleDiv.innerHTML = `
        <input type=checkbox value=${todoTitle} name=todoTitle id=todoTitle>
        <label for=todoTitle> ${todoTitle} </label> 
        <h3>${todoDescription}</h3>`;
        todoTitleDiv.style.backgroundColor = "yellow";
        
        todoForm.style.display = "none";
            
        const container = document.querySelector(".project-contents");
            
        container.appendChild(todoTitleDiv);
        handleTodoCheckbox();
    });

};


function handleTodoCheckbox() {

    const container = document.querySelector(".project-contents");
    container.addEventListener("change", (event) => {
        if (event.target.checked) {
            const todoTitleContainer = event.target.parentElement;
            const completedTodoDiv = document.querySelector(".completed-todos");
            completedTodoDiv.appendChild(todoTitleContainer);
        }
    })
}


   
const projectForm = new ProjectForm();
const handleprojectform = new HandleProjectForm(projectForm);
handleprojectform.handleProjectForm();

*/



//const todo = new Todos("washing", "washing clothes is diffult but we manage", 13, "low", "done")


/*export function  createTodosForm () {
    let todosForm = document.querySelector(".todo-form");
    //todosForm.style.display = "block";

    if (!todosForm) {
        todosForm = document.createElement("form");
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

        handleTodoForm();
        
    }
    todosForm.style.display = "block";
}
*/

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


