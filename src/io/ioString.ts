import {TypeIo_} from '.'
import {regex} from '../utils/regex'
/**
 *
 */
export interface TypeIoStringOptions {
  regex?: RegExp
  trim?: boolean
  email?: boolean
  nowhitespace?: boolean
  emptyok?: boolean
}
/**
 *
 */
export interface TypeIoString extends TypeIo_<'string', string> {
  regex(value: RegExp): TypeIoString
  trim(): TypeIoString
  email(): TypeIoString
  nowhitespace(): TypeIoString
  emptyok(): TypeIoString
}
/**
 *
 */
export function ioString(options?: TypeIoStringOptions): TypeIoString {
  return {
    _type: 'string',
    /**
     *
     */
    regex(value) {
      return ioString({
        ...options,
        regex: value,
      })
    },
    /**
     *
     */
    trim() {
      return ioString({
        ...options,
        trim: true,
      })
    },
    /**
     *
     */
    email() {
      return ioString({
        ...options,
        email: true,
      })
    },
    /**
     *
     */
    nowhitespace() {
      return ioString({
        ...options,
        nowhitespace: true,
      })
    },
    /**
     *
     */
    emptyok() {
      return ioString({
        ...options,
        emptyok: true,
      })
    },
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'string')
        return {ok: false, error: `String value is not a string.`}
      if (!options?.emptyok && !value.trim().length)
        return {ok: false, error: `Value can not be empty.`}
      if (options?.regex && !options?.regex.test(value))
        return {ok: false, error: `Value does not match regular expression.`}
      if (options?.email && !regex.email().test(value))
        return {ok: false, error: `Value is not a valid email.`}
      if (options?.trim) value = value.trim()
      if (options?.nowhitespace) value = value.split(' ').join('')
      return {ok: true, value}
    },
  }
}
