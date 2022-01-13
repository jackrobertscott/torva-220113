import {ioAny, TioAny} from './ioAny'
import {ioArray, TioArray} from './ioArray'
import {ioBoolean, TioBoolean} from './ioBoolean'
import {ioColor, TioColor} from './ioColor'
import {ioCustom, TioCustom} from './ioCustom'
import {ioDate, TioDate} from './ioDate'
import {ioEnum, TioEnum} from './ioEnum'
import {ioLazy, TioLazy} from './ioLazy'
import {ioNumber, TioNumber} from './ioNumber'
import {ioObject, TioObject} from './ioObject'
import {ioOptional, TioOptional} from './ioOptional'
import {ioString, TioString} from './ioString'
/**
 *
 */
export interface Tio_<K extends string = string, T = any> {
  _type: K
  validate(value: T): TioValidateReturn<T>
}
/**
 *
 */
export type TioValidateReturn<T> =
  | {ok: true; value: T}
  | {ok: false; error: string}
/**
 *
 */
export type TioAll =
  | TioAny
  | TioArray
  | TioBoolean
  | TioColor
  | TioCustom
  | TioDate
  | TioEnum
  | TioNumber
  | TioLazy
  | TioObject
  | TioOptional
  | TioString
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
  number: ioNumber,
  object: ioObject,
  optional: ioOptional,
  string: ioString,
}
/**
 *
 */
export type TioValue<T extends Tio_> = T extends Tio_<string, infer X>
  ? X
  : never
