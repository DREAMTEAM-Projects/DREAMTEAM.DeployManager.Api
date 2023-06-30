import { Author } from "../../domain/value-object/author.value-object"

export interface ListDeployUseCaseInputDto {
  title?: string,
  project?: string,
  team?: string,
  tag?: string,
  authorEmail?: string,
  authorName?: string,
  status?: number
  date?: Date
}

export interface ListDeployUseCaseOutputDto {
  id: string
  title: string
  message: string
  team: string
  project: string
  author: Author
  tags?: string[]
  status?: number | null
}