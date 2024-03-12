export class TodoModel {
  private _id: number = 0;
  private _description: string;

  constructor(description: string) {
    this._description = description;
  }

  get id(): number {
    return this._id;
  }

  set id(id: number) {
    this._id = id;
  }
}
