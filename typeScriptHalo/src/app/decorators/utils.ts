export function renameProperty(
  instance: object,
  property: string | number | symbol,
  defaultValue?: any
): symbol {
  const newProperty = Symbol(`__${String(property)}+original`);

  if (!instance.hasOwnProperty(property)) {
    instance[property] = defaultValue;
  }

  const originalDescriptor = Object.getOwnPropertyDescriptor(
    instance,
    property
  );

  originalDescriptor.enumerable = false;
  originalDescriptor.configurable = false;

  Object.defineProperty(instance, newProperty, originalDescriptor);
  delete instance[property];
  return newProperty;
}
