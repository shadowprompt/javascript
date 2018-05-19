/// <reference path="../../observable.ts" />
(function () {
    var o;
    var io;
    var so;
    var p;
    var r1 = o.combineLatest(io, p, so, function (vo, vio, vp, vso) { return ({ vo: vo, vio: vio, vp: vp, vso: vso }); });
    var r2 = o.combineLatest(io, p, so);
    var r3 = o.combineLatest([io, so, p], function (v1, items) { return 5; });
    var r4 = o.combineLatest([io, so, p]);
});
//# sourceMappingURL=combinelatestproto.js.map