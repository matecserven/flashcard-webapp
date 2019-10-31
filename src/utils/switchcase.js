const switchCase = (cases) => (defaultCase) => (key) =>
  key in cases ? cases[key] : defaultCase;

const executeIfFunction = (f) => (f instanceof Function ? f() : f);

const switchCaseFunc = (cases) => (defaultCase) => (key) =>
  executeIfFunction(switchCase(cases)(defaultCase)(key));

export default switchCaseFunc;

/* This is for practice purpose */
/* function switchf(cases) {
  return function defaulC(defaultCase) {
    return function inputKey(key) {
      if (key in cases) {
        return cases[key];
      } else {
        return defaultCase;
      }
    };
  };
}

console.log(switchf({ 0: 'a', 1: 'b' })('nope')(4)); */
