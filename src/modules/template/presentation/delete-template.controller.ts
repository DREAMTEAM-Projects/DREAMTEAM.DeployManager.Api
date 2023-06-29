import { Request } from 'express'
import {
  Controller,
  HttpResponse
} from '../../@shared/adapters/router-adapter.interface'
import DeletTemplateUseCase from '../usecase/delete/delete-template.usecase'

export default class DeleteTemplateController implements Controller {
  constructor(private readonly _deleteTemplateUseCase: DeletTemplateUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const result = await this._deleteTemplateUseCase.execute({
        id: req.params.templateId
      })

      if (!result?.id)
        return {
          statusCode: 400,
          body: result
        }

      return {
        statusCode: 200,
        body: result
      }
    } catch (error) {
      return {
        statusCode: 500,
        body: error
      }
    }
  }
}
