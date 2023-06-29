import { PrismaClient } from "@prisma/client"
import DeployRepository from "../repository/deploy.repository"
import CreateDeployUseCase from "../usecase/create/create-deploy.usecase"
import CreateDeployController from "../presentation/create-deploy.controller"

export const makeCreateDeployController = () => {
  const deployRepository = new DeployRepository(new PrismaClient())
  const createDeployUseCase = new CreateDeployUseCase(deployRepository)
  return new CreateDeployController(createDeployUseCase)
}