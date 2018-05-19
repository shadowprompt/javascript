var Tree = function(element, options) {
    var $tree = this.$tree = $(element);
    //监听init事件，触发
    $tree.on('init.my.tree', $.proxy(options.onInit, this));
    this.init();
};

Tree.prototype.init = function() {
    console.log('tree init!');
    this.$tree.trigger('init.my.tree');
};

var tree = new Tree('#tree', {
    onInit: function() {
        console.log(this.$tree.outerHeight());
    }
});

var Dragable = function(element, options) {
    var $element = this.$element = $(element);
    //监听init事件，触发
    $element.on('init.my.dragable', $.proxy(options.onInit, this));
    this.init();
};

Dragable.prototype.init = function() {
    console.log('drag init!');
    this.$element.trigger('init.my.dragable');
};

var drag = new Dragable('#tree', {
    onInit: function() {
        console.log('start drag!');
    }
});

function log($e, msg) {
    var $log = $e.children('.log');
    $log.append('<p>' + msg + '</p>');
}

var $p = $('#parent');

$p.on('click.n1.n2.n3.n4', function() {
    log($p, 'click n1 n2 n3 n4');
});
$p.on('click.n1.n2.n3', function() {
    log($p, 'click n1 n2 n3');
});
$p.on('click.n1.n2', function() {
    log($p, 'click n1 n2');
});
$p.on('click.n1', function() {
    log($p, 'click n1');
});
$p.on('click', function() {
    log($p, 'click');
    $p.trigger('hello');
});

$p.on('hello.n1.n2.n3.n4', function() {
    log($p, 'hello n1 n2 n3 n4');
});
$p.on('hello.n1.n2.n3', function() {
    log($p, 'hello n1 n2 n3');
});
$p.on('hello.n1.n2', function() {
    log($p, 'hello n1 n2');
});
$p.on('hello.n1', function() {
    log($p, 'hello n1');
});
$p.on('hello', function() {
    log($p, 'hello');
});