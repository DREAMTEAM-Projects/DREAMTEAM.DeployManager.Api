import Deploy from "../../../deploy/domain/entity/deploy.entity"

export interface CreateDocumentUseCaseInputDto {
  filename: string
  url: string
  deploy: Deploy
}

export interface CreateDocumentUseCaseOutputDto {
  id: string
}