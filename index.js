/**
 * Forward events of the specified type from source emitter to target.
 * @param {string} event
 * @param {EventEmitter} source
 * @param {EventEmitter} target
 */
function forward(event, source, target) {
    source.on(event, target.emit.bind(target, event));
}

/** export the forward function */
module.exports = forward;
