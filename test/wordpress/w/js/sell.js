$('div.tip_pro').click(function(){
    $('#shoppingCar').removeClass('hide');
    $('#shopping').removeClass('hide');
    $('#brandStory').addClass('hide');
    $(this.firstElementChild).addClass('active');
    $(this.nextElementSibling.firstElementChild).removeClass('active');
});
$('div.tip_story').click(function(){
    $('#shoppingCar').addClass('hide');
    $('#shopping').addClass('hide');
    $('#brandStory').removeClass('hide');
    $(this.firstElementChild).addClass('active');
    $(this.previousElementSibling.firstElementChild).removeClass('active');
});
var shopCart={
    // uid: [name,price,num,style,size]
    //
    // delete uid;
};
function total(){
    var count=0;
    for(var i in shopCart){
        var shouldPay=shopCart[i][1]*shopCart[i][2];
        count+=shouldPay;
    }
    $('#total').html(count);
}
$('div.food_add').click(function(){
    var uid=$(this.parentNode).attr('id');
    var num=$(this.previousElementSibling).html();
    var price=parseFloat($(this.parentNode.previousElementSibling.lastElementChild).html());
    num++;
    $(this.previousElementSibling.previousElementSibling).removeClass('hide');
    $(this.previousElementSibling).removeClass('hide');
    $(this.previousElementSibling).html(num);
    //存放数据在空对象里
    shopCart[uid]=[name,price,num];
    total();
});
$('div.food_decrease').click(function(){
    var uid=$(this.parentNode).attr('id');
    var num=$(this.nextElementSibling).html();
    var price=parseFloat($(this.parentNode.previousElementSibling.lastElementChild).html());
    num--;
    if(num>=1){
        ////存放数据在shopCart对象里
        $(this.nextElementSibling).html(num);
    }else{
        $(this).addClass('hide');
        $(this.nextElementSibling).addClass('hide');
        $(this.nextElementSibling).html(num);
    }
    shopCart[uid]=[name,price,num];
    total();
    console.log(shopCart);
});
$('#myNav li').click(function(){
    $('#myNav li').removeClass('bold');
    $(this).addClass('bold');
});
$('#shoppingList').scroll(function(){
   if($('.blank2').offset().top){
       console.log($('#drink').offset().top)
   }
});
var ok;
$('#myNav').on('activate.bs.scrollspy', function(e){

    ok = e.target;
    var pa = ok.parentElement;
    var sib = pa.children;
    var hi=0
    for(var i = 0;i<sib.length;i++){
        hi += sib[i].offsetHeight;

        if(sib[i] == ok){
            console.log("..");
            ok.parentNode.scrollTop = hi-pa.offsetHeight;
            break;
        }

    }
})

$(window).on('scroll', function(){
    console.log("oo");
    $(window).trigger('scroll.bs.scrollspy');
    // $('#shoppingList').trigger('scroll.bs.scrollspy');
})
// $(document).ready(function(){
//     $("#myNav").affix({
//         offset: {
//             top: 0
//         }
//     });
// });