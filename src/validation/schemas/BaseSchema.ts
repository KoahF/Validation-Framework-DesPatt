import { ISchema } from '../interfaces/ISchema'
import { RuleList } from '../rules/RuleList'

export class BaseSchema implements ISchema {
    protected ruleList: RuleList
    protected type: string
    protected _label: any

    constructor() {
        this.ruleList = new RuleList()
        this.type = 'type?'
        this._label = 'this'
    }

    validate(value: any): any {
        try {
            this.ruleList.checkAllRules(value)
        } catch (e) {
            const error = e as Error
            throw new Error(`${String(this._label)} ${error.message}`)
        }
        return value
    }

    label(value: any): BaseSchema {
        this._label = value
        return this
    }
}
