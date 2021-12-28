import { Rule } from '../Rule'

export class UpperCaseStringRule extends Rule {
    constructor() {
        super()
    }

    validate(value: string) {
        if (value.toUpperCase() !== value)
            throw new Error('Not yet in upperCase')
    }
}
