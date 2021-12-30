import {
  IntegerNumberRule,
  LessThanNumberRule,
  MaxNumberRule,
  MinNumberRule,
  MoreThanNumberRule,
  NegativeNumberRule,
  PositiveNumberRule,
} from '../rules/number';
import { BaseSchema } from './BaseSchema';

export default class NumberSchema extends BaseSchema {
  public min(value: any): NumberSchema {
    this.ruleList.addRule(new MinNumberRule(value));
    return this;
  }

  public max(value: any): NumberSchema {
    this.ruleList.addRule(new MaxNumberRule(value));
    return this;
  }

  public lessThan(value: any): NumberSchema {
    this.ruleList.addRule(new LessThanNumberRule(value));
    return this;
  }

  public moreThan(value: any): NumberSchema {
    this.ruleList.addRule(new MoreThanNumberRule(value));
    return this;
  }

  public positive(): NumberSchema {
    this.ruleList.addRule(new PositiveNumberRule());
    return this;
  }

  public negative(): NumberSchema {
    this.ruleList.addRule(new NegativeNumberRule());
    return this;
  }

  public integer(): NumberSchema {
    this.ruleList.addRule(new IntegerNumberRule());
    return this;
  }
}
