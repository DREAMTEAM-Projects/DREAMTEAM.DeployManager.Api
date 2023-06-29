import { Request, Response } from 'express'
import DeleteDocumentUseCase from '../usecase/delete/delete-document.usecase'

export default class DeleteDocumentController {
  constructor(private readonly _deleteDocumentUseCase: DeleteDocumentUseCase) {}

  handle = async (req: Request, res: Response) => {
    try {
      const result = await this._deleteDocumentUseCase.execute({
        id: req.params.document
      })
      return res.status(200).json(result)
    } catch (error) {
      return res.status(500).json(error)
    }
  }
}
