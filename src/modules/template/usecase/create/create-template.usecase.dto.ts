import { Author } from "@prisma/client"

export interface CreateTemplateUseCaseInputDto {
  message: string
  authorId: string
  author: Author
}

export interface CreateTemplateUseCaseOutputDto {
  id: string
}