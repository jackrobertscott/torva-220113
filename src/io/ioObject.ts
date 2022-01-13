import {TioValue, Tio_} from '.'
import {OptionalUndefined} from '../utils/types'
/**
 *
 */
export interface TioObject<F extends Record<string, any> = Record<string, any>>
  extends Tio_<'object', OptionalUndefined<{[K in keyof F]: TioValue<F[K]>}>> {
  extend<X extends Record<string, any>>(
    fields: X
  ): TioObject<Omit<F, keyof X> & X>
}
/**
 *
 */
export function ioObject<
  F extends Record<string, any> = Record<string, any>
  // enum types break with: F extends Record<string, TioAll> = Record<string, TioAll>,
>(fields: F): TioObject<F> {
  return {
    _type: 'object',
    /**
     *
     */
    extend(newFields) {
      const i = fields as Omit<F, keyof typeof newFields>
      return ioObject({...i, ...newFields})
    },
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'object')
        return {ok: false, error: `Value is not a object.`}
      try {
        return {
          ok: true,
          value: Object.entries(fields).reduce((all, [key, ofType]) => {
            const data = ofType.validate((value as any)[key])
            if (!data.ok) throw `[${key}]: ${data.error}`
            if (data.value !== undefined) all[key] = data.value
            return all
          }, {} as any),
        }
      } catch (message) {
        const error =
          typeof message === 'string' ? message : 'An error occurred.'
        return {ok: false, error}
      }
    },
  }
}
