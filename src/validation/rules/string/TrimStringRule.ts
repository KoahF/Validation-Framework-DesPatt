import { Rule } from '../Rule'

export default class TrimStringRule extends Rule {
    constructor(message?: string) {
        super('string', message || 'this is not trim')
    }

    checkIsFail(value: string): boolean {
        if (typeof value !== 'string') {
            this._message = 'type must be string'
            return true
        }

        return value.trim() !== value
    }
}
