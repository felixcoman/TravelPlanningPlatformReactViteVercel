const isObjectEmpty = (obj) => {
  return JSON.stringify(obj) === "{}";
};
export default isObjectEmpty;
