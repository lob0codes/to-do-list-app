export class TodoModel {
  private _id: number = 0;
  private _description: string;
  private _completed: boolean;

  constructor(description: string, id: number) {
    this._description = description;
    this._id = id;
    this._completed = false;
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

  get completed(): boolean {
    return this._completed;
  }

  set completed(completed: boolean) {
    this._completed = completed;
  }
}
