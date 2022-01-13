import {Tio_} from '.'
import {regex} from '../utils/regex'
/**
 *
 */
export interface TioColor extends Tio_<'color', string> {}
/**
 *
 */
export function ioColor(): TioColor {
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
