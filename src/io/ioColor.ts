import {TypeIo_} from '.'
import {regex} from '../utils/regex'
/**
 *
 */
export interface TypeIoColor extends TypeIo_<'color', string> {}
/**
 *
 */
export function ioColor(): TypeIoColor {
  return {
    _type: 'color',
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'string')
        return {ok: false, error: `Color value is not a string.`}
      if (!regex.hsla().test(value))
        return {ok: false, error: `Value is not a valid hsla string.`}
      return {ok: true, value}
    },
  }
}
