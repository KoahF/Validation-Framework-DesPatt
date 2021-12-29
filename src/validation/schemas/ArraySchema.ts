import { LengthArrayRule } from '../rules/array'
import { BaseSchema } from './BaseSchema'

export default class ArraySchema extends BaseSchema {
    length(limit: any) {
        this.ruleList.addRule(new LengthArrayRule(limit))
        return this
    }
}
