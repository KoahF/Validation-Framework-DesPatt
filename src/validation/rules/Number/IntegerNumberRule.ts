import { Rule } from '../Rule';

export default class IntegerNumberRule extends Rule {
  /**
   *
   */
  constructor() {
    super();

    this._name = 'IntegerNumberRule';
    this._message = 'IntegerNumberRule violated.';
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Integer rule of Number Schema has to be a number');
    }

    return this.isInt(value);
  }

  isInt(value: any): any {
    const check =
      !isNaN(value) &&
      parseInt(Number(value).toString()) == value &&
      !isNaN(parseInt(value, 10));

    if (!check) {
      throw new Error(this._message);
    }

    return value;
  }
}
