export const ensure = {
  /**
   *
   */
  date: (data: any): data is Date =>
    Boolean(data instanceof Date && data.getDate && !isNaN(data.getDate())),
  /**
   *
   */
  object: (data: any): data is object =>
    Boolean(typeof data === 'object' && !Array.isArray(data) && data !== null),
  /**
   *
   */
  array: (data: any): data is any[] =>
    Boolean(typeof data === 'object' && data.length && Array.isArray(data)),
}
