event-emitter-forward
=====================
Forward events from one EventEmitter to another.

```js
var forward = require("event-emitter-forward"),
    EventEmitter = require("events").EventEmitter,
    source = new EventEmitter(),
    target = new EventEmitter();

forward("foo", source, target);
target.on("foo", console.log.bind(console));
source.emit("foo", "foofing");

// expected output:
// foofing
```
