const containsObject = (arr, obj) =>
  arr.some((element) => JSON.stringify(element) === JSON.stringify(obj));

export default containsObject;
