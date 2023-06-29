import { Request, Response } from "express";
import CreateDocumentUseCase from "../usecase/create/create-document.usecase";
import { CreateDocumentUseCaseInputDto } from "../usecase/create/create-document.usecase.dto";
import { HttpResponse } from "../../@shared/adapters/router-adapter.interface";

export default class CreateDocumentController {

  constructor(private readonly _createDocumentUseCase: CreateDocumentUseCase) { }

  async handle(req: Request): Promise<HttpResponse>{
    try {
      const input: CreateDocumentUseCaseInputDto = {
        filename: req.body.filename,
        url: req.body.url,
        deploy: req.body.deploy,
      }
      const result = await this._createDocumentUseCase.execute(input)

      if (!result) {
        return {
        statusCode: 400,
        body: result
        }
      }

      return {
        statusCode: 201,
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