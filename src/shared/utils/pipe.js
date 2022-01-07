const reducer = (combinedFuncs, currentFunc) => currentFunc(combinedFuncs);

export default (...hocs) =>
  (component) =>
    hocs.reduce(reducer, component);
