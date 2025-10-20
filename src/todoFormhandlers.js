import { Todos } from "./todos";

import { StoreProject } from "./storeProject";

import { UIComponents } from "./UIComponents";

export class TodoFormHandlers {

    constructor(form) {
        this.form = form;
        this.bindTodoEvents();
    }

    bindTodoEvents() {
            const submitTodoBtn = this.form.querySelector(".submit-todo");
            submitTodoBtn.addEventListener("click", (e) => this.handleSubmitTodo(e));
    
            const cancelTodoBtn = this.form.querySelector(".cancel-todo");
            cancelTodoBtn.addEventListener("click", () => this.hideTodoForm());
        }
    
    
        handleSubmitTodo(e) {
            e.preventDefault();
            const titleTodoInput = this.form.querySelector("#todo-title");
            const dateInput = this.form.querySelector("#date");
            const todoNotes = this.form.querySelector("#notes");

            const todo  = new Todos(titleTodoInput.value, dateInput.value, todoNotes.value);
            const projectContents = document.querySelector(".contents");

            //projectContents.innerHTML = "";

            const currentProjectContainerChildren = projectContents.children;
            console.log(currentProjectContainerChildren);
    
    
            const currentProjectContainer = projectContents.children[0];
            console.log(currentProjectContainer);
    
            const currentProjectId = currentProjectContainer.id;
            console.log(currentProjectId);
    
            const storedProjects = new StoreProject();
            const projectById = storedProjects.getProjectsByID(currentProjectId);
            console.log(projectById);
            
    
        
    
            projectById.addTaskToProject(todo);

            storedProjects.updateProject(projectById);
    
            //this.createAddTodoButton(projectContents);
            
            const createdTodo = UIComponents.createTodo(todo, currentProjectId);

            console.log(createdTodo);

            console.log(createdTodo.id);
            this.resetTodoForm();
            this.hideTodoForm();
                
        }
    
    
        resetTodoForm() {
    
            this.form.reset();
        }
    
        hideTodoForm() {
            this.form.style.display = "none";
        }
    
        showTodoform() {
            this.form.style.display = "block";
        }
    
        toggleTodoForm() {
            if (this.form.style.display === "none") {
                this.showTodoform();
            }else{
                this.hideTodoForm();
            }
        }
    
        handle() {
            this.toggleTodoForm();
            this.resetTodoForm();
        }
    

}
