import {TioAll, TioValue, Tio_} from '.'
/**
 *
 */
export interface TioNull<T extends TioAll = TioAll>
  extends Tio_<'null', TioValue<T> | null> {}
/**
 *
 */
export function ioNull<T extends TioAll = TioAll>(ofType: T): TioNull<T> {
  return {
    _type: 'null',
    /**
     *
     */
    validate(value) {
      if (value === null) return {ok: true, value}
      if (!ofType)
        throw new Error('Null schema not provided prior to validate.')
      return ofType.validate(value)
    },
  }
}
