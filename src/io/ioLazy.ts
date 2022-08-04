import {TypeIoAll, TypeIoValue, TypeIo_} from '.'
/**
 *
 */
export interface TypeIoLazy<T extends TypeIoAll = TypeIoAll>
  extends TypeIo_<'lazy', TypeIoValue<T>> {}
/**
 *
 */
export function ioLazy<T extends TypeIoAll = TypeIoAll>(
  callback: () => T
): TypeIoLazy<T> {
  return {
    _type: 'lazy',
    /**
     *
     */
    validate(value) {
      return callback().validate(value)
    },
  }
}
