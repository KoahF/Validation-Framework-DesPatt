import { BaseSchema } from './BaseSchema'

export type ShapeObjectType = { [key: string]: BaseSchema }

export default class ShapeSchema extends BaseSchema {
    private schemaList: ShapeObjectType

    constructor(shapeObject?: ShapeObjectType) {
        super()
        this.schemaList = shapeObject || {}
    }

    validate(obj?: any) {
        if (typeof obj !== 'object')
            throw new Error('this type must be "object"')
        for (const key in obj) {
            this.schemaList[key]?.label(key).validate(obj[key])
        }
    }
}
