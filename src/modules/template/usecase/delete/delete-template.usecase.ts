import { TemplateGateway } from '../../gateway/template.gateway'
import {
  DeleteTemplateUseCaseInputDto,
  DeleteTemplateUseCaseOutputDto
} from './delete-template.usecase.dto'

export default class DeletTemplateUseCase {
  constructor(private readonly _templateRepository: TemplateGateway) {}

  async execute(
    input: DeleteTemplateUseCaseInputDto
  ): Promise<DeleteTemplateUseCaseOutputDto | null> {
    return await this._templateRepository.delete(input.id)
  }
}
