import { Rule } from '../Rule'

export class TrimStringRule extends Rule {
    constructor() {
        super()
    }

    validate(value: string) {
        if (value.trim() !== value) throw new Error('Not yet in trim')
    }
}
