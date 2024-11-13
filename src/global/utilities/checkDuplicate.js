const checkDuplicate = (arr, obj) =>
  arr.some(
    (element) =>
      element.country === obj.country &&
      element.city === obj.city &&
      element?.name === obj?.name
  );

export default checkDuplicate;
