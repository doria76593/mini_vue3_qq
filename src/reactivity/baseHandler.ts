import { track, trigger } from './effect'

export function createGetter(isReadonly = false) {
  return function get(target, key, receiver) {
    let res = Reflect.get(target, key)
    if (!isReadonly) {
      track(target, key)
    }
    return res
  }
}
export function createSetter() {
  return function set(target, key, value, receiver) {
    const res = Reflect.set(target, key, value)
    trigger(target, key)
    return res
  }
}
