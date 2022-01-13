import {TioAll, TioValue, Tio_} from '.'
/**
 *
 */
export interface TioLazy<T extends TioAll = TioAll>
  extends Tio_<'lazy', TioValue<T>> {}
/**
 *
 */
export function ioLazy<T extends TioAll = TioAll>(
  callback: () => T
): TioLazy<T> {
  return {
    _type: 'lazy',
    /**
     *
     */
    validate(value) {
      return callback().validate(value)
    },
  }
}
