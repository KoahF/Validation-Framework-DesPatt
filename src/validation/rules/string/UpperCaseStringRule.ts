import { Rule } from '../Rule'

export default class UpperCaseStringRule extends Rule {
    constructor(message?: string) {
        super('string', message || 'this is not upper case')
    }

    checkIsFail(value: string): boolean {
        if (typeof value !== 'string') {
            this._message = 'type must be string'
            return true
        }

        return value.toUpperCase() !== value
    }
}
