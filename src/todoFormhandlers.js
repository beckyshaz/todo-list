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

            if(this.form.dataset.editMode === "true") {
                const editedTitleTodoInput = this.form.querySelector("#todo-title");
                const editedDateInput = this.form.querySelector("#date");
                const editedTodoNotes = this.form.querySelector("#notes");
                const editedTodoPriorityDiv = this.form.querySelector(".priority");
                console.log(editedTodoPriorityDiv);
                const editedTodo = new Todos(editedTitleTodoInput.value, editedDateInput.value, editedTodoNotes.value);
                const oldTodoId = this.form.dataset.editedTodoId;
                console.log(oldTodoId);
                const editedProjectId = this.currentProjectId;
                console.log(editedProjectId);

                const projectContents = document.querySelector(".contents");

            
                const editedTodoLabel = projectContents.querySelector(`.checkbox-label[data-todo-id="${oldTodoId}"]`);
                const editedPriority = this.getPriority(this.form, editedTodo);
                console.log(editedTodoLabel);
                editedTodoLabel.textContent = editedTitleTodoInput.value;
                UIComponents.applyColorByPriority(editedPriority, editedTodoLabel)

                const editedDate = projectContents.querySelector(`.todo-duedate[data-todo-id="${oldTodoId}"]`);
                editedDate.textContent = editedDateInput.value;

                const store = new StoreProject();
                const editedProjectById = store.getProjectsByID(editedProjectId);
                console.log(editedProjectById);
                
        
            
        
                editedProjectById.editProjectTodo(oldTodoId, editedTodo);
    
                store.updateProject(editedProjectById);

            

                //projectContents.innerHTML = "";
               // UIComponents.showTodo(editedTodoArray, editedProjectId);

                this.form.dataset.editMode = "false";
                delete this.form.dataset.editedTodoId;
                this.resetTodoForm();
                this.hideTodoForm();
                return;

        
                
            }

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
