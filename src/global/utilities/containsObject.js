const containsObject = (arr, obj) =>
  arr.some(
    (element) =>
      JSON.stringify(element).toLowerCase() ===
      JSON.stringify(obj).toLowerCase()
  );

export default containsObject;
