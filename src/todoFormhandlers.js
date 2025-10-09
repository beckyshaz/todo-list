export class TodoFormHandlers {
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
            this.resetTodoForm();
            this.hideTodoForm();
                
        }
    
    
        resetTodoForm() {
    
            this.todosForm.reset();
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
