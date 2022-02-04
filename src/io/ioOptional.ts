import {TioAll, TioValue, Tio_} from '.'
/**
 *
 */
export interface TioOptional<T extends TioAll = TioAll>
  extends Tio_<'optional', TioValue<T> | undefined | null> {}
/**
 *
 */
export function ioOptional<T extends TioAll = TioAll>(
  ofType: T
): TioOptional<T> {
  return {
    _type: 'optional',
    /**
     *
     */
    validate(value) {
      if (value === undefined || value === null) return {ok: true, value}
      if (!ofType)
        throw new Error('Optional schema not provided prior to validate.')
      return ofType.validate(value)
    },
  }
}
