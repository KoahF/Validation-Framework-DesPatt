import { ISchema } from '../interfaces/ISchema';
import { RuleList } from '../rules/RuleList';

export class BaseSchema implements ISchema {
	protected ruleList: RuleList;
	protected type: string;

	constructor () {
		this.ruleList = new RuleList();
		this.type = 'type?';
	}

	validation (value: any): void {
		for (const rule of this.ruleList.getRules) {
			rule.validate(value);
		}
	}
}
