// This is a JavaScript module that is loaded on demand. It can export any number of
// functions, and may import other JavaScript modules if required.

export function getContext2d(element, alpha) {
  return element.getContext('2d', { alpha: alpha });
}

export function getProperty(element, property) {
  return element[property];
}

export function setProperty(element, property, value) {
  element[property] = value;
}

export function getBoundingClientRect(element) {
  return element.getBoundingClientRect();
}

export function scaleCanvasToDisplay(ctx, canvas) {
  // Get the DPR and size of the canvas
  const dpr = window.devicePixelRatio;
  const rect = canvas.getBoundingClientRect();

  // Set the "actual" size of the canvas
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;

  // Scale the context to ensure correct drawing operations
  ctx.scale(dpr, dpr);

  // Set the "drawn" size of the canvas
  canvas.style.width = `${rect.width}px`;
  canvas.style.height = `${rect.height}px`;
}