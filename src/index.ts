import { SchemaFactory } from './validation/schemas/SchemaFactory';

(function main() {
  const schema = SchemaFactory.string();
  const numberSchema = SchemaFactory.number();

  try {
    schema.length(2).validate('12');

    numberSchema.min(1).max(5).integer();
    const numberResult = numberSchema.validate('4');
    console.log(
      '🚀 ~ file: index.ts ~ line 12 ~ main ~ numberResult',
      numberResult
    );

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
