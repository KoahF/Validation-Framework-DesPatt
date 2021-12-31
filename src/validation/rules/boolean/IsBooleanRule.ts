import { Rule } from '../Rule'

export default class IsBooleanRule extends Rule {
    constructor(message?: string) {
        super('boolean', message || 'this must be an boolean')
    }

    checkIsFail(value: any): boolean {
        const sValue = String(value)
        return !(sValue === 'true' || sValue === 'false')
    }
}
