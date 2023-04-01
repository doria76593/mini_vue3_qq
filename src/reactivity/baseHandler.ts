import { track, trigger } from './effect'
import { ReactiveFlags } from './reactive'

export function createGetter(isReadonly = false) {
  return function get(target, key, receiver) {
    if (key === ReactiveFlags.IS_REACTIVE) {
      return !isReadonly
    }
    if (key === ReactiveFlags.IS_READONLY) {
      return isReadonly
    }

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
const get = createGetter()
const set = createSetter()
const readonlyGet = createGetter(true)

export const mutableHandlers = {
  get,
  set,
}

export const readonlyHandlers = {
  get: readonlyGet,
  set(target, key) {
    console.warn(`key :"${String(key)}" set 失败，因为 target 是 readonly 类型`, target)

    return true
  },
}
