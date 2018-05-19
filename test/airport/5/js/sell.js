////存放购物数据
var shopCart = {
    //uid:{price:1,num:1,name:2}
};
var uid = '';
var price = '';
var name = '';
var style = '';
////重载页面
$(document).ready(function() {
    var storage = window.localStorage;
    if (storage.shopCart) {
        var shopCartStr = storage.shopCart;
        shopCart = JSON.parse(shopCartStr);
    }
    var count = 0;
    var num = 0;
    for (var i in shopCart) {
        var shouldPay = shopCart[i].price * shopCart[i].num;
        count += shouldPay;
        num += shopCart[i].num;
        if (shopCart[i].num == 0) {
            console.log('删除成功');
            delete shopCart[i];
        }
        if (shopCart[i].num > 0) {
            var uid = shopCart[i].uid;
            console.log(uid);
            var id = document.getElementById(uid);
            $(id.lastElementChild.firstElementChild).removeClass('hide');
            $(id.lastElementChild.firstElementChild.nextElementSibling).removeClass('hide').html(shopCart[i].num);
        }
    }
    $('#total').html(count);
    $('#num').html(num);
});
//品牌故事与商品页切换
$('div.tip_pro').click(function() {
    $('#shoppingCar').removeClass('hide');
    $('#shopping').removeClass('hide');
    $('#brandStory').addClass('hide');
    $(this.firstElementChild).addClass('active');
    $(this.nextElementSibling.firstElementChild).removeClass('active');
});
$('div.tip_story').click(function() {
    $('#shoppingCar').addClass('hide');
    $('#shopping').addClass('hide');
    $('#brandStory').removeClass('hide');
    $(this.firstElementChild).addClass('active');
    $(this.previousElementSibling.firstElementChild).removeClass('active');
});

function total() {
    var count = 0;
    var num = 0;
    for (var i in shopCart) {
        var shouldPay = shopCart[i].price * shopCart[i].num;
        count += shouldPay;
        num += shopCart[i].num;
        if (shopCart[i].num == 0) {
            console.log('删除成功');
            delete shopCart[i];
        }
    }
    $('#total').html(count);
    $('#num').html(num);
}
////统计数量
$('div.food_add').click(function() {
    var uid = $(this.parentNode.parentNode).attr('id');
    var num = $(this.previousElementSibling).html();
    var price = parseFloat($(this.parentNode.previousElementSibling.lastElementChild).html());
    var name = $(this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild).html();
    num++;
    $(this.previousElementSibling.previousElementSibling).removeClass('hide');
    $(this.previousElementSibling).removeClass('hide');
    $(this.previousElementSibling).html(num);
    //存放数据在空对象里
    if (!shopCart[uid]) {
        shopCart[uid] = {};
        console.log('创建成功')
    }
    shopCart[uid].price = price;
    shopCart[uid].num = num;
    shopCart[uid].name = name;
    shopCart[uid].uid = uid;
    if (!shopCart[uid].style) {
        shopCart[uid].style = '';
    }
    // [name,price,num];
    total();
    console.log(shopCart);
});
$('div.food_decrease').click(function() {
    var uid = $(this.parentNode.parentNode).attr('id');
    var num = $(this.nextElementSibling).html();
    var price = parseFloat($(this.parentNode.previousElementSibling.lastElementChild).html());
    var name = $(this.parentNode.parentNode.parentNode.firstElementChild.firstElementChild).html();
    num--;
    if (num >= 1) {
        ////存放数据在shopCart对象里
        $(this.nextElementSibling).html(num);
    } else {
        $(this).addClass('hide');
        $(this.nextElementSibling).addClass('hide');
        $(this.nextElementSibling).html(num);
    }
    if (!shopCart[uid]) {
        shopCart[uid] = {};
        console.log('创建成功')
    }
    shopCart[uid].price = price;
    shopCart[uid].num = num;
    shopCart[uid].name = name;
    shopCart[uid].uid = uid;
    if (!shopCart[uid].style) {
        shopCart[uid].style = '';
    }
    // [name,price,num];
    total();
    console.log(shopCart);
});
$('#myNav li').click(function() {
    $('#myNav li').removeClass('bold');
    $(this).addClass('bold');
});
////选择规格
$('span.food_style').click(function() {
    uid = $(this.parentNode.nextElementSibling.nextElementSibling).attr('id');
    name = $(this.previousElementSibling).html();
    price = $(this.parentNode.parentNode.lastElementChild.firstElementChild.lastElementChild).html();
    showMask();
    $('#itemName').html(name);
    $('#itemPrice').html(price);
    if (!shopCart[uid]) {
        shopCart[uid] = {};
        shopCart[uid].num = 0;
        shopCart[uid].uid = uid;
        console.log(shopCart);
    }
});

function clearVar() {
    uid = '';
    price = '';
    name = '';
    style = '';
}

function showMask() {
    $('#bg').removeClass('hide');
    $('#style').removeClass('hide');
}

function hideMask() {
    $('#bg').addClass('hide');
    $('#style').addClass('hide');
}

function close() {
    hideMask();
    clearVar();
}
$('.close').click(function() {
    close();
});
$('#bg').click(function() {
    close();
});
for (var i = 0; i < $('div.styleList').length; i++) {
    $($('div.styleList')[i]).on('click', 'li', function() {
        $(this.parentNode.childNodes).removeClass('active');
        $(this).addClass('active');

    });
}
$('#confirm').click(function() {
    style = $('div.styleList li.active').html();
    shopCart[uid].style = style;
    shopCart[uid].price = price;
    shopCart[uid].name = name;
    shopCart[uid].uid = uid;
    hideMask();
    clearVar();
});
$('#shoppingList').scroll(function() {
    var scroll = $('div.leftBorder');
    for (var i = 0; i < $('div.leftBorder').length; i++) {
        if ($(scroll[i]).offset().top < 580) {
            // console.log(scroll[i]);
            var myNav = $('#myNav>li');
            $(myNav).removeClass('bold');
            $(myNav[i]).addClass('bold');
        }
    }
});
$('#payment').click(function() {
    total();
    weui.picker([{
        label: '1人',
        value: 0
    }, {
        label: '2人',
        value: 1
    }, {
        label: '3人',
        value: 2
    }, {
        label: '4人',
        value: 3
    }, {
        label: '5人',
        value: 4
    }, {
        label: '6人',
        value: 5
    }, {
        label: '7人',
        value: 6
    }, {
        label: '8人',
        value: 7
    }, {
        label: '9人',
        value: 8
    }, {
        label: '10人',
        value: 9
    }, {
        label: '11人',
        value: 10
    }, {
        label: '12人',
        value: 11
    }, {
        label: '13人',
        value: 12
    }, {
        label: '14人',
        value: 13
    }, {
        label: '15人',
        value: 14
    }, {
        label: '16人',
        value: 15
    }, {
        label: '17人',
        value: 16
    }, {
        label: '18人',
        value: 17
    }, {
        label: '19人',
        value: 18
    }, {
        label: '20人',
        value: 19
    }], {
        className: 'font',
        container: 'body',
        defaultValue: [1],
        onChange: function(result) {
            console.log(result[0].label)
        },
        onConfirm: function(result) {
            // console.log(result[0].value);
            var shopCartStr = JSON.stringify(shopCart);
            console.log(shopCartStr);
            var sessionStorage = window.sessionStorage;
            sessionStorage.peopleNum = result[0].value + 1;
            var storage = window.localStorage;
            storage.shopCart = shopCartStr;
            window.location.href = 'orderDetail.html';
        }
    });
});
console.log($('div.styleList')[0]);