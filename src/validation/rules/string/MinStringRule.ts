import { Rule } from '../Rule'

export default class MinStringRule extends Rule {
    private _limit: number

    constructor(limit: number, message?: string) {
        super(
            'string',
            message || 'this length must be greater than or equal to ' + limit
        )
        this._limit = limit
    }

    checkIsFail(value: string): boolean {
        if (typeof value !== 'string') {
            this._message = 'type must be string'
            return true
        }

        return value.length < this._limit
    }
}
