// import { bytecoder } from './bytecoder/bytecoderclasses.js';

function main() {
    return bytecoder.exports.main();
}

function getJava(){
    dynamicallyLoadScript('./bytecoder/bytecoderclasses.js');
    return bytecoder.exports;
}

function getMessage() {  
    return "Hello from java.js!"
}