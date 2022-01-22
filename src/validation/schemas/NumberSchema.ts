import {
    IntegerNumberRule,
    LessThanNumberRule,
    MaxNumberRule,
    MinNumberRule,
    MoreThanNumberRule,
    NegativeNumberRule,
    PositiveNumberRule,
} from '../rules/number'
import { BaseSchema } from './BaseSchema'

export default class NumberSchema extends BaseSchema {
    public min(value: any, message?: string): NumberSchema {
        this.ruleList.addRule(new MinNumberRule(value, message))
        return this
    }

    public max(value: any, message?: string): NumberSchema {
        this.ruleList.addRule(new MaxNumberRule(value, message))
        return this
    }

    public lessThan(value: any, message?: string): NumberSchema {
        this.ruleList.addRule(new LessThanNumberRule(value, message))
        return this
    }

    public moreThan(value: any, message?: string): NumberSchema {
        this.ruleList.addRule(new MoreThanNumberRule(value, message))
        return this
    }

    public positive(message?: string): NumberSchema {
        this.ruleList.addRule(new PositiveNumberRule(message))
        return this
    }

    public negative(message?: string): NumberSchema {
        this.ruleList.addRule(new NegativeNumberRule(message))
        return this
    }

    public integer(message?: string): NumberSchema {
        this.ruleList.addRule(new IntegerNumberRule(message))
        return this
    }
}
