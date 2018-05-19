/// <reference path="../concurrency/virtualtimescheduler.ts" />
/// <reference path="../observable.ts" />
/// <reference path="./recorded.ts" />
/// <reference path="./mockobserver.ts" />
var Rx;
(function (Rx) {
})(Rx || (Rx = {}));
(function () {
    var ts = new Rx.TestScheduler();
    var o = ts.createColdObservable(new Rx.Recorded(100, '5'));
    var o = ts.createHotObservable(new Rx.Recorded(100, '5'));
    var ob = ts.createObserver();
    var p = ts.createResolvedPromise(100, false);
    var p = ts.createRejectedPromise(100, false);
    var ob = ts.startScheduler(function () { return Rx.Observable.create(null); }, {
        created: 100,
        subscribed: 200,
        disposed: 300
    });
    var ob = ts.startScheduler(function () { return Rx.Observable.create(null); }, {
        disposed: 300
    });
    var ob = ts.startScheduler(function () { return Rx.Observable.create(null); });
});
//# sourceMappingURL=testscheduler.js.map