/**
 * Returns a simple copy of object without methods
 *
 * @param obj Object for copy
 * @returns New object
 */
export const deepCopy = <T>(obj: T): T => {
  const objString = JSON.stringify(obj);
  return <T>JSON.parse(objString);
};
