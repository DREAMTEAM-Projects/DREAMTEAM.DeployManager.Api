import { Request, Response } from "express";
import CreateTemplateUseCase from "../usecase/create/create-template.usecase";
import { CreateTemplateUseCaseInputDto } from "../usecase/create/create-template.usecase.dto";
import { Controller, HttpRequest, HttpResponse } from "../../@shared/adapters/router-adapter.interface";

export default class CreateTemplateController implements Controller {

  constructor(private readonly _createTemplateUseCase: CreateTemplateUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: CreateTemplateUseCaseInputDto = {
        message: req.body.message,
        authorId: req.body.authorId,
        author: req.body.author
      }

      const result = await this._createTemplateUseCase.execute(input)
      return {
        statusCode: 201,
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