import {TypeIo_} from '.'
/**
 *
 */
export interface TypeIoDate extends TypeIo_<'date', string> {}
/**
 *
 */
export function ioDate(): TypeIoDate {
  return {
    _type: 'date',
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'string')
        return {ok: false, error: `Date value is not a string.`}
      const parsedDate = Date.parse(value)
      if (isNaN(parsedDate))
        return {ok: false, error: `Value is not a valid date string.`}
      return {ok: true, value: new Date(parsedDate).toISOString()}
    },
  }
}
