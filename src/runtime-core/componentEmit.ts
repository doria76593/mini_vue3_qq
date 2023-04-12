import { camelize, toHandlerKey } from '../shared/index'

// export function emit(instance, event, ...args) {
//   const { props } = instance
//   const handlerName = toHandlerKey(camelize(event))
//   const handler = props[handlerName]
//   handler && handler(...args)
// }

export function emit(instance, event) {
  console.log('emit2', event)

  const { props } = instance
  const handlerName = toHandlerKey(camelize(event))
  const handler = props[handlerName]
  handler && handler()
}
