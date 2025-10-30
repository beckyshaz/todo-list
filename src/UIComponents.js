
import { id } from "date-fns/locale";
import { StoreProject } from "./storeProject";
import { TodosForm } from "./todos";
//import { CreateForm } from "./createForm";



export class UIComponents {

    static todoFormHandler = null;
    static todoForm = null;
    static contentsContainer = document.querySelector(".contents");
    
    
    static createAddButton(handler) {
        const addButton = document.createElement("button");
        addButton.className = "add-project";
        addButton.textContent = "Add Project";
 
        if (handler && typeof handler.handle === "function") {
             addButton.addEventListener("click", (e) => handler.handle(e));
        }
 
        else if (handler && typeof handler === "function") {
             addButton.addEventListener("click", () =>  handler());
        }
        return addButton;
     };

    static createTodoForm() {

        //const todoForm = null;
        //const todoFormHandler = null;

        //const exinstingForm = document.querySelector(".todo-form");

       // if (exinstingForm) {
          //  return [exinstingForm]
       // }

        const formAndHandlerArray = [];
        const todoFormObject = new TodosForm();
        if(todoFormObject) {
            const handler = todoFormObject.getTodoFormHandlers();

            const todoform = todoFormObject.getTodoForm();
            formAndHandlerArray.push(handler);
            formAndHandlerArray.push(todoform);
        }
        return formAndHandlerArray;
        
        
    }
   
    
    static createAddTodoButton(projectId) {
        
        if (!this.todoForm) {
            const formHandlerArray = this.createTodoForm();
            this.todoFormHandler = formHandlerArray[0];
            this.todoForm = formHandlerArray[1];


          /*  if (this.todoFormHandler.setCurrentProjectId) {
                this.todoFormHandler.setCurrentProjectId(projectId);
            }
            */
            const todoFormContainer = document.querySelector(".todo-form-div");
            todoFormContainer.appendChild(this.todoForm);
        }
        
        // Update handler with current project context
        if (this.todoFormHandler.setCurrentProjectId) {
            this.todoFormHandler.setCurrentProjectId(projectId);
        }
        
        const addTodoBtn = this.createAddButton(this.todoFormHandler);
        addTodoBtn.textContent = "Add tasks";
        addTodoBtn.className = "add-todoBtn";
        
        return addTodoBtn;
    }


    /*static createAddTodoButton() {

        const ex
        const formHandlerArray = this.createTodoForm();
        const handler = formHandlerArray[0];
        console.log(handler);
        const todoForm = formHandlerArray[1];
        console.log(todoForm);
        
        const todoFormContainer = document.querySelector(".todo-form-div");

        if (todoFormContainer) {
           const existingForm = todoFormContainer.querySelector(".todo-form");
           if (existingForm) {
            existingForm.style.display = existingForm.style.display === "block" ? "none" : "block";
           }else {
            console.log("todo form not found");
           }
            
        }
        todoFormContainer.appendChild(todoForm)


        const addTodoBtn = this.createAddButton(handler);
        addTodoBtn.textContent = "Add tasks";
        addTodoBtn.className = "add-todoBtn";
        console.log(addTodoBtn);
        //const contentsContainer = document.querySelector(".contents");
        return addTodoBtn;
    }

*/

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
            
        
        this.contentsContainer.innerHTML = "";
        this.contentsContainer.appendChild(copyCreatedProject);
        const addTodoBtn = this.createAddTodoButton(project.id);
        this.contentsContainer.appendChild(addTodoBtn);

