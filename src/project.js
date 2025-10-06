
import { format } from "date-fns";

class StoreProject {

    static instance = null;
    
    constructor() {

        if (StoreProject.instance) {
            return StoreProject.instance;
        }
        this.projects = [];
        StoreProject.instance = this;
    }

    addProject(project) {
        this.projects.push(project);

    } 

    getProjects() {
        return this.projects;
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
 
        if (handler && typeof handler.handle === "function") {
             this.addButton.addEventListener("click", (e) => handler.handle(e));
        }
 
        else if (handler && typeof handler === "function") {
             this.addButton.addEventListener("click", () =>  handler());
        }
        return this.addButton;
     };
     
 }


 export class TodosForm {
    constructor() {
        this.createTodoForm();
        this.bindTodoEvents();

        //this.form.style.display = "none";
    }
    createTodoForm() {
        
        this.todosForm = document.createElement("form");
        this.todosForm.className = "todo-form";
        this.todosForm.style.display = "none";

        this.titleTodoInput = document.createElement("input");
        this.titleTodoInput.type = "text";
        this.titleTodoInput.placeholder = "Visit my Grandmother together with my family";
        this.titleTodoInput.id = "todo-title";
        this.titleTodoInput.name = "todoTitle";
    
      /*  this.descriptionTodoInput = document.createElement("input");
        this.descriptionTodoInput.placeholder = "Description";
        this.descriptionTodoInput.style.color = "rgba(0, 0, 0, 0.4)";
        this.descriptionTodoInput.name = "todoDescription";
        this.descriptionTodoInput.id = "todo-description";*/
    
        this.dateInput = document.createElement("input");
        this.dateInput.type = "date";
        this.dateInput.id = "date";
        this.dateInput.name = "date";
    
    
        this.dateLabel = document.createElement("label");
        this.dateLabel.className = "date-label";
        this.dateLabel.setAttribute("for", "date");
        this.dateLabel.textContent = "Set date";
        
        this.datepickerDiv = document.createElement("div");
        this.datepickerDiv.className = "date-container";
        this.datepickerDiv.append(this.dateLabel, this.dateInput);
    
    
           
        this.priority1 = document.createElement("input");
        this.priority1.type = "checkbox";
        this.priority1.name = "priority1";
        this.priority1.id = "priority1";
    
        this.priority1label = document.createElement("label");
        this.priority1label.textContent = "very High";
        this.priority1label.setAttribute("for", "priority1");
    
        this.priority1Div = document.createElement("div");
        this.priority1Div.className = "priority1";
        this.priority1Div.append(this.priority1, this.priority1label);
    
    
        this.priority2 = document.createElement("input");
        this.priority2.type = "checkbox";
        this.priority2.name = "priority2";
        this.priority2.id = "priority2";
    
        this.priority2label = document.createElement("label");
        this.priority2label.textContent = "High";
        this.priority2label.setAttribute("for", "priority2");
    
        this.priority2Div = document.createElement("div");
        this.priority2Div.className = "priority2";
    
        this.priority2Div.append(this.priority2, this.priority2label);
    
        this.priority3 = document.createElement("input");
        this.priority3.type = "checkbox";
        this.priority3.name = "priority3";
        this.priority3.id = "priority3";
    
        this.priority3label = document.createElement("label");
        this.priority3label.textContent = "Medium";
        this.priority3label.setAttribute("for", "priority3");
    
        this.priority3Div = document.createElement("div");
        this.priority3Div.className = "priority3";
    
        this.priority3Div.append(this.priority3, this.priority3label);
    
        this.priority4 = document.createElement("input");
        this.priority4.type = "checkbox";
        this.priority4.name = "priority4";
        this.priority4.id = "priority4";
    
        this.priority4label = document.createElement("label");
        this.priority4label.textContent = "Low";
        this.priority4label.setAttribute("for", "priority4");
    
        this.priority4Div = document.createElement("div");
        this.priority4Div.className = "priority4";
    
        this.priority4Div.append(this.priority4, this.priority4label);

        this.prioritiesDiv = document.createElement("div");
        this.prioritiesDiv.textContent = "Priorities";
    
            
        this.prioritiesDiv.append(this.priority1Div, this.priority2Div, this.priority3Div, this.priority4Div );
    
        this.notesLabel = document.createElement("label");
        this.notesLabel.textContent = "Notes";
        
        this.todoNotes = document.createElement("textarea");
        this.todoNotes.name = "notes";
        this.todoNotes.rows = "10";
        this.todoNotes.cols = "50";

        this.todoNotesDiv = document.createElement("div");
        this.todoNotesDiv.className = "notes-div";
        this.todoNotesDiv.append(this.notesLabel, this.todoNotes);
    
        const submitTodo = document.createElement("button");
        submitTodo.innerHTML = "Submit";
        submitTodo.type = "submit";
        submitTodo.className = "submit-todo";
            
    
        const todoCancelButton = document.createElement("button");
        todoCancelButton.textContent = "Cancel";
        todoCancelButton.className = "cancel-todo";
        todoCancelButton.type = "button";

        this.todoButtonsDiv = document.createElement("div");
        this.todoButtonsDiv.className = "todo-buttons-div";
        this.todoButtonsDiv.append(todoCancelButton, submitTodo);

        this.todoFormDetailsDiv = document.createElement("div");
        this.todoFormDetailsDiv.className = "form-input-container";
    
    
        this.todoFormDetailsDiv.append(this.titleTodoInput, this.descriptionTodoInput,
            this.datepickerDiv, this.prioritiesDiv, this.todoNotesDiv, this.todoButtonsDiv);
            
        this.todosForm.appendChild(this.todoFormDetailsDiv);
            
        const todoFormContainer = document.querySelector(".todo-form-div");
    
        todoFormContainer.appendChild(this.todosForm);
    }

    bindTodoEvents() {
        const submitTodoBtn = document.querySelector(".submit-todo");
        submitTodoBtn.addEventListener("click", (e) => this.handleSubmitTodo(e));

        const cancelTodoBtn = document.querySelector(".cancel-todo");
        cancelTodoBtn.addEventListener("click", () => this.hideTodoForm());
    }


    handleSubmitTodo(e) {
        e.preventDefault();
        const todo  = new Todos(this.titleTodoInput.value, this.dateInput.value, this.todoNotes.value);
        const projectContents = document.querySelector(".contents");

        const currentProjectContainer = projectContents.children[0];

        const currentProjectId = currentProjectContainer.id;

        const storedProjects = new StoreProject();
        const projectList = storedProjects.getProjects();
        console.log(projectList);
        

        const currentProject = projectList.find((project) => project.id === currentProjectId);
        console.log(currentProject);

        currentProject.addTaskToProject(todo);

        //this.createAddTodoButton(projectContents);

        this.createTodo(currentProjectContainer, todo);
            
    }


    createTodo(parentElement, todo) {
       
        const title = todo.title;
        const date = todo.date;
        //const notes = todo.notes;

        const tododiv = document.createElement("div");
        const todoCheckListDiv = document.createElement("div");
        const todoCheckList = document.createElement("input");
        todoCheckList.type = "checkbox";
        todoCheckList.name = "todo";
        todoCheckList.id = todo.id;
        todoCheckList.textContent = title;



        const todoCheckListLabel = document.createElement("label");
        todoCheckListLabel.setAttribute("for", todo.id);
        todoCheckListLabel.textContent = todo.title;

        todoCheckListDiv.append(todoCheckList, todoCheckListLabel);

        const dateDiv = document.createElement("div");
        dateDiv.textContent = date;

        tododiv.append(todoCheckListDiv, dateDiv);

        parentElement.appendChild(tododiv);        

    }
    hideTodoForm() {
        this.todosForm.style.display = "none";
    }

    showTodoform() {
        this.todosForm.style.display = "block";
    }

    toggleTodoForm() {
        if (this.todosForm.style.display === "none") {
            this.showTodoform();
        }else{
            this.hideTodoForm();
        }
    }

    handle() {
        this.toggleTodoForm();
    }
}
    



 export class SelectMyProjects {

    constructor() {
        this.monitorProjects();
        //this.createAddTodoButton();
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
            const addBtn = this.createAddTodoButton();
            contentsContainer.appendChild(addBtn);
        });
    }

    createAddTodoButton() {
        const todoForm = new TodosForm();
        console.log(todoForm);
        const todoAddBtn = new AddBtnUI();
        const addTodoBtn = todoAddBtn.createAddTodoButton(todoForm);
        console.log(addTodoBtn);
        //const contentsContainer = document.querySelector(".contents");
        return addTodoBtn;
    }
}

    
/*function handleAddTodoButton () { 
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


