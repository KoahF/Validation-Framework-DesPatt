import { Rule } from '../Rule';

export default class LowerCaseStringRule extends Rule {
	constructor (message?: string) {
		super(message || 'this is must be lower case');
	}

	checkIsFail (value: string): boolean {
		return value.toLowerCase() !== value;
	}
}
