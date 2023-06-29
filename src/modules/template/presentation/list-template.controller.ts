import { Request } from "express";
import ListTemplateUseCase from "../usecase/list/list-template.usecase";
import { ListTemplateUseCaseInputDto } from "../usecase/list/list-template.usecase.dto";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";

export default class ListTemplateController implements Controller {

  constructor(private readonly _listTemplateUseCase: ListTemplateUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: ListTemplateUseCaseInputDto = {
        authorId: req.params.authorId
      }

      const result = await this._listTemplateUseCase.execute(input)

      if (!result) return {
        statusCode: 400,
        body: result
      }

      if (!result.length) return {
        statusCode: 204,
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