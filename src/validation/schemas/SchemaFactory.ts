
import NumberSchema from './NumberSchema';
import { StringSchema } from './StringSchema';

export class SchemaFactory {
  static string() {
    return new StringSchema();
  }
  
  static boolean() {
        return new BooleanSchema()
    }

  static number() {
    return new NumberSchema();
  }
}
