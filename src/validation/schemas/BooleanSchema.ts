import { BaseSchema } from './BaseSchema'
import { IsBooleanRule } from '../rules/boolean'

export default class BooleanSchema extends BaseSchema {
    isBoolean(message?: string) {
        this.ruleList.addRule(new IsBooleanRule(message))
        return this
    }
}
