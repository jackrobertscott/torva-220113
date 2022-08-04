import {TypeIo_} from '.'
/**
 *
 */
export interface TypeIoNumber extends TypeIo_<'number', number> {}
/**
 *
 */
export function ioNumber(): TypeIoNumber {
  return {
    _type: 'number',
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'number')
        return {ok: false, error: `Value is not a number.`}
      if (isNaN(value))
        return {ok: false, error: `Value provided is NaN (not a number).`}
      return {ok: true, value}
    },
  }
}
