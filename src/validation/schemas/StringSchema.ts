import {
	LengthStringRule,
	LowerCaseStringRule,
	MaxStringRule,
	MinStringRule,
	TrimStringRule,
	UpperCaseStringRule,
	MatchesStringRule,
} from './../rules/string';
import { BaseSchema } from './BaseSchema';

export default class StringSchema extends BaseSchema {
	length (limit: number, message?: string) {
		this.ruleList.addRule(new LengthStringRule(limit, message));
		return this;
	}

	lowerCase (message?: string) {
		this.ruleList.addRule(new LowerCaseStringRule(message));
		return this;
	}

	max (limit: number, message?: string) {
		this.ruleList.addRule(new MaxStringRule(limit, message));
		return this;
	}

	min (limit: number, message?: string) {
		this.ruleList.addRule(new MinStringRule(limit, message));
		return this;
	}

	trim (message?: string) {
		this.ruleList.addRule(new TrimStringRule(message));
		return this;
	}

	upperCase (message?: string) {
		this.ruleList.addRule(new UpperCaseStringRule(message));
		return this;
	}

	matches (value: RegExp, message?: string) {
		this.ruleList.addRule(new MatchesStringRule(value, message));
		return this;
	}
}
