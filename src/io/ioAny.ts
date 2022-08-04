import {TypeIo_} from '.'
/**
 *
 */
export interface TypeIoAny extends TypeIo_<'any', any> {}
/**
 *
 */
export function ioAny(): TypeIoAny {
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
