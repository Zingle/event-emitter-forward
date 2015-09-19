var forward = require(".."),
    expect = require("expect.js"),
    EventEmitter = require("events").EventEmitter;

describe("forward(event, source, target)", function() {
    it("should forward events from source to target", function(done) {
        var source = new EventEmitter(),
            target = new EventEmitter();

        forward("foo", source, target);
        target.on("foo", function(arg) {
            expect(arg).to.be("foofing");
            done();
        });
        source.emit("foo", "foofing");
    });
});
