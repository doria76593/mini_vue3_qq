import { createGetter, createSetter } from './baseHandler'

export function reactive(row) {
  return new Proxy(row, {
    get: createGetter(),
    set: createSetter(),
  })
}

export function readonly(row) {
  return new Proxy(row, {
    get: createGetter(true),
    set(target, key, value, receiver) {
      return true
    },
  })
}
