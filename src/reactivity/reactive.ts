import { mutableHandlers, readonlyHandlers, shallowReadonlyHandlers } from './baseHandler'

export const enum ReactiveFlags {
  // 常量枚举使用const关键字定义，它与普通枚举不同的时，它会在编译阶段删除该对象，且不能访问该枚举对象，只能访问该枚举对象成员
  IS_REACTIVE = '__v_isReactive',
  IS_READONLY = '__v_isReadonly',
}

export function reactive(raw) {
  return createReactiveObject(raw, mutableHandlers)
}

export function readonly(raw) {
  return createReactiveObject(raw, readonlyHandlers)
}

export function shallowReadonly(raw) {
  return createReactiveObject(raw, shallowReadonlyHandlers)
}

function createReactiveObject(target, baseHandles) {
  return new Proxy(target, baseHandles)
}

export function isReactive(value) {
  return !!value[ReactiveFlags.IS_REACTIVE]
}

export function isReadonly(value) {
  return !!value[ReactiveFlags.IS_READONLY]
}
