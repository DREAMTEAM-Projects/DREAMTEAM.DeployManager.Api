import { Router } from 'express'
import { makeCreateTemplateController, makeUpdateTemplateController, makeListTemplateController } from '../../factory'
import { routerAdapter } from '../../../@shared/adapters/router-adapter'

export default (router: Router): void => {
  router.post(
    '/template',
    routerAdapter(makeCreateTemplateController())
  )
  router.patch(
    '/template/:templateId',
    routerAdapter(makeUpdateTemplateController())
  )
  router.get(
    '/template/:authorId',
    routerAdapter(makeListTemplateController())
  )
}
