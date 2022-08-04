import {TypeIoAll, TypeIoValue, TypeIo_} from '.'
/**
 *
 */
export interface TypeIoOptional<T extends TypeIoAll = TypeIoAll>
  extends TypeIo_<'optional', TypeIoValue<T> | undefined> {}
/**
 *
 */
export function ioOptional<T extends TypeIoAll = TypeIoAll>(
  ofType: T
): TypeIoOptional<T> {
  return {
    _type: 'optional',
    /**
     *
     */
    validate(value) {
      if (value === undefined) return {ok: true, value}
      if (!ofType)
        throw new Error('Optional schema not provided prior to validate.')
      return ofType.validate(value)
    },
  }
}
