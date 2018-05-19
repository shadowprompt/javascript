/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var so;
    var p;
    var r1 = Rx.Observable.combineLatest(o, io, p, so, function (vo, vio, vp, vso) { return ({ vo: vo, vio: vio, vp: vp, vso: vso }); });
    var r2 = Rx.Observable.combineLatest(o, io, p, so);
    var r3 = Rx.Observable.combineLatest([o, io, so, p], function (items) { return 5; });
    var r4 = Rx.Observable.combineLatest([o, io, so, p]);
});
//# sourceMappingURL=combinelatest.js.map