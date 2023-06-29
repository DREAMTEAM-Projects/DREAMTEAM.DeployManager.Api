import { PrismaClient } from '@prisma/client';
import { Router } from 'express';
import CreateDocumentController from '../../presentation/create-document.controller';
import DocumentRepository from '../../repository/document.repository';
import CreateDeployUseCase from '../../usecase/create/create-deploy.usecase';

const routes = Router();

const deployRepository = new DocumentRepository(new PrismaClient())
const createDeployUseCase = new CreateDeployUseCase(deployRepository)
const createDeployController = new CreateDocumentController(createDeployUseCase)

routes.post('/documents', createDeployController.handle);

export default routes
