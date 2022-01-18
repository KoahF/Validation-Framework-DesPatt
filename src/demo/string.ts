import { SchemaFactory } from '../validation/schemas/SchemaFactory';
export default function main () {
	const stringSchema = SchemaFactory.string();

	// stringSchema.length(2).validate('12');
	// stringSchema.length(2).validate('123');
	// stringSchema.lowerCase().validate('XX');
	// stringSchema.lowerCase().validate('aa');
	// stringSchema.matches(/2/).validate('2');
	// stringSchema.matches(/2/).validate('xxx');
	// stringSchema.max(2).validate('12');
	// stringSchema.max(2).validate('123');
	// stringSchema.min(2).validate('12');
	// stringSchema.min(2).validate('1');
	// stringSchema.trim().validate('xas swdas');
	// stringSchema.trim().validate('x   x   ');
	// stringSchema.upperCase().validate('ABC');
}
