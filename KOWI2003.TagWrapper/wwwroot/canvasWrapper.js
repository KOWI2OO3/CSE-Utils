// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function getContext2d(element) {
  return element.getContext('2d');
}

export function getProperty(element, property) {
  return element[property];
}

export function setProperty(element, property, value) {
  element[property] = value;
}
