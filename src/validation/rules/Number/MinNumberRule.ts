import { Rule } from '../Rule'

export default class MinNumberRule extends Rule {
    checkIsFail(value: any): boolean {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error('Min rule of Number Schema has to be a number')
        }

        if (value < this.min) {
            return true
        }

        return false
    }
    private min: number

    constructor(value: any, message?: string) {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error('Min rule of Number Schema has to be a number')
        }

        // super('MinNumberRule', 'MinNumberRule violated');
        super('min', message || `must be greater than or equal to ${numb}`)

        this.min = numb
    }
}
