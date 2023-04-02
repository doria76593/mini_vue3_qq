import { hasChanged } from '../shared'
import { isTracking, trackEffects, triggerEffects } from './effect'

class RefImpl {
  private _value: any
  public dep
  constructor(value) {
    this._value = value
    this.dep = new Set()
  }
  get value() {
    if (isTracking()) {
      trackEffects(this.dep)
    }
    return this._value
  }
  set value(newValue) {
    // 一定是先去修改value的值 再去促发依赖
    if (hasChanged(newValue, this._value)) {
      this._value = newValue
      triggerEffects(this.dep)
    }
  }
}

export function ref(value) {
  return new RefImpl(value)
}
