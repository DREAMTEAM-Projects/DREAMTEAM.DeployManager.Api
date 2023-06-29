import { Router } from 'express';
import CreateDeployController from '../../presentation/create-deploy.controller';
import CreateDeployUseCase from '../../usecase/create/create-deploy.usecase';
import DeployRepository from '../../repository/deploy.repository';
import { PrismaClient } from '@prisma/client'

const routes = Router();

const deployRepository = new DeployRepository(new PrismaClient())
const createDeployUseCase = new CreateDeployUseCase(deployRepository)
const createDeployController = new CreateDeployController(createDeployUseCase)

routes.post('/deploy', createDeployController.handle);

export default routes
