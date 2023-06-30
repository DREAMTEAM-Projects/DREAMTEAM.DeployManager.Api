import { PrismaClient } from "@prisma/client"
import DeployRepository from "../repository/deploy.repository"
import ListDeployUseCase from "../usecase/list/list-deploy.usecase"
import ListDeployController from "../presentation/list-deploy.controller"

export const makeListDeployController = () => {
  const deployRepository = new DeployRepository(new PrismaClient())
  const createDeployUseCase = new ListDeployUseCase(deployRepository)
  return new ListDeployController(createDeployUseCase)
}