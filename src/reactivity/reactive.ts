import { track, trigger } from "./effect";

export function reactive(row) {
  return new Proxy(row, {
    get: function (target, key, receiver) {
      //   console.log(target, key, receiver)
      let res = Reflect.get(target, key)
      track(target, key);
      return res
    },
    set(target, key, value, receiver) {
      const res = Reflect.set(target, key, value)
      trigger(target, key);
      return res
    },
  })
}
