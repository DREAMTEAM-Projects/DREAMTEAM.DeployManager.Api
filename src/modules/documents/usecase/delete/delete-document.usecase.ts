import { DeleteDocumentUseCaseInputDto, DeleteDocumentUseCaseOutputDto } from "./delete-document-usecase.dto";
import { DocumentGateway } from "../../gateway/document.gateway";

export default class DeleteDocumentUseCase {

  constructor(private readonly _documentRepository: DocumentGateway) {

  }

  async execute (
    input: DeleteDocumentUseCaseInputDto
  ): Promise<DeleteDocumentUseCaseOutputDto> {
   return await this._documentRepository.delete(input.id)
  }
}