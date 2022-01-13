export const regex = {
  /**
   *
   */
  escape(value: string = '') {
    return value.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  },
  /**
   *
   */
  from(value: string = '') {
    return new RegExp(this.escape(value), 'i')
  },
  /**
   *
   */
  normalize(value: string = '') {
    // "^" means starts with, "$" means ends with
    return new RegExp(`^${this.escape(value.trim())}$`, 'i')
  },
  /**
   *
   */
  startsWith(value: string = '') {
    return new RegExp(`^${this.escape(value.trim())}`, 'i')
  },
  /**
   *
   */
  endsWith(value: string = '') {
    return new RegExp(`${this.escape(value.trim())}$`, 'i')
  },
  /**
   *
   */
  email() {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  },
  /**
   *
   */
  hsla() {
    return /^hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*(\d*(?:\.\d+)?)\)$/
  },
}
