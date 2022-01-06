import ArraySchema from './ArraySchema'
import BooleanSchema from './BooleanSchema'
// import NumberSchema from './NumberSchema';
import StringSchema from './StringSchema'
import ShapeSchema from './ShapeSchema'

import { ShapeObjectType } from './ShapeSchema'
import NumberSchema from './NumberSchema'

export class SchemaFactory {
    static array() {
        return new ArraySchema()
    }

    static boolean() {
        return new BooleanSchema()
    }

    static string() {
        return new StringSchema()
    }

    static shape(obj?: ShapeObjectType) {
        return new ShapeSchema(obj)
    }

    static number() {
        return new NumberSchema()
    }
}
