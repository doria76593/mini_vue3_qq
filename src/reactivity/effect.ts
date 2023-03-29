class ReactiveEffect {
  private _fn: any
  scheduler: Function | undefined
  constructor(fn, scheduler) {
    this._fn = fn
    this.scheduler = scheduler
  }
  run() {
    activeEffect = this
    return this._fn()
  }
}
type Option = {
  scheduler?: Function
}
export function effect(fn, option: Option = {}) {
  const _effect = new ReactiveEffect(fn, option.scheduler)
  _effect.run()
  return _effect.run.bind(_effect)
}

const targetMap = new Map()
let activeEffect

export function track(target, key) {
  // target -> key -> dep
  let depsMap = targetMap.get(target)
  if (!depsMap) {
    depsMap = new Map()
    targetMap.set(target, depsMap)
  }
  let deps = depsMap.get(key)
  if (!deps) {
    deps = new Set()
    depsMap.set(key, deps)
  }
  deps.add(activeEffect)
}

export function trigger(target, key) {
  let depsMap = targetMap.get(target)
  let deps = depsMap.get(key)
  for (const effect of deps) {
    if (effect.scheduler) {
      effect.scheduler()
    } else {
      effect.run()
    }
  }
}
