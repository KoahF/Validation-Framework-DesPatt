import { BaseSchema } from "./BaseSchema";
import { BooleanRule } from "../rules/boolean";

export class BooleanSchema extends BaseSchema {
  constructor() {
    super();
    this.ruleList.addRule(new BooleanRule.IsBooleanRule());
  }
}
