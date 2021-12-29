import { Rule } from '../Rule';

export default class PositiveNumberRule extends Rule {
  /**
   *
   */
  constructor() {
    super();

    this._name = 'PositiveNumberRule';
    this._message = 'PositiveNumberRule violated';
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Positive rule of Number Schema has to be a number');
    }

    if (value <= 0) {
      throw new Error(this._message);
    }
  }
}
