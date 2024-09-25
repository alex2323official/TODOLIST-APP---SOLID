// whole list of project with todoiteams in it
export class TodoProject {
  constructor(project) {
    this.project = project;
  }

  static projectList = [];

  static addNewProject(projectName) {
    let tempName = new TodoProject(projectName);
    this.projectList.push(tempName);
  }
}
