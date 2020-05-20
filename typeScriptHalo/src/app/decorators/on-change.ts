import { renameProperty } from './utils';

// tslint:disable-next-line: naming-convention
export function OnChange<TClass>(
  onChange: (instance: TClass) => void,
  shouldUpdate?: (existing: any, next: any) => boolean
) {
  console.log('Called OnChange DecoratorFactory.');
  shouldUpdate =
    shouldUpdate || ((existing: any, next: any) => existing !== next);
  // tslint:disable-next-line: only-arrow-functions
  return function(target: any, property: string): void {
    console.log(`Applying OnChange Decorator to ${target.name || target.constructor?.name} for ${property}.`);

    const backingProperty = renameProperty(target, property, undefined);

    Object.defineProperty(target, property, {
      get() {
        return this[backingProperty];
      },
      set(value: any) {
        if (shouldUpdate(this[backingProperty], value)) {
          this[backingProperty] = value;
          onChange(this);
        }
      },
      enumerable: true,
      configurable: false,
    });
  };
}
