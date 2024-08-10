export function getProperty(obj, property) {
    return obj[property];
}

export function setProperty(obj, property, value) {
    obj[property] = value;
}

export function invokeFunction(obj, method, args) {
    if(obj != null) 
        return obj[method](...args);
    else 
        return this[method](...args);
}

export function invokeBatch(batchCalls) {
    for (let batchCall of batchCalls) {
        let params = batchCall.slice(3);
        switch (batchCall[0]) {
            case 'invokeFunction':
                invokeFunction(batchCall[1] ?? this, batchCall[2], params);
                break;
            case 'setProperty':
                setProperty(batchCall[1] ?? obj, batchCall[2], params[0]);
                break
        }
    }
}

export function print(message) {
    console.log(message);
}

export function showPrompt(message) {
    return prompt(message, 'Type anything here');
}

export function scaleContextToDisplay(ctx) {
    scaleToDisplay(ctx.canvas, ctx);
}

export function scaleCanvasToDisplay(canvas) {
    scaleToDisplay(canvas, canvas.getContext('2d'));
}

function scaleToDisplay(canvas, ctx) {
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