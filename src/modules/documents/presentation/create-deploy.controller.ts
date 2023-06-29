import { Request, Response } from "express";
import CreateDeployUseCase from "../usecase/create/create-deploy.usecase";
import { CreateDeployUseCaseInputDto } from "../usecase/create/create-deploy.usecase.dto";

export default class CreateDeployController {

  constructor(private readonly _createDeployUseCase: CreateDeployUseCase) {}

  handle = async  (req: Request, res: Response): Promise<Response> => {
    try {
      const input: CreateDeployUseCaseInputDto = {
        title: req.body.title,
        message: req.body.message,
        team: req.body.team,
        project: req.body.project,
        author: req.body.author,
        tags: req.body.tags
      }
      const result = await this._createDeployUseCase.execute(input)
      return res.status(201).json(result)
    } catch(error) {
      return res.status(500).json(error)
    }
  }

}