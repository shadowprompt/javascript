var dom = {
    a: $('.input1'),
    b: $('.input2'),
    c: $('.input3')
}
var checkFn = function (target, reg, min, max, msg) {
    this.target = target;
    this.reg = reg;
    this.min = min;
    this.max = max;
    this.msg = msg || {
        notEmptyMsg: '该项不能为空',
        validMsg: '该项的请输入正确信息',
        minMax: '该项输入的值不在允许的范围内'
    };
}
checkFn.prototype.emptyCheck = function () {
    if (!$.trim(this.target.val())) {
        return this.msg.notEmptyMsg;
    }
}
checkFn.prototype.validCheck = function () {
    if (!this.reg.test(this.target.val())) {
        return this.msg.validMsg;
    }
    if (+this.target.val() < this.min || +this.target.val() > this.max) {
        return _.template(this.msg.minMax)({ min: this.min, max: this.max })
    }
}
var checkInfo = [];

var loopCheck = function (index) {
    index = index || 　checkInfo.length;
    for (let i = 0; i < index; i++) {
        for (let j = 0; j < checkInfo[i][1].length; j++) {
            var msg = checkInfo[i][0][checkInfo[i][1][j]]();
            // var msg = checkInfo[i].emptyCheck();
            if (msg) {
                checkInfo[i][0].target.val('');
                return msg;
            }
        }

    }
}
function msgAlert(msg) {
    msg && alert(msg);
    return msg;
}
$('.input1').on('click', function () {
    console.log("设置成功");
    formData = {
        min1: 2,
        max1: 6,
        min2: 20,
        max2: 60
    };
    let check1 = new checkFn(dom.a, /^\d+(.\d{1,2})?$/, formData.min1, formData.max1, { notEmptyMsg: '第一项不能为空', validMsg: '第一项请输入有效的数字', minMax: '请填写大于<%= min%>,小于<%= max%>的值' });
    checkInfo.push({ 0: check1, 1: ['emptyCheck', 'validCheck'] })
    let check2 = new checkFn(dom.b, /^\d+(.\d{1,2})?$/, formData.min2, formData.max2, { notEmptyMsg: '第二项不能为空', validMsg: '第二项的输入不合法', minMax: '请填写大于<%= min%>,小于<%= max%>的值' });
    checkInfo.push({ 0: check2, 1: ['emptyCheck', 'validCheck'] })
})
$('.input2').on('click', function () {
    if (msgAlert(loopCheck(1))) {
        return
    }
    console.log("第一项通过");
})
$('.input3').on('click', function () {
    if (msgAlert(loopCheck(2))) {
        return
    }
    console.log("设置第三项");
    formData.min3 = 0.2;
    formData.max3 = 0.6;
    let check3 = new checkFn(dom.c, /^\d+(.\d{1,2}){1}$/, formData.min3, formData.max3, { notEmptyMsg: '第三项不能为空', validMsg: '第三项的必须一、二位小数', minMax: '请填写大于<%= min%>,小于<%= max%>的值' });
    checkInfo.push({ 0: check3, 1: ['emptyCheck', 'validCheck'] })
})
$('.btn').on('click', function () {
    if (msgAlert(loopCheck())) {
        return
    }
    console.log("校验成功");

})