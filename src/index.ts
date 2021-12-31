import { SchemaFactory } from './validation/schemas/SchemaFactory';
(function main () {
	const schema = SchemaFactory.string();
	// const booleanSchema = SchemaFactory.boolean();
	// const numberSchema = SchemaFactory.number();
	// const arraySchema = SchemaFactory.array();
	try {
		// numberSchema.min(1).max(5).integer();
		// const numberResult = numberSchema.validate('4');
		// console.log('🚀 ~ file: index.ts ~ line 12 ~ main ~ numberResult', numberResult);
		// const array = [1, 2, 3, 4]
		// arraySchema.length('Ba').validate('Array')
		// schema.length(2).validate(12);
		// schema.length(2).validate('123');
		// schema.lowerCase().validate('XX');
		// schema.lowerCase().validate('aa');
		// schema.matches(/2/).validate('2');
		// schema.matches(/2/).validate('xxx');
		// schema.max(2).validate('12');
		// schema.max(2).validate('123');
		// schema.min(2).validate('12');
		// schema.min(2).validate('1');
		// schema.trim().validate('xas swdas');
		// schema.trim().validate('x   x   ');
		// schema.upperCase().validate('ABC');
		schema.upperCase().validate('xxx');
		console.log('ok');
	} catch (e) {
		const error = e as Error;
		console.log('error ', +error.message);
	}
})();
