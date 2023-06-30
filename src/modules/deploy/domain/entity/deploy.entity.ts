import BaseEntity from '../../../@shared/domain/entity/base.entity'
import { Status } from '../enum/status.enum'
import { Author } from '../value-object/author.value-object'

export type DeployProps = {
  id?: string
  title?: string
  message?: string
  team?: string
  project?: string
  finishedAt?: Date
  createdAt?: Date
  updatedAt?: Date
  date?: Date
  status?: Status
  author?: Author
  tags?: string[]
  pbis?: string[]
}

export default class Deploy extends BaseEntity {
  private _title?: string
  private _message?: string
  private _team?: string
  private _project?: string
  private _finishedAt?: Date
  private _date?: Date
  private _status?: Status
  private _author?: Author
  private _tags?: string[]
  private _pbis?: string[]
  private _active: boolean

  constructor(props: DeployProps) {
    super(props.id, props.createdAt, props.updatedAt)
    this._title = props.title
    this._message = props.message
    this._team = props.team
    this._project = props.project
    this._finishedAt = props.finishedAt
    this._date = props.date
    this._status = props.status || Status.PENDING
    this._author = props.author
    this._tags = props.tags || []
    this._pbis = props.pbis || []
    this._status = props.status ?? Status.PENDING
    this._author = props.author
    this._tags = props.tags ?? []
    this._active = true
  }

  update(props: DeployProps): void {
    if (this._status === Status.FINISHED) {
      throw new Error('Deploy is already finished')
    }
    this._title = props.title
    this._message = props.message
    this._team = props.team
    this._project = props.project
    this._finishedAt = props.finishedAt
    this._date = props.date
    this._status = props.status
    this._author = props.author
    this._tags = props.tags
    this._pbis = props.pbis
  }

  delete(): void {
    if (this._status === Status.STARTED) {
      throw new Error('Cannot delete an started deploy')
    }
    if (this._status === Status.FINISHED) {
      throw new Error('Cannot delete a finished deploy')
    }
    this._active = false
  }

  finish(): void {
    this._status = Status.FINISHED
    this._finishedAt = new Date()
  }

  cancel(): void {
    this._status = Status.CANCELLED
  }

  start(): void {
    this._status = Status.STARTED
  }

  toJSON() {
    return {
      id: this._id,
      title: this._title,
      message: this._message,
      team: this._team,
      project: this._project,
      finishedAt: this._finishedAt,
      status: this._status,
      author: this._author,
      tags: this._tags,
      pbis: this._pbis,
      date: this._date,
      active: this._active
    }
  }
}
