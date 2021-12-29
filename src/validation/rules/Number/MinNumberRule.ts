import { Rule } from '../Rule';

export default class MinNumberRule extends Rule {
  private min: number;

  constructor(value: any) {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Min rule of Number Schema has to be a number');
    }

    // super('MinNumberRule', 'MinNumberRule violated');
    super();
    this._name = 'MinNumberRule';
    this._message = 'MinNumberRule violated';

    this.min = value;
  }

  validate(value: any): void {
    const numb = Number(value);

    if (isNaN(numb)) {
      throw new Error('Min rule of Number Schema has to be a number');
    }

    if (value < this.min) {
      throw new Error(this._message);
    }
  }
}
