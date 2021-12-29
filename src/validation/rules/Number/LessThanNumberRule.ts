import { Rule } from '../Rule';

export default class LessThanNumberRule extends Rule {
  ceil: number;
  /**
   *
   */
  constructor(value: any) {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Less than rule of Number Schema has to be a number');
    }

    super();

    this._name = 'LessThanNumberRule';
    this._message = 'LessThanNumberRule violated';
    this.ceil = numb;
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Less than rule of Number Schema has to be a number');
    }

    if (value >= this.ceil) {
      throw new Error(this._message);
    }
  }
}
