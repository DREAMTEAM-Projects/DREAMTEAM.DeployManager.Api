import BaseEntity from '../../../@shared/domain/entity/base.entity'
import Deploy from '../../../deploy/domain/entity/deploy.entity'

export type DocumentProps = {
  id?: string
  filename: string
  url: string
  createdAt?: Date
  updatedAt?: Date
  deploy: Deploy
}

export default class Document extends BaseEntity {
  private _filename: string
  private _url: string
  private _deploy: Deploy

  constructor(props: DocumentProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this._filename = props.filename
    this._url = props.url
    this._deploy = props.deploy
  }

  create(props: DocumentProps): void {
    this._deploy = props.deploy
    this._filename = props.filename
    this._url = props.url
  }

  toJSON(): any {
    return {
      id: this._id,
      filename: this._filename,
      url: this._url,
      deploy: this._deploy.id
    }
  }
}
