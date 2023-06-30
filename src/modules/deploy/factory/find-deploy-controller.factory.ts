import { PrismaClient } from "@prisma/client"
import DeployRepository from "../repository/deploy.repository"
import FindDeployUseCase from "../usecase/find/find-deploy.usecase"
import FindDeployController from "../presentation/find-deploy.controller"

export const makeFindDeployController = () => {
  const deployRepository = new DeployRepository(new PrismaClient())
  const findDeployUseCase = new FindDeployUseCase(deployRepository)
  return new FindDeployController(findDeployUseCase)
}