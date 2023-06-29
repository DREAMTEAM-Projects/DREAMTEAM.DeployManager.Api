import { Request, Response } from 'express'
import DeleteDocumentUseCase from '../usecase/delete/delete-document.usecase'
import { HttpResponse } from '../../@shared/adapters/router-adapter.interface'

export default class DeleteDocumentController {
  constructor(private readonly _deleteDocumentUseCase: DeleteDocumentUseCase) {}

  async handle (req: Request): Promise<HttpResponse>{
    try {
      const result = await this._deleteDocumentUseCase.execute({
        id: req.params.document
      })

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
