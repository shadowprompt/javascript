//数据准备,
var points = []; //原始点信息数组
var bPoints = []; //百度化坐标数组。用于更新显示范围。

//地图操作开始
var map = new BMap.Map("map");

map.centerAndZoom(new BMap.Point(103.388611, 35.563611), 5); //初始显示中国。

map.enableScrollWheelZoom(); //滚轮放大缩小

setTimeout(dynamicLine, 1000); //动态生成新的点。
//添加线
function addLine(points) {

    var linePoints = [],
        pointsLen = points.length,
        i, polyline;
    if (pointsLen == 0) {
        return;
    }
    // 创建标注对象并添加到地图
    for (i = 0; i < pointsLen; i++) {
        linePoints.push(new BMap.Point(points[i].lng, points[i].lat));
    }

    polyline = new BMap.Polyline(linePoints, {
        strokeColor: "red",
        strokeWeight: 2,
        strokeOpacity: 0.5
    }); //创建折线
    map.addOverlay(polyline); //增加折线
}
//随机生成新的点，加入到轨迹中。
function dynamicLine() {
    var lng = getRandom(40);
    var lat = getRandom(30);
    var id = getRandom(1000);
    var point = {
        "lng": lng,
        "lat": lat,
        "status": 1,
        "id": id
    }
    var makerPoints = [];
    var newLinePoints = [];
    var len;

    makerPoints.push(point);
    // addMarker(makerPoints); //增加对应该的轨迹点
    points.push(point);
    bPoints.push(new BMap.Point(lng, lat));
    len = points.length;
    newLinePoints = points.slice(len - 2, len); //最后两个点用来画线。

    addLine(newLinePoints); //增加轨迹线
    setZoom(bPoints);
    setTimeout(dynamicLine, 1000);
}
// 获取随机数
function getRandom(n) {
    return Math.floor(Math.random() * n + 1)
}
//根据点信息实时更新地图显示范围，让轨迹完整显示。设置新的中心点和显示级别
function setZoom(bPoints) {
    var view = map.getViewport(eval(bPoints));
    var mapZoom = view.zoom;
    var centerPoint = view.center;
    map.centerAndZoom(centerPoint, mapZoom);
}
function addMarker(points){
    var line = new BMap.Polyline(points, {
        strokeColor: "black",
        strokeWeight: 4,
        enableMassClear: false,
        strokeOpacity: 0.7
    }); //创建弧线对象
    map.addOverlay(line); // 将标注添加到地图中
}