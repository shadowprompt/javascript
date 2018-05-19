define(['jquery', 'iscroll', 'loadData'], function(jquery, IScroll, loadData) {
    var myScroll,
        pullDown = $("#pullDown"),
        pullUp = $("#pullUp"),
        pullDownLabel = $(".pullDownLabel"),
        pullUpLabel = $(".pullUpLabel"),
        loadingStep = 0,
        data, scrollHeight,
        container = $(".container");

    function loadScroll() {
        // console.log(document.getElementById("wrapper"));
        myScroll = new IScroll('#wrapper', {
            scrollY: true,
            freeScroll: true,
            probeType: 3
        });
        // console.log(myScroll);
        scrollHeight = document.body.clientHeight;
        // $(".app-content").css("min-height", scrollHeight);
        // $("#wrapper").css("min-height", scrollHeight);
        // $("#scroller").css("min-height", scrollHeight);
        $("#scroller-container").css("min-height", scrollHeight + 1);
        myScroll.refresh();

        myScroll.on("scroll", function() {
            console.log('this.y/this.maxScrollY= ' + this.y + '/' + this.maxScrollY);
            if (loadingStep == 0 && !pullDown.attr("class").match('refresh|loading') && !pullUp.attr("class").match('refresh')) {
                if (this.y > 40) { //下拉刷新操作
                    pullDown.addClass("refresh").show();
                    pullDownLabel.text("松手刷新数据");
                    loadingStep = 1;
                } else if (this.y < (this.maxScrollY - 80)) { //上拉加载更多
                    pullUp.addClass("refresh").show();
                    pullUpLabel.text("松手加载数据");
                    loadingStep = 1;
                }
            }
            if (loadingStep = 1 && this.y < (this.maxScrollY - 40)) {
                console.log('ding');
            }
        });
        myScroll.on("scrollEnd", function() {
            if (loadingStep == 1) {
                if (pullDown.attr("class").match("refresh")) { //下拉刷新操作
                    pullDown.removeClass("refresh").addClass("loading");
                    pullDownLabel.text("刷新数据");
                    loadingStep = 2;
                    pullDownAction();
                }
                if (pullUp.attr("class").match("refresh")) { //上拉刷新操作
                    pullUp.removeClass("refresh").addClass("loading");
                    pullUp.text("刷新数据");
                    loadingStep = 2;
                    pullUpAction();

                }
            }
        });
    };

    function pullDownAction() {
        setTimeout(function() {
            loadData("insert", function() {
                pullDown.attr('class', '').hide();
                myScroll.refresh();
                loadingStep = 0;
            });
        }, 1000);
    };

    function pullUpAction() {
        setTimeout(function() {
            loadData("append", function() {
                setTimeout(function() {
                    pullUp.attr('class', '').hide();
                    myScroll.refresh();
                    loadingStep = 0;
                }, 2000)

            });

        }, 1000);
    };


    return function init() {
        loadData("append", function() {
            setTimeout(function() {
                loadScroll();
            }, 1000);
        });
    }
})