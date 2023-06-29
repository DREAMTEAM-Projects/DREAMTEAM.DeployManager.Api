import { Router } from 'express'
import { makeCreateTemplateController } from '../../factory/create-template-controller.factory'
import { routerAdapter } from '../../../@shared/adapters/router-adapter'

export default (router: Router): void => {
  router.post(
    '/template',
    routerAdapter(makeCreateTemplateController())
  )
}
