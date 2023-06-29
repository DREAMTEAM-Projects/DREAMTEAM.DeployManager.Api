import BaseEntity from "../../../@shared/domain/entity/base.entity"
import { Author } from "../../../deploy/domain/value-object/author.value-object"

export type TemplateProps = {
  id?: string
  message: string
  authorId?: string
  templateId?: string
  author: Author
}

export default class Template extends BaseEntity {
  private _message: string
  private _authorId?: string
  private _templateId?: string
  private _author: Author

  constructor(props: TemplateProps) {
    super(props.id)
    this._message = props.message
    this._authorId = props.authorId
    this._author = props.author
    this._templateId = props.templateId
  }

  update(props: TemplateProps): void {
    if (!this._templateId) {
      throw new Error("Cannot update an template without id")
    }

    this._id = props.templateId!
    this._message = props.message
  }

  delete(props: TemplateProps): void {
    if (!this._templateId) {
      throw new Error("Cannot delete an template without id")
    }

    this._id = props.templateId!
  }

  toJSON() {
    return {
      id: this._id,
      message: this._message,
      authorId: this._authorId,
      templateId: this._templateId,
      author: this._author
    }
  }
}