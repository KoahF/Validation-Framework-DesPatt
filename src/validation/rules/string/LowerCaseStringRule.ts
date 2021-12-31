import { Rule } from '../Rule';

export default class LowerCaseStringRule extends Rule {
	constructor (message?: string) {
		super('string', message || 'this is must be lower case');
	}

	checkIsFail (value: string): boolean {
		if (typeof value !== 'string') {
			this._message = 'this type must be string';
			return true;
		}

		return value.toLowerCase() !== value;
	}
}
