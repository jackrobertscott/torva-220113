import {TypeIo_} from '.'
/**
 *
 */
export interface TypeIoBoolean extends TypeIo_<'boolean', boolean> {}
/**
 *
 */
export function ioBoolean(): TypeIoBoolean {
  return {
    _type: 'boolean',
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'boolean')
        return {ok: false, error: `Value is not a boolean.`}
      return {ok: true, value}
    },
  }
}
