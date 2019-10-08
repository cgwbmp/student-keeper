export default null;

type EnumType = { [s: number]: string };

export function mapEnum(enumerable: EnumType, cb: Function): Array<any> {
  const keys: Array<string> = Object.keys(enumerable)
    .filter(key => typeof enumerable[key as any] === 'number');
  return keys.map(key => cb(enumerable[key as any], key));
}
