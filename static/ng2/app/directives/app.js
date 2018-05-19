"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var markdown = require("markdown");
var Markdown = (function () {
    function Markdown() {
    }
    Markdown.prototype.toHTML = function (md) {
        return markdown.toHTML(md);
    };
    return Markdown;
}());
var MarkdownPanel = (function () {
    function MarkdownPanel(el, md) {
        this.el = el;
        this.md = md;
    }
    MarkdownPanel.prototype.ngAfterContentInit = function () {
        var el = this.el.nativeElement;
        var title = el.querySelector('panel-title');
        var content = el.querySelector('panel-content');
        title.innerHTML = this.md.toHTML(title.innerHTML);
        content.innerHTML = this.md.toHTML(content.innerHTML);
    };
    return MarkdownPanel;
}());
MarkdownPanel = __decorate([
    core_1.Component({
        selector: 'markdown-panel',
        viewProviders: [Markdown],
        styles: [
            ".panel {\n      width: auto;\n      display: inline-block;\n      border: 1px solid black;\n    }\n    .panel-title {\n      border-bottom: 1px solid black;\n      background-color: #eee;\n    }\n    .panel-content,\n    .panel-title {\n      padding: 5px;\n    }"
        ],
        template: "\n    <div class=\"panel\">\n      <div class=\"panel-title\">\n        <ng-content select=\"panel-title\"></ng-content>\n      </div>\n      <div class=\"panel-content\">\n        <ng-content select=\"panel-content\"></ng-content>\n      </div>\n    </div>"
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof core_1.ElementRef !== "undefined" && core_1.ElementRef) === "function" && _a || Object, Markdown])
], MarkdownPanel);
exports.MarkdownPanel = MarkdownPanel;
var App = (function () {
    function App() {
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        template: "\n    <markdown-panel>\n      <panel-title>### Small title</panel-title>\n      <panel-content>\n## Sample title\n* First point\n* Second point\n      </panel-content>\n    </markdown-panel>\n  ",
        directives: [MarkdownPanel]
    }),
    __metadata("design:paramtypes", [])
], App);
exports.App = App;
var _a;
// bootstrap(App);
//# sourceMappingURL=app.js.map