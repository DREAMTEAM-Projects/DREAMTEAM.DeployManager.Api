import { Router } from 'express';
import { routerAdapter } from '../../../@shared/adapters/router-adapter';
import { makeListProjectController } from '../../factory/list-project-controller.factory';

export default (router: Router): void => {
  router.get(
    '/project',
    routerAdapter(makeListProjectController())
  )
}

