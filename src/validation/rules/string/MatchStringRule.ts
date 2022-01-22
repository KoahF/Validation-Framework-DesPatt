import { Rule } from '../Rule'

export default class MatchesStringRule extends Rule {
    private _regex: RegExp

    constructor(reg: RegExp, message?: string) {
        super('string', message || 'this not match ' + reg)
        this._regex = reg
    }

    checkIsFail(value: string): boolean {
        if (typeof value !== 'string') {
            this._message = 'type must be string'
            return true
        }

        return !this._regex.test(value)
    }
}
