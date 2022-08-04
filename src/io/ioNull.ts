import {TypeIoAll, TypeIoValue, TypeIo_} from '.'
/**
 *
 */
export interface TypeIoNull<T extends TypeIoAll = TypeIoAll>
  extends TypeIo_<'null', TypeIoValue<T> | null> {}
/**
 *
 */
export function ioNull<T extends TypeIoAll = TypeIoAll>(
  ofType: T
): TypeIoNull<T> {
  return {
    _type: 'null',
    /**
     *
     */
    validate(value) {
      if (value === null) return {ok: true, value}
      if (!ofType)
        throw new Error('Null schema not provided prior to validate.')
      return ofType.validate(value)
    },
  }
}
