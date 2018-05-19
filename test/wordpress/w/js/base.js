$(function(){
	var common={
		init:function(){
			this.event();
			this.index();
			this.user();
			this.flight();
			this.cart();
		},
		event:function(){
			//通用tab
			$(".tabTitle li").click(function(){
			  $(".tabContent").hide().eq($(".tabTitle li").removeClass("active").index($(this).addClass("active"))).show();
			}).eq(0).trigger("click");
		},
		index:function(){
			//首页模块
			$(".indexBar .btnBox .btn").on('click', function(event) {
				event.preventDefault();
				$(this).next().toggle();
			});
			$('body').on('click', function () {
				$(".indexBar .btnBox .btnPop").hide();
			});
			$('.indexBar .btnBox').on('click', function (e) {
				e.stopPropagation();
			});
			$(window).scroll(function (){
				var st = $(this).scrollTop();
				if (st>300) {
					$(".indexBar").addClass('st');
				} else {
					$(".indexBar").removeClass('st');
				}
			});
			//定位跳转
			$('body').on('click', '.letter a', function () {
				var s = $(this).html();
				$(window).scrollTop($("#"+s).offset().top-88);
				$("#showLetter span").html(s);
				$("#showLetter").show().delay(500).hide(0);
			});
			$(".helpIcon").on("click", function() {
				$(this).hide();
				$(".helpTel,.helpWrap").show();
				$(".helpTel").addClass("fadeInRight");
			})
			$(".helpWrap").on("click", function() {
				$(this).hide().removeClass("fadeInRight");
				$(".helpIcon").show();
			})
		},
		user:function(){
			$(".serviceBtn").on("click", function () {
				$(".popBg,.popService").show();
			})
			$(".checkinBtn").on("click", function () {
				$(".popBg,.popCheckin").show();
			})
			$(".popBg").on("click", function () {
				$(this).hide();
				$(".popService,.popCheckin").hide();
			})
			$(".popService,.popCheckin,.hotLine").on("click", function (e) {
				e.stopPropagation();
			})
		},
		flight:function(){
			$("#selectFlight .item").on("click", function(){
				$(this).addClass('active').siblings().removeClass('active');
			})
		},
		cart:function(){
			$("#getCart").on("click", function() {
				$(".drawerMask").show();
				$(".wrapper").addClass("blur");
				$('body,html').css({height:'100%',overflow:'hidden'});
				$(".drawerWrap").show().addClass("fadeInUpBig");
				setTimeout(function(){
					$(".drawerWrap").removeClass("fadeInUpBig");
				},400)
			})
			$("#addCart").on("click", function() {
				$(".wrapper").removeClass("blur");
				$('body,html').css({height:'auto',overflow:'auto'});
				$(".drawerWrap").addClass("fadeOutUpBig");
				setTimeout(function(){
					$(".drawerMask").hide();
					$(".drawerWrap").removeClass("fadeOutUpBig").hide();
				},200)
			})
		}
	}
	common.init();
})
