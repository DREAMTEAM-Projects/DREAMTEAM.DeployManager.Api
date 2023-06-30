import { Request, Response } from "express";
import UpdateDeployUseCase from "../usecase/update/update-deploy.usecase";
import { UpdateDeployUseCaseInputDto } from "../usecase/update/update-deploy.usecase.dto";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";

export default class UpdateDeployController implements Controller {

  constructor(private readonly _updateDeployUseCase: UpdateDeployUseCase) { }

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: UpdateDeployUseCaseInputDto = {
        id: req.params.deployId,
        title: req.body.title,
        message: req.body.message,
        team: req.body.team,
        project: req.body.project,
        author: req.body.author,
        tags: req.body.tags
      }
      const result = await this._updateDeployUseCase.execute(input)

      if (!result) return {
        statusCode: 400,
        body: result
      }

      return {
        statusCode: 200,
        body: result
      }
    } catch (error) {
      console.log({ error })
      return {
        statusCode: 500,
        body: error
      }
    }
  }

}