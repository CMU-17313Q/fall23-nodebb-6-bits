/* eslint-disable no-eval */

'use strict';

// const Iroh = require('iroh');

function buildCallStack(callStack, indent = 0) {
    let output = '';

    const currentCall = callStack.shift();
    if (currentCall) {
        output += `${' '.repeat(indent)}call ${currentCall.name} ( [ ${currentCall.args.join(', ')} ] )\n`;
        if (currentCall.children && currentCall.children.length > 0) {
            output += buildCallStack(currentCall.children, indent + 2);
        }
        output += `${' '.repeat(indent)}call ${currentCall.name} end  -> [ ${currentCall.result} ]\n`;
    }

    return output;
}

// Define a data structure to represent the call stack
class Call {
    constructor(name, args) {
        this.name = name;
        this.args = args;
        this.children = [];
        this.result = null;
    }
}

// Simulate a call stack
const programCall = new Call('Program', []);
const factorial3Call = new Call('factorial', [3]);
const factorial2Call = new Call('factorial', [2]);
const factorial1Call = new Call('factorial', [1]);
const factorial0Call = new Call('factorial', [0]);

factorial0Call.result = 1;
factorial1Call.children.push(factorial0Call);
factorial1Call.result = 1;
factorial2Call.children.push(factorial1Call);
factorial2Call.result = 2;
factorial3Call.children.push(factorial2Call);
factorial3Call.result = 6;
programCall.children.push(factorial3Call);

// Build the call stack as a string
const callStackString = buildCallStack([programCall]);

// Display or use the call stack string as needed
console.log(callStackString);
