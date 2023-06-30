import { Request } from "express";
import ListDeployUseCase from "../usecase/list/list-deploy.usecase";
import { ListDeployUseCaseInputDto } from "../usecase/list/list-deploy.usecase.dto";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";

export default class ListDeployController implements Controller {

  constructor(private readonly _listDeployUseCase: ListDeployUseCase) { }

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: ListDeployUseCaseInputDto = {
        title: req.body.title,
        team: req.body.team,
        project: req.body.project,
        authorName: req.body.authorName,
        authorEmail: req.body.authorEmail,
        tag: req.body.tag,
        date: req.body.date
      }
      const result = await this._listDeployUseCase.execute(input)
      
      if (!result) return {
        statusCode: 400,
        body: result
      }

      if (!result?.length) return {
        statusCode: 204,
        body: result
      }

      return {
        statusCode: 200,
        body: result
      }
    } catch(error) {
      return {
        statusCode: 500,
        body: error
      }
    }
  }

}