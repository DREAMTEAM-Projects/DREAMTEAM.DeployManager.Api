import Template from "../domain/entity/template.entity";
import { ListTemplateUseCaseOutputDto } from "../usecase/list/list-template.usecase.dto"
import { UpdateTemplateUseCaseOutputDto } from '../usecase/update/update-template.usecase.dto'

export interface  TemplateGateway {
  save(template: Template): Promise<{ id: string } | null>
  update(template: Template): Promise<UpdateTemplateUseCaseOutputDto>
  list(template: Template): Promise<ListTemplateUseCaseOutputDto[] | null>
}