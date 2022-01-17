import { Rule } from '../Rule'

export default class IntegerNumberRule extends Rule {
    checkIsFail(value: any): boolean {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error('Integer rule of Number Schema has to be a number')
        }

        return !this.isInt(value)
    }
    /**
     *
     */
    constructor(message?: string) {
        super('integer', message || 'must be a boolean')
    }

    isInt(value: any): boolean {
        const check =
            !isNaN(value) &&
            parseInt(Number(value).toString()) == value &&
            !isNaN(parseInt(value, 10))

        return check
    }
}
