// Q - How could you set a prefix before everything you log? for example, if you log('my message') it will log: "(app) my message"


function logPrefix() {
    const args = Array.prototype.slice.call(arguments);
    args.unshift(`(app)`);
    console.log.apply(console, args);
}