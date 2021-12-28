import { Rule } from '../Rule'

export class LowerCaseStringRule extends Rule {
    constructor() {
        super()
    }

    validate(value: string) {
        if (value.toLowerCase() !== value)
            throw new Error('Not yet in lowercase')
    }
}
