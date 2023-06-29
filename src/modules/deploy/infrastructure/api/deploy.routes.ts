import { Router } from 'express';
import { routerAdapter } from '../../../@shared/adapters/router-adapter';
import { makeCreateDeployController } from '../../factory/create-deploy-controller.factory';

export default (router: Router): void => {
  router.post(
    '/deploy',
    routerAdapter(makeCreateDeployController())
  )
}

