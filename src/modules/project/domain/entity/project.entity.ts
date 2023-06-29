export default class Project {
  constructor(private readonly _description: string) {}

  get description(): string {
    return this._description
  }
}