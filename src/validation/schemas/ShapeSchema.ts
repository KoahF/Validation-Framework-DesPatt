import { BaseSchema } from './BaseSchema'

export type ShapeType = { [key: string]: BaseSchema }

export default class ShapeSchema extends BaseSchema {
    protected schemaList: ShapeType
    constructor(obj: ShapeType) {
        super()
        this.schemaList = obj
    }
    validate(value: any) {
        if (typeof value !== 'object')
            throw new Error('this must be a "object" type.')

        for (const key in value) {
            this.schemaList[key]?.validate(value[key], key)
        }
    }
}
