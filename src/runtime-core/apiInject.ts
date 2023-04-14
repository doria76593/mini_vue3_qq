import { getCurrentInstance } from './component'
export function provide(key, value) {
  const currentInstance: any = getCurrentInstance()
  if (currentInstance) {
    let { provides } = currentInstance
    provides[key] = value
  }
}
export function inject(key) {
  const currentInstance: any = getCurrentInstance()
  if (currentInstance) {
    const parentProvides = currentInstance.parent.provides
    return parentProvides[key]
  }
}
