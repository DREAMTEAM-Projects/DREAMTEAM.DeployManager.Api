import { Router } from 'express';
import { makeCreateDocumentController } from '../../factory/create-document-controller.factory';
import { makeDeleteDocumentController } from '../../factory/delete-document-controller.factory';

const routes = Router()

routes.post('/', makeCreateDocumentController().handle)
routes.delete('/:document', makeDeleteDocumentController().handle)

export default routes
