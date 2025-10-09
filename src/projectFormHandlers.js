import { Project } from "./project";
import { StoreProject } from "./storeProject";
import { UIComponents } from "./UIComponents";

export class ProjectFormHandlers {

    constructor (form) {
        this.form = form;
        this.bindEvents();
    }
    bindEvents() {
    
        const submitProjectBtn = this.form.querySelector(".submit-project");
        const cancelProjectBtn = this.form.querySelector(".cancel.submit");
        submitProjectBtn.addEventListener("click", (e) => this.handleSubmit(e));
    
        cancelProjectBtn.addEventListener("click", () => this.hideForm());
    }
    
    handleSubmit(e) {
    
        e.preventDefault();

        const projectTitleInput = this.form.querySelector("#projectTitle");
        const projectDescriptionInput = this.form.querySelector("#projectDescription");
        
    
        const project = new Project(projectTitleInput.value, projectDescriptionInput.value);
        console.log(project);
        const storeProject = new StoreProject()
        storeProject.addProject(project);
        console.log(storeProject);
        UIComponents.createProject(project);
        this.hideForm();
    }
    
    hideForm() {
        this.form.style.display = "none";
    }
    
    showForm() {
        this.form.style.display = "block";
    }
    
    toggleForm() {
        if (this.form.style.display === "none") {
                this.showForm();
            }else {
                this.hideForm();
            }
        }
    
    
    resetForm() {
        this.form.reset();
    }
    
    handle() {
        this.toggleForm();
        this.resetForm();
    }
}
