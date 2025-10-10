
import { TodosForm } from "./todos";
//import { CreateForm } from "./createForm";

export class UIComponents {
    
    static createAddButton(handler) {
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

    static createAddTodoButton() {
        const todoFormObject = new TodosForm();
        const handler = todoFormObject.getTodoFormHandlers();
        

        const todoform = todoFormObject.getTodoForm();
        const todoFormContainer = document.querySelector(".todo-form-div");
        todoFormContainer.appendChild(todoform);
        const addTodoBtn = this.createAddButton(handler);
        addTodoBtn.textContent = "Add tasks";
        addTodoBtn.className = "add-todoBtn";
        console.log(addTodoBtn);
        //const contentsContainer = document.querySelector(".contents");
        return addTodoBtn;
    }

    static createProject(project) {
        const myProjectDiv = document.createElement("div");
        myProjectDiv.className = "project-container";
        myProjectDiv.id = project.id;
        const titleH2 = document.createElement("h2");
        titleH2.textContent = project.title;
        const descriptionParag = document.createElement("p");
        descriptionParag.textContent = project.description;
        const myProjects = document.querySelector(".project-list");
        myProjectDiv.append(titleH2, descriptionParag);
        const copyCreatedProject = myProjectDiv.cloneNode(true);
       
        myProjects.appendChild(myProjectDiv);

        const contentsContainer = document.querySelector(".contents");
        contentsContainer.innerHTML = "";
        contentsContainer.appendChild(copyCreatedProject);
        const addTodoBtn = this.createAddTodoButton();
        contentsContainer.appendChild(addTodoBtn);
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

     static createTodo(parentElement, todo) {
       
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

    
}