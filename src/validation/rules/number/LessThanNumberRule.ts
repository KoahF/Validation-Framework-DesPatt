import { Rule } from '../Rule'

export default class LessThanNumberRule extends Rule {
    checkIsFail(value: any): boolean {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error(
                'Less than rule of Number Schema has to be a number'
            )
        }

        if (value >= this.ceil) {
            return true
        }

        return false
    }
    ceil: number
    /**
     *
     */
    constructor(value: any, message?: string) {
        const numb = Number(value)
        if (isNaN(numb)) {
            throw new Error('Max rule of Number Schema has to be a number')
        }

        super('less than', message || `must be less than ${numb}`)
        this.ceil = numb
    }
}
