import { Author } from "../../domain/value-object/author.value-object"

export interface UpdateDeployUseCaseInputDto {
  id: string
  title: string
  message: string
  team: string
  project: string
  author: Author
  tags?: string[]
}

export interface UpdateDeployUseCaseOutputDto {
  id: string
}