import {TypeIoAll, TypeIoValue, TypeIo_} from '.'
/**
 *
 */
export interface TypeIoArray<T extends TypeIoAll = TypeIoAll>
  extends TypeIo_<'array', Array<TypeIoValue<T>>> {}
/**
 *
 */
export function ioArray<T extends TypeIoAll = TypeIoAll>(
  ofType: T
): TypeIoArray<T> {
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
