import { LengthArrayRule } from '../rules/array'
import { BaseSchema } from './BaseSchema'

export default class ArraySchema extends BaseSchema {
    length(limit: any, message?: string) {
        this.ruleList.addRule(new LengthArrayRule(limit, message))
        return this
    }
}
