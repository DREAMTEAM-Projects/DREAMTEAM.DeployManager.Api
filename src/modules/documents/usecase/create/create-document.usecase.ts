import Document, { DocumentProps } from "../../domain/entity/documents.entity";
import { DocumentGateway } from "../../gateway/document.gateway";
import { CreateDocumentUseCaseInputDto, CreateDocumentUseCaseOutputDto } from "./create-document.usecase.dto";

export default class CreateDocumentUseCase {

  constructor(private readonly _documentRepository: DocumentGateway) { }

  async execute(input: CreateDocumentUseCaseInputDto): Promise<CreateDocumentUseCaseOutputDto> {
    const props: DocumentProps = {
      filename: input.filename,
      url: input.url,
      deploy: input.deploy
    }
    const deploy = new Document(props)
    return await this._documentRepository.save(deploy)
  }

}
