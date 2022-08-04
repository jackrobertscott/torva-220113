import {TypeIo_} from '.'
/**
 *
 */
export interface TypeIoEnum<C extends string = string>
  extends TypeIo_<'enum', C> {}
/**
 *
 */
export function ioEnum<C extends string>(choices: C[]): TypeIoEnum<C> {
  return {
    _type: 'enum',
    /**
     *
     */
    validate(value) {
      if (typeof value !== 'string')
        return {ok: false, error: `Enum value is not a string.`}
      if (!choices.includes(value))
        return {ok: false, error: `Value is not a valid enum option.`}
      return {ok: true, value}
    },
  }
}
