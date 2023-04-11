import { ShapeFlags } from '../shared/ShapeFlags'
import { isObject } from '../shared/index'
import { createComponentInstance, setupComponent } from './component'

export function render(vnode, container) {
  patch(vnode, container)
}

function patch(vnode, container) {
  // 判断是组件还是element
  //   console.log('vnode11111')
  //   console.log(vnode)
  // if (typeof vnode.type === 'string') {
  const { shapeFlag } = vnode
  if (shapeFlag & ShapeFlags.ELEMENT) {
    processElement(vnode, container)
    // } else if (isObject(vnode.type)) {
  } else if (shapeFlag & ShapeFlags.STATEFUL_COMPONENT) {
    processComponent(vnode, container)
  }
}
function processElement(vnode: any, container: any) {
  mountElement(vnode, container)
}

function mountElement(vnode: any, container: any) {
  const el = (vnode.el = document.createElement(vnode.type))

  const { children, shapeFlag } = vnode

  // children
  // if (typeof children === 'string') {
  if (shapeFlag & ShapeFlags.TEXT_CHILDREN) {
    el.textContent = children
    // } else if (Array.isArray(children)) {
  } else if (shapeFlag & ShapeFlags.ARRAY_CHILDREN) {
    mountChildren(vnode, el)
  }

  // props
  const { props } = vnode
  for (const key in props) {
    const val = props[key]
    el.setAttribute(key, val)
  }

  container.append(el)
}

function mountChildren(vnode, container) {
  vnode.children.forEach((v) => {
    patch(v, container)
  })
}

function processComponent(vnode: any, container: any) {
  mountComponent(vnode, container)
}

function mountComponent(initialVNode: any, container) {
  const instance = createComponentInstance(initialVNode)

  setupComponent(instance)
  setupRenderEffect(instance, initialVNode, container)
}

function setupRenderEffect(instance: any, initialVNode, container) {
  //   console.log('instance')
  //   console.log(instance)
  const { proxy } = instance
  const subTree = instance.render.call(proxy)
  console.log('instance22')
  console.log(subTree)
  console.log(container)
  patch(subTree, container)
  initialVNode.el = subTree.el
}
