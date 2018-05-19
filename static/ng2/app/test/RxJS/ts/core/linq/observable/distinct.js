/// <reference path="../../observable.ts" />
(function () {
    var o;
    o = o.distinct();
    o = o.distinct(function (x) { return x.length; });
    o = o.distinct(function (x) { return x.length; }, function (x, y) { return x.toString() === y.toString(); });
});
//# sourceMappingURL=distinct.js.map