import {TioValidateReturn, Tio_} from '.'
/**
 *
 */
export interface TioCustom<T = any> extends Tio_<'custom', T> {}
/**
 *
 */
export function ioCustom<T>(
  validate: (value: T) => TioValidateReturn<T>
): TioCustom<T> {
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
