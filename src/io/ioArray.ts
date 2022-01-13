import {TioAll, TioValue, Tio_} from '.'
/**
 *
 */
export interface TioArray<T extends TioAll = TioAll>
  extends Tio_<'array', Array<TioValue<T>>> {}
/**
 *
 */
export function ioArray<T extends TioAll = TioAll>(ofType: T): TioArray<T> {
  return {
    _type: 'array',
    /**
     *
     */
    validate(value) {
      if (!Array.isArray(value))
        return {
          ok: false,
          error: `Expect type "array" but got "${typeof value}".`,
        }
      try {
        return {
          ok: true,
          value: value.map((i, index) => {
            const data = ofType.validate(i)
            if (!data.ok) throw `[${index}]: ${data.error}`
            return data.value
          }),
        }
      } catch (message) {
        const error =
          typeof message === 'string' ? message : 'An error occurred.'
        return {ok: false, error}
      }
    },
  }
}
