import ArraySchema from './ArraySchema'
import BooleanSchema from './BooleanSchema'
// import NumberSchema from './NumberSchema';
import StringSchema from './StringSchema'
import ShapeSchema from './ShapeSchema'

import { ShapeObjectType } from './ShapeSchema'

export class SchemaFactory {
    static array() {
        return new ArraySchema()
    }

    static boolean() {
        return new BooleanSchema()
    }

    // static number () {
    // 	return new NumberSchema();
    // }

    static string() {
        return new StringSchema()
    }

    static shape(obj?: ShapeObjectType) {
        return new ShapeSchema(obj)
    }
}
