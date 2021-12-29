import { StringRules } from './../rules/string'
import { BaseSchema } from './BaseSchema'

export class StringSchema extends BaseSchema {
    length(limit: number) {
        this.ruleList.addRule(new StringRules.LengthStringRule(limit))
        return this
    }

    lowerCase() {
        this.ruleList.addRule(new StringRules.LowerCaseStringRule())
        return this
    }

    max(limit: number) {
        this.ruleList.addRule(new StringRules.MaxStringRule(limit))
        return this
    }

    min(limit: number) {
        this.ruleList.addRule(new StringRules.MinStringRule(limit))
        return this
    }

    trim() {
        this.ruleList.addRule(new StringRules.TrimStringRule())
        return this
    }

    upperCase() {
        this.ruleList.addRule(new StringRules.UpperCaseStringRule())
        return this
    }

    matches(value: RegExp) {
        this.ruleList.addRule(new StringRules.MatchesStringRule(value))
        return this
    }
}
