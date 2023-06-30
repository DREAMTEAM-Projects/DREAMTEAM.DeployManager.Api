import DeleteDeployUseCase from "../usecase/delete/delete-deploy.usecase";
import { Request } from "express";
import { Controller, HttpResponse } from "../../@shared/adapters/router-adapter.interface";
import { DeleteDeployUseCaseInputDto } from "../usecase/delete/delete-deploy.usecase.dto";

export default class DeleteDeployController implements Controller {

  constructor(private readonly _deleteDeployUseCase: DeleteDeployUseCase) { }

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: DeleteDeployUseCaseInputDto = {
        id: req.params.deployId
      }
      const result = await this._deleteDeployUseCase.execute(input)

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