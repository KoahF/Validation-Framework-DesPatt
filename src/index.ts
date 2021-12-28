import { SchemaFactory } from './validation/schemas/SchemaFactory';

(function main () {
	const schema = SchemaFactory.string();

	try {
		schema.length(2).validation('12');
		// schema.length(2).validation('123');

		// schema.lowerCase().validation('ab');
		// schema.lowerCase().validation('AB');

		// schema.matches(/2/).validation('2');
		// schema.matches(/2/).validation('xxx');

		// schema.max(2).validation('12');
		// schema.max(2).validation('123');

		// schema.min(2).validation('12');
		// schema.min(2).validation('1');

		// schema.trim().validation('xas swdas');
		// schema.trim().validation('x   x   ');

		// schema.upperCase().validation('ABC');
		// schema.upperCase().validation('xxx');

		console.log('ok');
	} catch (e) {
		let error = e as Error;
		console.log(error.message);
	}
})();
