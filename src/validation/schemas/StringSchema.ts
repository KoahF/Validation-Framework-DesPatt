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
	length (limit: number) {
		this.ruleList.addRule(new LengthStringRule(limit));
		return this;
	}

	lowerCase () {
		this.ruleList.addRule(new LowerCaseStringRule());
		return this;
	}

	max (limit: number) {
		this.ruleList.addRule(new MaxStringRule(limit));
		return this;
	}

	min (limit: number) {
		this.ruleList.addRule(new MinStringRule(limit));
		return this;
	}

	trim () {
		this.ruleList.addRule(new TrimStringRule());
		return this;
	}

	upperCase () {
		this.ruleList.addRule(new UpperCaseStringRule());
		return this;
	}

	matches (value: RegExp) {
		this.ruleList.addRule(new MatchesStringRule(value));
		return this;
	}
}
