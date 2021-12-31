import { ISchema } from '../interfaces/ISchema'
import { RuleList } from '../rules/RuleList'

export class BaseSchema implements ISchema {
    protected ruleList: RuleList
    protected type: string

    constructor() {
        this.ruleList = new RuleList()
        this.type = 'type?'
    }

    validate(value: any, key?: string): any {
        this.ruleList.checkAllRule(value, key)

        return value
    }
}