       /* const store = new StoreProject();
        const currentProject = store.getProjectsByID(project.id);
        console.log(currentProject);

        const todo = currentProject.getProjectTodo();
        console.log(todo)

        this.showTodo(todo, currentProject);*/

    }

    static showProjects() {

        const store = new StoreProject();

        const projectArray = store.getProjects();


        projectArray.forEach((project) => {
            const myProjectDiv = document.createElement("div");
            myProjectDiv.className = "project-container";
            myProjectDiv.id = project.id;

           // const todoArray = project.getProjectTodo();
            const titleH2 = document.createElement("h2");
            titleH2.textContent = project.title;
            const descriptionParag = document.createElement("p");
            descriptionParag.textContent = project.description;
            const myProjects = document.querySelector(".project-list");
            myProjectDiv.append(titleH2, descriptionParag);
            //const copyCreatedProject = myProjectDiv.cloneNode(true);
            myProjects.appendChild(myProjectDiv);
            
          //  this.contentsContainer = document.querySelector(".contents");
          //  this.contentsContainer.innerHTML = "";
           // this.contentsContainer.appendChild(copyCreatedProject);
          //  const addTodoBtn = this.createAddTodoButton(project.id);
          //  this.contentsContainer.appendChild(addTodoBtn);
           // this.showTodo(todoArray, project.id);
           this.monitorProjects(myProjects);
        })
        
    }

    static monitorProjects(projectListContainer) {
        //const myProjects = 
        //document.querySelector(".project-list");
        this.contentsContainer = document.querySelector(".contents");
    
        projectListContainer.addEventListener("click", (event) => {
            //const project = new Project(projectTitle, projectDescription);
            this.contentsContainer.innerHTML = "";

            const currentProject = event.target.parentElement;

            console.log(currentProject);
            const currentProjectId = currentProject.id;

            const storedProjects = new StoreProject();
            console.log(storedProjects);
            
            const projectByID = storedProjects.getProjectsByID(currentProjectId);
            console.log(projectByID);

        
            if (projectByID) {
                const newProjectContainer = document.createElement("div");
                newProjectContainer.className = "project-container";
                newProjectContainer.dataset.projectId = projectByID.id;
                
                const titleH2 = document.createElement("h2");
                titleH2.textContent = projectByID.title;
                
                const descriptionParag = document.createElement("p");
                descriptionParag.textContent = projectByID.description;
    
                newProjectContainer.append(titleH2, descriptionParag);
                this.contentsContainer.appendChild(newProjectContainer);
                const addBtn = this.createAddTodoButton(currentProjectId);
                this.contentsContainer.appendChild(addBtn);

                const projectTodo = projectByID.getProjectTodo();
                console.log(projectTodo);


                this.showTodo(projectTodo, currentProjectId);


            }else {
            console.log("Project not found with ID:", currentProjectId);
        }

            

            //this.contentsContainer.appendChild(copyContents);
           // this.contentsContainer.appendChild(addBtn);
            

            //const TodoBtn = new AddBtnUI();
            //const addTodoBtn = TodoBtn.createAddTodoButton(todoForm);
            //addTodoBtn.classname = "add-todo";
            //addTodoBtn.textContent = "Add Todo";

           
        
        });
    }

    static showTodo(todoArray, projectId) {
        if (todoArray && todoArray.length > 0) {
            todoArray.forEach((todo) => { 
                if (todo.completed === false) {
                    this.createTodo(todo, projectId);
                }else {
                    this.showFinishedTodo(todo, projectId);
                }
                
            });
            
        }else {
            console.log("no todos found");
        }
        
    }

    static ApplyColorByPriority(priority, titleLabel) {
        if (priority === "Very High") {
            titleLabel.style.color = "red";
        }else if (priority === "High") {
            titleLabel.style.color = "green";
        }else if (priority === "Medium") {
            titleLabel.style.color = "purple";
        }else if (priority === "Low") {
            titleLabel.style.color ="yellow";
        }else {
            titleLabel.style.color = "black";
        }
    }

     static createTodo(todo, projectID) {

        console.log(projectID);
       
        const title = todo.title;

        console.log(title);
        const date = todo.dueDate;
        const priority = todo.priority;

        console.log(priority);
        //const notes = todo.notes;
        

        console.log(date);

        const tododiv = document.createElement("div");

        tododiv.className = "todo-outer-container";
        const todoCheckListDiv = document.createElement("div");
        todoCheckListDiv.className = "todo-container";

        todoCheckListDiv.dataset.projectId = projectID;

        const todoCheckList = document.createElement("input");
        todoCheckList.type = "checkbox";
        todoCheckList.className = "todo-item";
        todoCheckList.name = "todo";
        todoCheckList.id = todo.id;
        todoCheckList.textContent = todo.title;
        todoCheckList.dataset.todoId = todo.id;


        const todoCheckListLabel = document.createElement("label");
        todoCheckListLabel.className = "checkbox-label";
        todoCheckListLabel.setAttribute("for", todo.id);
        todoCheckListLabel.textContent = title;
        this.ApplyColorByPriority(priority, todoCheckListLabel);

        
        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-todo";
        deleteButton.dataset.todoId = todo.id;
        deleteButton.textContent = "delete";

        const editButton = document.createElement("button");
        editButton.className = "edit-todo";
        editButton.textContent = "Edit";
        editButton.dataset.editedTodoId = todo.id;
        editButton.dataset.editedProjectId = projectID;
        


        const buttonsOuterDiv = document.createElement("div");
        buttonsOuterDiv.append(deleteButton, editButton)
        
        

        todoCheckListDiv.append(todoCheckList, todoCheckListLabel, buttonsOuterDiv);

        deleteButton.addEventListener("click", (event) => {
            event.stopPropagation();
            if (event.currentTarget) {
                const todoID = event.currentTarget.dataset.todoId;
                const store = new StoreProject();
                
                const currentProject = store.getProjectsByID(projectID);
                
                
                const todoArray = currentProject.deleteProjectTodo(todoID);
                store.updateProject(currentProject);
                this.contentsContainer.innerHTML = "";
                this.showTodo(todoArray, projectID);

            }
            
        });

        editButton.addEventListener("click", (event) => {
            if (event.currentTarget) {
                event.stopPropagation();

                //const todoId = event.currentTarget.dataset.todoId;
                
                this.todoForm.style.display = "block";
                this.todoForm.dataset.editMode = "true";
                this.todoForm.dataset.editedTodoId = todo.id;
                const todoTitle = this.todoForm.querySelector("#todo-title");
                todoTitle.value = todoCheckListLabel.textContent;
                console.log(todoTitle.value);

                //const currentTodo = this.todoForm.

            }
        })



        const dateDiv = document.createElement("div");

        dateDiv.textContent = date;

        tododiv.append(todoCheckListDiv, dateDiv);

        this.contentsContainer.appendChild(tododiv); 

        this.handleTodoChecklist(this.contentsContainer);
        
        return tododiv;

    }

    static showFinishedTodo(todo, projectId) {
        
        const finishedTodoContainer = document.createElement("div");
        finishedTodoContainer.dataset.projectId = projectId;
        finishedTodoContainer.dataset.todoId = todo.id;
        const todoCheckListLabel = document.createElement("label");
        todoCheckListLabel.className = "complete-todo-label";
        todoCheckListLabel.setAttribute("for", todo.id);
        todoCheckListLabel.textContent = todo.title;
                
                
        const todoCheckList = document.createElement("input");
        todoCheckList.type = "checkbox";
        todoCheckList.className = "todo-item";
        todoCheckList.name = "todo";
        todoCheckList.id = todo.id;
        todoCheckList.checked = true;
                        
        todoCheckList.dataset.todoId = todo.id;

        finishedTodoContainer.append(todoCheckList, todoCheckListLabel);

        const completedTodosContainer = document.querySelector(".completed-todos");
        console.log(completedTodosContainer);
        if (completedTodosContainer) {
            const existingTodo = completedTodosContainer.querySelector(`[data-todo-id="${todo.id}"]`);

            console.log(existingTodo);

            if (!existingTodo) {
                completedTodosContainer.appendChild(finishedTodoContainer);
            }else {
                console.log("todo already exits");
            }
        }else{
            console.log("completed todos container not found");
        }
        
    
    }

    static handleTodoChecklist(container) {

        //const contentsContainer = document.querySelector(".contents");
    
        container.addEventListener("change", (event) => {
            if (event.target.type === "checkbox") { 
                if (event.target.checked) {

                    const finishedTodoCheckBoxDiv = event.target.parentElement;

                    console.log(finishedTodoCheckBoxDiv);


                    const finishedTodoCheckBox = event.target;

                    console.log(finishedTodoCheckBox);

                    const finishedTodoCheckBoxID = finishedTodoCheckBox.id;

                    console.log(finishedTodoCheckBoxID);

                    const todoOuterContainerDiv = finishedTodoCheckBoxDiv.closest(".todo-outer-container");

                    todoOuterContainerDiv.remove();

                    
                    const projectId = finishedTodoCheckBoxDiv.dataset.projectId;
                

                    console.log(projectId);

                    const store = new StoreProject();
                    const storedProject = store.getProjectsByID(projectId);

                    console.log(storedProject);

                    const projectTodo = storedProject.getProjectTodoByID(finishedTodoCheckBoxID);

                    console.log(projectTodo);

                    projectTodo.markTodoComplete(event.target.checked);


                    store.updateProject(storedProject);

                    
                    this.showFinishedTodo(projectTodo, projectId);

                };
                //const finishedTodo = event.target.value;
               

            };
        });

    }

    
}