import { Todos } from "./todos";

import { StoreProject } from "./storeProject";

import { UIComponents } from "./UIComponents";

export class TodoFormHandlers {

    constructor(form) {
        this.form = form;
        this.bindTodoEvents();
        this.currentProjectId = null;
    }

    bindTodoEvents() {
            const submitTodoBtn = this.form.querySelector(".submit-todo");
            submitTodoBtn.addEventListener("click", (e) => this.handleSubmitTodo(e));
    
            const cancelTodoBtn = this.form.querySelector(".cancel-todo");
            cancelTodoBtn.addEventListener("click", () => this.hideTodoForm());
        }
    
    
        handleSubmitTodo(e) {
            e.preventDefault();

            if (!this.currentProjectId) {
                console.log("id not found");
            }
            const titleTodoInput = this.form.querySelector("#todo-title");
            const dateInput = this.form.querySelector("#date");
            const todoNotes = this.form.querySelector("#notes");
            const todoPriorityDiv = this.form.querySelector(".priority");
            console.log(todoPriorityDiv);



            const todo  = new Todos(titleTodoInput.value, dateInput.value, todoNotes.value);
            //const projectContents = document.querySelector(".contents");
            

            const todoPriority = this.getPriority(this.form, todo);

            console.log(todoPriority);

            //todo.setPriority(todoPriority);

            //projectContents.innerHTML = "";       

           // const currentProjectContainerChildren = projectContents.children;
            //console.log(currentProjectContainerChildren);
    
    
           // const currentProjectContainer = projectContents.children[0];
           // console.log(currentProjectContainer);
    
            const currentId = this.currentProjectId;
            console.log(currentId);
    
            const storedProjects = new StoreProject();
            const projectById = storedProjects.getProjectsByID(currentId);
            console.log(projectById);
            
    
        
    
            projectById.addTaskToProject(todo);

            storedProjects.updateProject(projectById);
    
            //this.createAddTodoButton(projectContents);
            
            const createdTodo = UIComponents.createTodo(todo, currentId);

            console.log(createdTodo);

            console.log(createdTodo.id);
            this.resetTodoForm();
            this.hideTodoForm();
                
        }

        setCurrentProjectId(projectId) {
            this.currentProjectId = projectId;
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

        getPriority(form, todo) {

            const checkedPriority = form.querySelector(`input[data-priority]:checked`);

            if (checkedPriority) {
                const priorityText = checkedPriority.dataset.priority;

                todo.setPriority(priorityText);
                return priorityText;
            }else {
                return null;
            }

        }
    

}
