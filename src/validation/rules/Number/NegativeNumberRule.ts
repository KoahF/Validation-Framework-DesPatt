import { Rule } from '../Rule';

export default class NegativeNumberRule extends Rule {
  /**
   *
   */
  constructor() {
    super();
    this._name = 'NegativeNumberRule';
    this._message = 'NegativeNumberRule violated';
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Negative rule of Number Schema has to be a number');
    }

    if (value >= 0) {
      throw new Error(this._message);
    }
  }
}
