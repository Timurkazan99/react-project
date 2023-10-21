import getEnumKeys from './getEnumKeys';

export default function getEnumKeyByString<
  T extends string,
  TEnumValue extends string | number,
  >(enumVariable: { [key in T]: TEnumValue }, string: string) {
  const keys = getEnumKeys(enumVariable);
  return keys.filter((key) => key === string)[0] ?? 'name';
}
