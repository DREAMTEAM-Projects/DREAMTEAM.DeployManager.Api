import { PrismaClient } from "@prisma/client"
import DeployRepository from "../repository/deploy.repository"
import UpdateDeployUseCase from "../usecase/update/update-deploy.usecase"
import UpdateDeployController from "../presentation/update-deploy.controller"

export const makeUpdateDeployController = () => {
  const deployRepository = new DeployRepository(new PrismaClient())
  const updateDeployUseCase = new UpdateDeployUseCase(deployRepository)
  return new UpdateDeployController(updateDeployUseCase)
}