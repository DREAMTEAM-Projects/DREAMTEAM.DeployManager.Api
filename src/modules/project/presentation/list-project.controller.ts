import { Request } from "express";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";
import ListProjectUseCase from "../usecase/list/list-project.usecase";

export default class ListProjectController implements Controller {

  constructor(private readonly _listProjectUseCase: ListProjectUseCase) {}

  async handle(_: Request): Promise<HttpResponse> {
    try {
      const result = await this._listProjectUseCase.execute()
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