import String from './demo/string';
import Array from './demo/array';
import Boolean from './demo/boolean';
import Object from './demo/object';
import Number from './demo/number';

(function main () {
	try {
		// Array();
		// Boolean();
		// String();
		// Number();
		// Object();
	} catch (e) {
		const error = e as Error;
		console.log(error.message);
	}
})();
