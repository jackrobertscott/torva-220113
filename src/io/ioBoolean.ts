import {Tio_} from '.'
/**
 *
 */
export interface TioBoolean extends Tio_<'boolean', boolean> {}
/**
 *
 */
export function ioBoolean(): TioBoolean {
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
