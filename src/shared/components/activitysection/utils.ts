const CapitalizeEachWord = (str: string) => {
  let strArr = str
    .split(' ')
    .map(strr => strr[0].toUpperCase() + strr.slice(1).toLowerCase());

  return strArr.join(' ');
};

export { CapitalizeEachWord };
