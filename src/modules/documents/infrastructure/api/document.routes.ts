import { Router } from 'express';
import { makeCreateDocumentController } from '../../factory/create-document-controller.factory';
import { makeDeleteDocumentController } from '../../factory/delete-document-controller.factory';
import { routerAdapter } from '../../../@shared/adapters/router-adapter';

export default (router: Router): void => {
  router.post(
    '/document',
    routerAdapter(makeCreateDocumentController())
  )
  router.delete(
    '/:document',
    routerAdapter(makeDeleteDocumentController())
  )
}
