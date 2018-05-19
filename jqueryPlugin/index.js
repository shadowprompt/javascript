(function() {

    (function(root, factory, plug) {
        factory(root.jQuery, plug); //运行 function($, plug)方法
    })(window, function($, plug) {
        //默认参数
        var __DEFAULTS__ = {
            plugName: 'bv',
            validEvent: 'input',
            allRules: false
        };
        //默认校验规则
        var __RULES__ = {
            required: function() {
                return this.val()!="";
            },
            email: function() {
                return true;
            },
            regex: function(data) {
                return new RegExp(data).test(this.val());
            },
            "min-length": function(data) {
                return this.val().length>Number(data);
            },
        }

        $.fn[plug] = function(options) {
            if (!this.is("form")) return this;

            $.extend(this, __DEFAULTS__, options);
            this.$field = this.find("input, select, textarea");
            var _this = this;

            this.$field.on(this.validEvent, function() {
                var $field = $(this);
                var $group = $field.parents('.form-group:eq(0)').removeClass('has-success');
                var valid = true; //默认验证成功

                $field.siblings('p').remove();

                $.each(__RULES__, function(key, func) {

                    var dataRule = $field.data(__DEFAULTS__.plugName+"-"+key);
                    var dataRuleMsg = $field.data(__DEFAULTS__.plugName+"-"+key+"-message");
                    /* iterate through array or object */
                    if ($field.data(__DEFAULTS__.plugName + '-' + key)) {

                        var result = func.call($field,dataRule);
                        // func.apply($field);
                        // func.bind($field)(); //必须加上后面的()

                        if(!result){
                            valid = false;//验证失败
                            $field.after('<p class=\"text-danger\">' + dataRuleMsg+ '</p>');
                            console.log(key + '=>' + result);
                            if( !_this.allRules ){
                                return false;
                            }
                        }


                    }
                });
                $group.addClass('has-success');
                if(valid){
                    $group.addClass('has-success');
                }else{
                    $group.addClass('has-error');
                }
            })

            this.on('submit', function(){
                console.log(".");
                _this.$field.trigger(_this.validEvent);
                return false;
            })
        }
        $.fn[plug].extendRules = function(rules){
            $.extend(__RULES__, rules);

        }
    }, 'bootstapValidator');

    //调用
    $.fn.bootstapValidator.extendRules({
        "mobile": function(){
            return /^1\d{10}$/.test(this.val());
        }
    })
    $('.myForm').bootstapValidator({
        // validEvent: 'blur',
        allRules: true
    });

})();



//==================================
//
(function() {
    //jQuery插件;
    $.fn.TabSelector = function(options) {
        var arr = ['<div class="table-selector">'];
        arr.push('<lable>', options.label, '</label>');
        arr.push('<ul>');
        options.data.forEach(function(item) {
            arr.push('<li data-value="', item.value, '">');
            arr.push(item.name);
            arr.push('</li>');
        })
        arr.push('</ul></div>');
        this.html(arr.join(''));

        var lastSelected = null;
        this.on('click', 'li', function() {
            var $this = $(this);
            if (lastSelected) {
                lastSelected.removeClass('selected');
            }
            $this.addClass('selected');
            lastSelected = $this;
        });

        return this;
    }

    var opts = {
        label: '选择商品颜色',
        data: [{
            name: '红色',
            value: 'red'
        }, {
            name: '白色',
            value: 'white'
        }, {
            name: '黑色',
            value: 'black'
        }]
    };
    $('#co').TabSelector(opts);

})();