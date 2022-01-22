import { Rule } from '../Rule'

export default class LengthArrayRule extends Rule {
    private _limit: number

    constructor(limit: any, message?: string) {
        if (isNaN(limit)) {
            throw new Error('length() function input has to be a number')
        }
        super('length()', message || `length must be smaller than ${limit}`)
        this._limit = limit
    }

    checkIsFail(input: any): boolean {
        if (!Array.isArray(input)) {
            this._message = ` has to be of type Array`
            throw new Error('length() function input has to be a number')
        }
        if (input.length > this._limit) {
            return true
        }

        return false
    }

    // validate(input: any): void {
    //     if (!Array.isArray(input)) {
    //         throw new Error('Input has to be of type Array')
    //     }

    //     if (input.length > this._limit) {
    //         throw new Error(
    //             this._message ||
    //                 `Array length must be smaller than ${this._limit}`
    //         )
    //     }
    // }
}
