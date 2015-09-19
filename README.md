event-emitter-forward
=====================
Forward events from one EventEmitter to another.

```js
var EventEmitter = require("events").EventEmitter,
    forward = require("event-emitter-forward"),
    source = new EventEmitter(),
    target = new EventEmitter();

forward("foo", source, target);
target.on("foo", console.log.bind(console));
source.emit("foo", "foofing");

// expected output:
// foofing
```
