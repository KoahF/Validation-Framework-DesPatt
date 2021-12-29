import { Rule } from '../Rule'

export default class IsBooleanRule extends Rule {
    constructor(message?: string) {
        super()
        this._name = 'boolean'
        this._message = message || 'Value must be an boolean'
    }

    validate(value: any): void {
        const sValue = String(value)
        if (!(sValue === 'true' || sValue === 'false'))
            throw new Error(this._message)
    }
}
