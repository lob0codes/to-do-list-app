export class TodoModel {
  private _id: number = 0;
  private _description: string;

  constructor(description: string, id: number) {
    this._description = description;
    this._id = id;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }

  get description(): string {
    return this._description;
  }
}
