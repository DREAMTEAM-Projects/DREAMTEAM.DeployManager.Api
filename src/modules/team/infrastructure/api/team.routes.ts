import { Router } from 'express';
import { routerAdapter } from '../../../@shared/adapters/router-adapter';
import { makeListTeamController } from '../../factory/list-team-controller.factory';

export default (router: Router): void => {
  router.get(
    '/team/:projectName',
    routerAdapter(makeListTeamController())
  )
}

