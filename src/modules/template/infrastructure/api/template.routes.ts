import { Router } from 'express'
import { routerAdapter } from '../../../@shared/adapters/router-adapter'
import {
  makeCreateTemplateController,
  makeListTemplateController,
  makeUpdateTemplateController
} from '../../factory'
import { makeDeleteTemplateController } from '../../factory/delete-template-controller.factory'

export default (router: Router): void => {
  router.post('/template', routerAdapter(makeCreateTemplateController()))
  router.patch(
    '/template/:templateId',
    routerAdapter(makeUpdateTemplateController())
  )
  router.get('/template/:authorId', routerAdapter(makeListTemplateController()))
  router.delete(
    '/template/:templateId',
    routerAdapter(makeDeleteTemplateController())
  )
}
