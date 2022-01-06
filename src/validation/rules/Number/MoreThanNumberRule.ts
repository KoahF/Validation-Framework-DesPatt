import { Rule } from '../Rule'

export default class MoreThanNumberRule extends Rule {
    checkIsFail(value: any): boolean {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error(
                'More than rule of Number Schema has to be a number'
            )
        }

        if (value <= this.floor) {
            return true
        }

        return false
    }
    floor: number
    /**
     *
     */
    constructor(value: any, message?: string) {
        const numb = Number(value)

        if (isNaN(numb)) {
            throw new Error(
                'More than rule of Number Schema has to be a number'
            )
        }

        super('more than', message || `must be greater than ${numb}`)

        this.floor = numb
    }
}
