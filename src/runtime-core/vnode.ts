export function createVNode(type, props?, children?) {
  // console.log('createVNode')
  // console.log(type, props, children)
  const vnode = {
    type,
    props,
    children,
  }

  return vnode
}
