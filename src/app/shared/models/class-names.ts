export class ClassNames {
  [key: string]: any;

  constructor(defaultName?: string, enabled?: boolean) {
    Object.defineProperty(this, '__defaultName__', { enumerable: false, writable: true });
    // eslint-disable-next-line no-underscore-dangle
    this.__defaultName__ = defaultName;
    this[defaultName] = enabled || enabled === undefined;
  }

  set(key: string, enabled?: boolean): ClassNames {
    this[this.format(key)] = enabled || enabled === undefined;
    return this;
  }

  setNoDefault(key: string, enabled?: boolean): ClassNames {
    this[key] = enabled || enabled === undefined;
    return this;
  }

  private format(key: string) {
    // eslint-disable-next-line no-underscore-dangle
    return `${this.__defaultName__}--${key}`;
  }
}
