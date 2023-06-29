import ProjectAzureGateway from "../gateway/project-azure.gateway"
import ListProjectController from "../presentation/list-project.controller"
import ListProjectUseCase from "../usecase/list/list-project.usecase"

export const makeListProjectController = () => {
  const projectAzureGateway = new ProjectAzureGateway()
  const listProjectUseCase = new ListProjectUseCase(projectAzureGateway)
  return new ListProjectController(listProjectUseCase)
}