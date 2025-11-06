
import "./styles.css";


import { UIComponents } from "./UIComponents";

import { ProjectForm } from "./project";


const projectformInstance = new ProjectForm();

const projectForm = projectformInstance.getProjectForm();

const projectFormContainer = document.querySelector(".project-form-div");
projectFormContainer.appendChild(projectForm);

const projectFormHandlers = projectformInstance.getProjectFormHandlers();



const projectAddBtn = UIComponents.createAddButton(projectFormHandlers);

const myProjects = document.querySelector(".my-projects");
myProjects.appendChild(projectAddBtn);

UIComponents.showProjects();

UIComponents.addListenerToCompletedBtn();



