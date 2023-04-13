import { ShapeFlags } from '../shared/ShapeFlags'

export function initSlots(instance, children) {
  // console.log(instance, children)

  // const slots = {}
  // for (const key in children) {
  //   const value = children[key]
  //   slots[key] = normalizeSlotValue(value)
  // }
  // console.log('slots22')
  // console.log(slots)
  // instance.slots = slots

  const { vnode } = instance
  if (vnode.shapeFlag & ShapeFlags.SLOT_CHILDREN) {
    normalizeObjectSlots(children, instance.slots)
  }
}

function normalizeObjectSlots(children: any, slots: any) {
  for (const key in children) {
    const value = children[key]
    console.log('normalize')
    console.log(value)
    slots[key] = (props) => normalizeSlotValue(value(props))
  }
}

function normalizeSlotValue(value) {
  return Array.isArray(value) ? value : [value]
}
