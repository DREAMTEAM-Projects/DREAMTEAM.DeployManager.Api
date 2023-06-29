import { Request } from "express";
import UpdateTemplateUseCase from "../usecase/update/update-template.usecase";
import { UpdateTemplateUseCaseInputDto } from "../usecase/update/update-template.usecase.dto";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";

export default class UpdateTemplateController implements Controller {

  constructor(private readonly _updateTemplateUseCase: UpdateTemplateUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: UpdateTemplateUseCaseInputDto = {
        message: req.body.message,
        templateId: req.params.templateId,
        author: req.body.author
      }

      const result = await this._updateTemplateUseCase.execute(input)

      if (!result?.id) return {
        statusCode: 400,
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