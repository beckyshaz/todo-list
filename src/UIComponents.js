
import { StoreProject } from "./storeProject";
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
            
        this.contentsContainer = document.querySelector(".contents");
        this.contentsContainer.innerHTML = "";
        this.contentsContainer.appendChild(copyCreatedProject);
        const addTodoBtn = this.createAddTodoButton();
        this.contentsContainer.appendChild(addTodoBtn);

    }

    static showProjects() {

        const store = new StoreProject();

        const projectArray = store.getProjects();


        projectArray.forEach((project) => {
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
            
            this.contentsContainer = document.querySelector(".contents");
            this.contentsContainer.innerHTML = "";
            this.contentsContainer.appendChild(copyCreatedProject);
            const addTodoBtn = this.createAddTodoButton();
            this.contentsContainer.appendChild(addTodoBtn);
        })
        
    }

    static monitorProjects() {
        const myProjects = document.querySelector(".project-list");
        this.contentsContainer = document.querySelector(".contents");
    
        myProjects.addEventListener("click", (event) => {
            //const project = new Project(projectTitle, projectDescription);
            this.contentsContainer.innerHTML = "";

            const currentProject = event.target.parentElement;

            const copyContents = currentProject.cloneNode(true);
            console.log(currentProject);
            const currentProjectId = currentProject.id;

            const storedProjects = new StoreProject();
            console.log(storedProjects);
            
            const projectByID = storedProjects.getProjectsByID(currentProjectId);
            console.log(projectByID);

        
            if (projectByID) {
                this.contentsContainer.appendChild(copyContents);
                const addBtn = this.createAddTodoButton();
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
                this.createTodo(todo, projectId);
            });
            
        }else {
            console.log("no todos found");
        }
        
    }

     static createTodo(todo, projectID) {

        console.log(projectID);
       
        const title = todo.title;
        const date = todo.date;
        //const notes = todo.notes;

        const tododiv = document.createElement("div");

        tododiv.className = "todo-outer-container";
        const todoCheckListDiv = document.createElement("div");
        todoCheckListDiv.className = "todo-container";

        todoCheckListDiv.dataset.projectId = projectID;

        const todoCheckListLabel = document.createElement("label");
        todoCheckListLabel.className = "checkbox-label";
        todoCheckListLabel.setAttribute("for", todo.id);
        todoCheckListLabel.textContent = todo.title;


        const todoCheckList = document.createElement("input");
        todoCheckList.type = "checkbox";
        todoCheckList.className = "todo-item";
        todoCheckList.name = "todo";
        todoCheckList.id = todo.id;
        todoCheckList.textContent = title;



        todoCheckListDiv.append(todoCheckList, todoCheckListLabel);

        const dateDiv = document.createElement("div");
        dateDiv.textContent = date;

        tododiv.append(todoCheckListDiv, dateDiv);

        this.contentsContainer.appendChild(tododiv); 

        this.handleTodoChecklist(this.contentsContainer);
        
        return tododiv;

    }

    static handleTodoChecklist(container) {

        //const contentsContainer = document.querySelector(".contents");
    
        container.addEventListener("change", (event) => {
            if (event.target.type === "checkbox") { 
                if (event.target.checked) {

                    const finishedTodoCheckBoxDiv = event.target.parentElement;

                    console.log(finishedTodoCheckBoxDiv);


                    const projectDiv = finishedTodoCheckBoxDiv.closest(".project-container");
                    console.log(projectDiv);

                    const finishedTodoCheckBox = event.target;

                    console.log(finishedTodoCheckBox);

                    const finishedTodoCheckBoxID = finishedTodoCheckBox.id;

                    console.log(finishedTodoCheckBoxID);

                    const finishedTodoCheckboxCopy = finishedTodoCheckBoxDiv.cloneNode(true);

                    //container.remove(finishedTodoCheckBoxDiv);

                    
                    const projectId = finishedTodoCheckBoxDiv.dataset.projectId;


                    console.log(projectId);


                    const store = new StoreProject();
                    const storedProject = store.getProjectsByID(projectId);

                    console.log(storedProject);

                    const projectTodo = storedProject.getProjectTodoByID(finishedTodoCheckBoxID);

                    console.log(projectTodo);

                    projectTodo.markTodoComplete(event.target.checked);


                    store.updateProject(storedProject);

                    const completedTodosContainer = document.querySelector(".completed-todos");
                    completedTodosContainer.appendChild(finishedTodoCheckboxCopy);

                };
                //const finishedTodo = event.target.value;
               

            };
        });

    }

    
}