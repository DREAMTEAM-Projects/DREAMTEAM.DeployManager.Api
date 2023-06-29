import { Request, Response } from "express";
import CreateDocumentUseCase from "../usecase/create/create-document.usecase";
import { CreateDocumentUseCaseInputDto } from "../usecase/create/create-document.usecase.dto";

export default class CreateDocumentController {

  constructor(private readonly _createDocumentUseCase: CreateDocumentUseCase) { }

  handle = async (req: Request, res: Response): Promise<Response> => {
    try {
      const input: CreateDocumentUseCaseInputDto = {
        filename: req.body.filename,
        url: req.body.url,
        deploy: req.body.deploy,
      }
      const result = await this._createDocumentUseCase.execute(input)
      return res.status(201).json(result)
    } catch (error) {
      console.log({ error })
      return res.status(500).json(error)
    }
  }
}