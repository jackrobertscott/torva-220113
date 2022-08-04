import {ioAny, TypeIoAny} from './ioAny'
import {ioArray, TypeIoArray} from './ioArray'
import {ioBoolean, TypeIoBoolean} from './ioBoolean'
import {ioColor, TypeIoColor} from './ioColor'
import {ioCustom, TypeIoCustom} from './ioCustom'
import {ioDate, TypeIoDate} from './ioDate'
import {ioEnum, TypeIoEnum} from './ioEnum'
import {ioLazy, TypeIoLazy} from './ioLazy'
import {ioNull, TypeIoNull} from './ioNull'
import {ioNumber, TypeIoNumber} from './ioNumber'
import {ioObject, TypeIoObject} from './ioObject'
import {ioOptional, TypeIoOptional} from './ioOptional'
import {ioString, TypeIoString} from './ioString'
/**
 *
 */
export interface TypeIo_<K extends string = string, T = any> {
  _type: K
  validate(value: T): TypeIoValidateReturn<T>
}
/**
 *
 */
export type TypeIoValidateReturn<T> =
  | {ok: true; value: T}
  | {ok: false; error: string}
/**
 *
 */
export type TypeIoAll =
  | TypeIoAny
  | TypeIoArray
  | TypeIoBoolean
  | TypeIoColor
  | TypeIoCustom
  | TypeIoDate
  | TypeIoEnum
  | TypeIoNull
  | TypeIoNumber
  | TypeIoLazy
  | TypeIoObject
  | TypeIoOptional
  | TypeIoString
/**
 *
 */
export const io = {
  any: ioAny,
  array: ioArray,
  boolean: ioBoolean,
  color: ioColor,
  custom: ioCustom,
  date: ioDate,
  enum: ioEnum,
  lazy: ioLazy,
  null: ioNull,
  number: ioNumber,
  object: ioObject,
  optional: ioOptional,
  string: ioString,
}
/**
 *
 */
export type TypeIoValue<T extends TypeIo_> = T extends TypeIo_<string, infer X>
  ? X
  : never
