import { Rule } from '../Rule';

export default class MaxNumberRule extends Rule {
  max: number;
  /**
   *
   */
  constructor(value: any) {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Max rule of Number Schema has to be a number');
    }

    super();

    this._name = 'MaxNumberRule';
    this._message = 'MaxNumberRule violated';
    this.max = numb;
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Max rule of Number Schema has to be a number');
    }

    if (value > this.max) {
      throw new Error(this._message);
    }
  }
}
