import { Router } from 'express';
import { routerAdapter } from '../../../@shared/adapters/router-adapter';
import {
  makeCreateDeployController,
  makeDeleteDeployController,
  makeFindDeployController,
  makeUpdateDeployController,
  makeListDeployController
} from '../../factory';

export default (router: Router): void => {
  router.post(
    '/deploy',
    routerAdapter(makeCreateDeployController())
  )
  router.get(
    '/deploy/:deployId',
    routerAdapter(makeFindDeployController())
  )
  router.patch(
    '/deploy/:deployId',
    routerAdapter(makeUpdateDeployController())
  )
  router.delete(
    '/deploy/:deployId',
    routerAdapter(makeDeleteDeployController())
  )
  router.delete(
    '/deploy/list',
    routerAdapter(makeListDeployController())
  )
}

