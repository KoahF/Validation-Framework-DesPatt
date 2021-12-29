import { Rule } from '../Rule'

export default class LengthArrayRule extends Rule {
    private _limit: number

    constructor(limit: any) {
        if (isNaN(limit)) {
            throw new Error('LengthArrayRule input has to be a number')
        }

        super()
        this._limit = limit
        this._name = 'LengthArrayRule'
        this._message = 'LengthArrayRule violated.'
    }

    validate(input: any): void {
        if (!Array.isArray(input)) {
            throw new Error('Input has to be of type Array')
        }

        if (input.length > this._limit) {
            throw new Error(this._message)
        }
    }
}
