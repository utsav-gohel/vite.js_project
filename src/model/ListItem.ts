export interface Item {
  id: string;
  checked: boolean;
}

export default class ListItem implements Item {
  constructor(
    private _id: string = "",
    private _item: string = "",
    private _checked: boolean = false
  ) {}
  get id(): string {
    return this._id;
  }
  set id(val: string) {
    this._id = val;
  }
  get item(): string {
    return this._item;
  }
  set item(val: string) {
    this._item = val;
  }
  get checked(): boolean {
    return this._checked;
  }
  set checked(val: boolean) {
    this._checked = val;
  }
}
