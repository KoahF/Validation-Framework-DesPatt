import { Rule } from '../Rule'

export default class NegativeNumberRule extends Rule {
    checkIsFail(value: any): boolean {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error('Negative rule of Number Schema has to be a number')
        }

        if (value >= 0) {
            return true
        }
        return false
    }
    /**
     *
     */
    constructor(message?: string) {
        super('negative', message || 'must be negative number')
    }
}
