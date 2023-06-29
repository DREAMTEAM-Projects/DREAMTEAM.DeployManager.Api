import Template, { TemplateProps } from "../../domain/entity/template.entity";
import { TemplateGateway } from "../../gateway/template.gateway";
import { CreateTemplateUseCaseInputDto, CreateTemplateUseCaseOutputDto } from "./create-template.usecase.dto";

export default class CreateTemplateUseCase {

  constructor(private readonly _templateRepository: TemplateGateway) {}

  async execute(input: CreateTemplateUseCaseInputDto): Promise<CreateTemplateUseCaseOutputDto> {
    const props: TemplateProps = {
      message: input.message,
      authorId: input.authorId,
      author: input.author
    }
  
    const template = new Template(props)
  
    return await this._templateRepository.save(template)
  }

}
