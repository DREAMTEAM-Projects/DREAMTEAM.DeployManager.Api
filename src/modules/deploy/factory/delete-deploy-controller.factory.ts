import { PrismaClient } from "@prisma/client"
import DeployRepository from "../repository/deploy.repository"
import DeleteDeployUseCase from "../usecase/delete/delete-deploy.usecase"
import DeleteDeployController from "../presentation/delete-deploy.controller"

export const makeDeleteDeployController = () => {
  const deployRepository = new DeployRepository(new PrismaClient())
  const deleteDeployUseCase = new DeleteDeployUseCase(deployRepository)
  return new DeleteDeployController(deleteDeployUseCase)
}