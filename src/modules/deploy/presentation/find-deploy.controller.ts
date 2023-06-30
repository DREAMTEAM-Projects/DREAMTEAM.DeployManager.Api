import FindDeployUseCase from "../usecase/find/find-deploy.usecase";
import { Request } from "express";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";
import { FindDeployUseCaseInputDto } from "../usecase/find/find-deploy.usecase.dto";

export default class FindDeployController  implements Controller {

  constructor(private readonly _findDeployUseCase: FindDeployUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: FindDeployUseCaseInputDto = {
        id: req.params.deployId
      }

      const result = await this._findDeployUseCase.execute(input)

      if (!result) return {
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