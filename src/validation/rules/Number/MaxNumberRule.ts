import { Rule } from '../Rule'

export default class MaxNumberRule extends Rule {
    checkIsFail(value: any): boolean {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error('Max rule of Number Schema has to be a number')
        }

        if (value > this.max) {
            return true
        }

        return false
    }
    max: number
    /**
     *
     */
    constructor(value: any, message?: string) {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error('Max rule of Number Schema has to be a number')
        }

        super('max', message || `must be smaller than or equal to ${numb}`)

        this.max = numb
    }
}
