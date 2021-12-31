import { Rule } from '../Rule';

export default class TrimStringRule extends Rule {
	constructor (message?: string) {
		super(message || 'this is not trim');
	}

	checkIsFail (value: string): boolean {
		return value.trim() !== value;
	}
}
