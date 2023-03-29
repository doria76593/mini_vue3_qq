class ReactiveEffect {
  private _fn: any
  scheduler: Function | undefined
  deps = []
  constructor(fn, scheduler) {
    this._fn = fn
    this.scheduler = scheduler
  }
  run() {
    activeEffect = this
    return this._fn()
  }
  stop() {
    this.deps.forEach((dep: any) => {
      dep.delete(this)
    })
  }
}
type effectOptions = {
  scheduler?: Function
}
export function effect(fn, option: effectOptions = {}) {
  const _effect = new ReactiveEffect(fn, option.scheduler)
  _effect.run()
  let runner: any = _effect.run.bind(_effect)
  runner.effect = _effect
  return runner
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
  let dep = depsMap.get(key)
  if (!dep) {
    dep = new Set()
    depsMap.set(key, dep)
  }
  if (!activeEffect) return
  dep.add(activeEffect)
  activeEffect.deps.push(dep)
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

export function stop(runner) {
  runner.effect.stop()
}
