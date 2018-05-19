$(document).ready(function() {
    var storage = window.localStorage;
    var shopCartStr = storage.shopCart;
    var shopCart = JSON.parse(shopCartStr);
    ////shopCart内容
    console.log(shopCart);
    var count = 0;
    var num = 0;
    var html = '';
    for (var i in shopCart) {
        var shouldPay = shopCart[i].price * shopCart[i].num;
        html += '<li><div class="flex"><div class="foodName"><div>' + shopCart[i].name + '</div><div class="taste">' + shopCart[i].style + '</div>' +
            '</div><div class="foodNum">×' + shopCart[i].num + '</div><div class="foodPayment">¥' + shopCart[i].price + '</div></div></li>';
        count += shouldPay;
        num += shopCart[i].num;
    }
    $('div.order>ul').append(html);
    $('#num').html(num);
    $('.shouldPay').html(count);
});
$('input.table_number').keyup(function() {
    var c = $(this);
    if (/[^\d]/.test(c.val())) { //替换非数字字符
        var temp_amount = c.val().replace(/[^\d]/g, '');
        $(this).val(temp_amount);
    }
});
// $('#switchCP').click(function(){
//     console.log($('#switchCP').attr('checked'));
//     if($("#btn").val()=="off"){
//         $("#btn").val("on");
//         console.log("开关1当前状态："+$("#btn").val());
//         $('div.discount').removeClass('hide');
//         $('#switchCP').attr('checked','checked')
//     }else{
//         $("#btn").val("off");
//         console.log("开关1当前状态："+$("#btn").val());
//         $('div.discount').addClass('hide');
//         $('#switchCP').attr('checked',null);
//     }
// });
$('#switchCP').click(function() {
    console.log($('#switchCP')[0].checked);
    $('div.discount').toggleClass('hide');

    // if ($('#switchCP')[0].checked == true) {
    //     console.log(1);
    //     $('div.discount').removeClass('hide');
    // } else {
    //     $('div.discount').addClass("hide");
    //     console.log(3);
    // }
});