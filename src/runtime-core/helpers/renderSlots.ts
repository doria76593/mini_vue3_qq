import { createVNode } from '../vnode'

export function renderSlots(slots, name, props) {
  console.log('renderSlots11')
  console.log(slots, name)
  const slot = slots[name]
  if (slot) {
    if (typeof slot == 'function') {
      return createVNode('div', {}, slot(props))
    }
  }
}
