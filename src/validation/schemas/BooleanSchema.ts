import { BaseSchema } from './BaseSchema'
import { BooleanRules } from '../rules/boolean'

export class BooleanSchema extends BaseSchema {
    isBoolean(message?: string) {
        this.ruleList.addRule(new BooleanRules.IsBooleanRule(message))
        return this
    }
}
