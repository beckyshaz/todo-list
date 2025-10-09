export class StoreProject {

    static instance = null;
    
    constructor() {

        if (StoreProject.instance) {
            return StoreProject.instance;
        }
        this.projects = [];
        StoreProject.instance = this;
    }

    addProject(project) {
        this.projects.push(project);

    } 

    getProjects() {
        return this.projects;
    }
    
}
