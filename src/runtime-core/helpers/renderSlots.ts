import { createVNode } from '../vnode'

export function renderSlots(slots, name) {
  console.log(slots, name)
  const slot = slots[name]
  return createVNode('div', {}, slot)
}
