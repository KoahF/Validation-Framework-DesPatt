import { Rule } from "../Rule";

export class IsBooleanRule extends Rule {
  constructor() {
    super();
    this._name = "boolean";
    this._message = "Value must be boolean";
  }

  validate(value: any): void {
    const sValue = String(value);
    if (!(sValue === "true" || sValue === "false"))
      throw new Error(this._message);
  }
}
