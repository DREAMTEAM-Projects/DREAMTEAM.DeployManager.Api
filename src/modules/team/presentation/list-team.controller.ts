import { Request } from "express";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";
import ListTeamUseCase from "../usecase/list/list-team.usecase";
import { ListTeamUseCaseInputDto } from "../usecase/list/list-team.usecase.dto";

export default class ListTeamController implements Controller {

  constructor(private readonly _listTeamUseCase: ListTeamUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: ListTeamUseCaseInputDto = {
        projectName: req.params.projectName
      }
      const result = await this._listTeamUseCase.execute(input)
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