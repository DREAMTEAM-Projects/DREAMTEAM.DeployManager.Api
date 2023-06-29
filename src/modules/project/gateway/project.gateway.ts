import Project from "../domain/entity/project.entity";

export interface ProjectGateway {
  list(): Promise<Project[]>
}