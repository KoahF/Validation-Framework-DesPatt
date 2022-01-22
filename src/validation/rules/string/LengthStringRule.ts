import { Rule } from '../Rule'

export default class LengthStringRule extends Rule {
    private _limit: number

    constructor(limit: number, message?: string) {
        super('string', message || 'length must be equal ' + limit)
        this._limit = limit
    }

    checkIsFail(value: any): boolean {
        if (typeof value !== 'string') {
            this._message = 'this type must be string'
            return true
        }

        return value.length !== this._limit
    }
}
