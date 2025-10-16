import { Project } from "./project";

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
            projectInstance.tasks = projectData.tasks;

            return projectInstance;

        });
       
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
