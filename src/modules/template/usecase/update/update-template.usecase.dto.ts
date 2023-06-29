import { Author } from "@prisma/client"

export interface UpdateTemplateUseCaseInputDto {
  templateId: string
  message: string
  author: Author
}

export interface UpdateTemplateUseCaseOutputDto {
  id: string
}