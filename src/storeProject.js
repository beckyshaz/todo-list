

import { Project } from "./project";

import { Todos  } from "./todos";

import { UIComponents } from "./UIComponents";

export class StoreProject {
    
    constructor() {
        this.storageKey = "projects";
    }

    addProject(project) {
        const storedProjects = this.getProjects(this.storageKey);
        
        storedProjects.push(project);
        localStorage.setItem(this.storageKey, JSON.stringify(storedProjects));
    } 

    getProjects() {
        const storedProjects = localStorage.getItem(this.storageKey);
        if (!storedProjects) {
            return [];
        }
        const projectDataArray = JSON.parse(storedProjects);

        return projectDataArray.map((projectData) => {
            const projectInstance = new Project(projectData.title, projectData.description);

            projectInstance.id = projectData.id
            projectInstance.tasks = projectData.tasks.map((todo) => {
                const todoInstance = new Todos(todo.title,  todo.dueDate, todo.priority, todo.notes);
    
                todoInstance.id = todo.id;
                todoInstance.completed = todo.completed;
                return todoInstance;
            });

            return projectInstance;
        });  
    }


    clearProjets() {
        localStorage.clear();

       // Storage.removeItem();

       UIComponents.showProjects();
    }

    deleteProject(projectId) {
        const storedProject = this.getProjects();
        const updatedProjects = storedProject.filter((project) => project.id !== projectId)
        localStorage.setItem(this.storageKey, JSON.stringify(updatedProjects));
    }

    updateProject(updatedProject) {
        const projectArray = this.getProjects();
        const projectIndex = projectArray.findIndex((project) => project.id === updatedProject.id);

        if (projectIndex !== -1) {
            projectArray[projectIndex] = updatedProject;
            localStorage.setItem(this.storageKey, JSON.stringify(projectArray));
            
            console.log("project updated");
            return true;
           
        }else{
            console.log("project not found");
            return false;
        }
    }

    getProjectsByID(projectId) {
        const storedProjects = this.getProjects();
        const projectByID = storedProjects.find((p) => p.id === projectId);
        return projectByID;
    }
    
}
