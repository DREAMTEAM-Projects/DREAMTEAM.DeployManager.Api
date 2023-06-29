import Template, { TemplateProps } from "../../domain/entity/template.entity";
import { TemplateGateway } from "../../gateway/template.gateway";
import { ListTemplateUseCaseInputDto, ListTemplateUseCaseOutputDto } from "./list-template.usecase.dto";

export default class ListTemplateUseCase {

  constructor(private readonly _templateRepository: TemplateGateway) {}

  async execute(input: ListTemplateUseCaseInputDto): Promise<ListTemplateUseCaseOutputDto[] | null> {
    const props = {
      authorId: input.authorId
    }
  
    const template = new Template(props)
  
    return await this._templateRepository.list(template)
  }
}
