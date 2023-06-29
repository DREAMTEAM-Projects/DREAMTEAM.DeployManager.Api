import Template, { TemplateProps } from "../../domain/entity/template.entity";
import { TemplateGateway } from "../../gateway/template.gateway";
import { UpdateTemplateUseCaseInputDto, UpdateTemplateUseCaseOutputDto } from "./update-template.usecase.dto";

export default class UpdateTemplateUseCase {

  constructor(private readonly _templateRepository: TemplateGateway) {}

  async execute(input: UpdateTemplateUseCaseInputDto): Promise<UpdateTemplateUseCaseOutputDto | null> {
    const props: TemplateProps = {
      templateId: input.templateId,
      message: input.message,
      author: input.author
    }
  
    const template = new Template(props)
  
    return await this._templateRepository.update(template)
  }
}
