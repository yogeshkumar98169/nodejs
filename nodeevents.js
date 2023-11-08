import EventEmitter from 'events';
class MyEmitter extends EventEmitter { }
//!we cann't use EventEmitter name in place of myEmitter because it has already been declared in default module loader
const myEmitter = new MyEmitter();
let m = 0;
myEmitter.on('event', () => {
    console.log("Please do it now it is important");
    setTimeout(() => {
        console.log("It is a remainder please do it otherwise it will become costly for you")
    }, 3000);
});
myEmitter.emit('event');
console.log("Script is running")