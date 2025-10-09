export class CreateForm {
   static createTodoForm() {
        
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
            
        //const todoFormContainer = document.querySelector(".todo-form-div");
    
        //todoFormContainer.appendChild(this.todosForm);
        return this.todosForm;
    }

    static createProjectForm () {
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

            //const projectFormDiv = document.querySelector(".project-form-div");
           // projectFormDiv.appendChild(this.projectForm);
           return this.projectForm;
    }

}