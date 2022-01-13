import {Tio_} from '.'
/**
 *
 */
export interface TioAny extends Tio_<'any', any> {}
/**
 *
 */
export function ioAny(): TioAny {
  return {
    _type: 'any',
    /**
     *
     */
    validate(value) {
      return {ok: true, value}
    },
  }
}
