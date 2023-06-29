import { Request, Response } from "express";
import CreateDeployUseCase from "../usecase/create/create-deploy.usecase";
import { CreateDocumentUseCaseInputDto } from "../usecase/create/create-deploy.usecase.dto";

export default class CreateDocumentController {

  constructor(private readonly _createDocumentUseCase: CreateDeployUseCase) { }

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
      return res.status(500).json(error)
    }
  }

}