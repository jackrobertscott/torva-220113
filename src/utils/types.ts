/**
 *
 */
export type IncludeOfType<X, T> = {
  [K in keyof X as T extends X[K] ? K : never]: X[K]
}
/**
 *
 */
export type ExcludeOfType<X, T> = {
  [K in keyof X as T extends X[K] ? never : K]: X[K]
}
/**
 *
 */
export type OptionalUndefined<X> = Simplify<
  ExcludeOfType<X, undefined> & Partial<IncludeOfType<X, undefined>>
>
/**
 *
 */
export type Simplify<A> = A extends (infer X)[]
  ? Simplify<X>[]
  : A extends object
  ? {[K in keyof A]: Simplify<A[K]>}
  : A
