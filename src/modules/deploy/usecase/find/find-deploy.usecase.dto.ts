import { Author } from "../../domain/value-object/author.value-object"

export interface FindDeployUseCaseInputDto {
  id: string
}

export interface FindDeployUseCaseOutputDto {
  title?: string
  message?: string
  team?: string
  project?: string
  author?: Author
  tags?: string[]
}