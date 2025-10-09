export class ProjectUIComponents {
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
        contentsContainer.appendChild(copyCreatedProject);
        
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

}