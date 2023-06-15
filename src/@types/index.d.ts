type JSONValue = string | number | boolean | { [x: string]: JSONValue } | Array<JSONValue>;

declare module '*.json' {
  const value: JSONValue;
  export default value;
}
