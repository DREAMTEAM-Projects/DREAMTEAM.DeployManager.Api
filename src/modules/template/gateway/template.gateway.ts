import Template from "../domain/entity/template.entity";

export interface  TemplateGateway {
  save(template: Template): Promise<{ id: string }>
}