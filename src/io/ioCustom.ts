import {TypeIoValidateReturn, TypeIo_} from '.'
/**
 *
 */
export interface TypeIoCustom<T = any> extends TypeIo_<'custom', T> {}
/**
 *
 */
export function ioCustom<T>(
  validate: (value: T) => TypeIoValidateReturn<T>
): TypeIoCustom<T> {
  return {
    _type: 'custom',
    /**
     *
     */
    validate(value) {
      return validate(value)
    },
  }
}
