import { Author } from '../../domain/value-object/author.value-object'

export interface CreateDeployUseCaseInputDto {
  title: string
  message: string
  team: string
  project: string
  author: Author
  tags?: string[]
  pbis?: string[]
  date?: Date
}

export interface CreateDeployUseCaseOutputDto {
  id: string
}
