import { Rule } from './Rule'

export class RuleList {
    private rules: Rule[]

    constructor() {
        this.rules = []
    }

    get getRules() {
        return this.rules
    }

    addRule(rule: Rule): void {
        this.rules.push(rule)
    }

    checkAllRules(value: any): void {
        for (const rule of this.rules) {
            rule.validate(value)
        }
    }
}
