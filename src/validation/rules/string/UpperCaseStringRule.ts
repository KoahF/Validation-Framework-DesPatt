import { Rule } from '../Rule';

export default class UpperCaseStringRule extends Rule {
	constructor (message?: string) {
		super(message || 'this is not upper case');
	}

	checkIsFail (value: string): boolean {
		return value.toUpperCase() !== value;
	}
}
