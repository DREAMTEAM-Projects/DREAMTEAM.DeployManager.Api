import { Request } from 'express'
import {
  Controller,
  HttpResponse
} from '../../@shared/adapters/router-adapter.interface'
import CreateDeployUseCase from '../usecase/create/create-deploy.usecase'
import { CreateDeployUseCaseInputDto } from '../usecase/create/create-deploy.usecase.dto'

export default class CreateDeployController implements Controller {
  constructor(private readonly _createDeployUseCase: CreateDeployUseCase) {}

  async handle(req: Request): Promise<HttpResponse> {
    try {
      const input: CreateDeployUseCaseInputDto = {
        title: req.body.title,
        message: req.body.message,
        team: req.body.team,
        project: req.body.project,
        author: req.body.author,
        tags: req.body.tags,
        pbis: req.body.pbis,
        date: req.body.date
      }
      const result = await this._createDeployUseCase.execute(input)

      if (!result?.id)
        return {
          statusCode: 400,
          body: result
        }
      
      if (!result?.id) return {
        statusCode: 400,
        body: result
      }

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
