import { Rule } from '../Rule';

export default class MoreThanNumberRule extends Rule {
  floor: number;
  /**
   *
   */
  constructor(value: any) {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('More than rule of Number Schema has to be a number');
    }

    super();

    this._name = 'MoreThanNumberRule';
    this._message = 'MoreThanNumberRule violated';
    this.floor = numb;
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('More than rule of Number Schema has to be a number');
    }

    if (value <= this.floor) {
      throw new Error(this._message);
    }
  }
}
