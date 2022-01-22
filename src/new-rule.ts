import { Rule } from './validation/rules/Rule'

export class NewRule extends Rule {
    checkIsFail(value: any): boolean {
        const newNumber = parseInt(value)
        if (newNumber === 3) return false

        return true
    }
}
