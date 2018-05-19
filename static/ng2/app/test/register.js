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
var user_service_1 = require("./user.service");
var user_1 = require("./user");
var App = (function () {
    function App(_us) {
        this.user = _us.user();
        console.log(this.user);
    }
    return App;
}());
App = __decorate([
    core_1.Component({
        selector: 'app',
        templateUrl: 'register.template.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], App);
exports.App = App;
var LoginPanel = (function () {
    function LoginPanel() {
    }
    return LoginPanel;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], LoginPanel.prototype, "theuser", void 0);
LoginPanel = __decorate([
    core_1.Component({
        selector: 'loginpanel',
        template: "\n\t\t<nickname-box [theuser]=\"theuser\"></nickname-box>\n\t\t<mobile-box [theuser]=\"theuser\"></mobile-box>\n\t",
        directives: [NicknameBox, MobileBox],
        providers: [user_service_1.UserService]
    })
], LoginPanel);
exports.LoginPanel = LoginPanel;
var NicknameBox = (function () {
    function NicknameBox() {
        console.log(this);
    }
    return NicknameBox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], NicknameBox.prototype, "theuser", void 0);
NicknameBox = __decorate([
    core_1.Component({
        selector: 'nickname-box',
        templateUrl: 'nickname-box.template.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [])
], NicknameBox);
exports.NicknameBox = NicknameBox;
var MobileBox = (function () {
    function MobileBox() {
    }
    return MobileBox;
}());
__decorate([
    core_1.Input(),
    __metadata("design:type", user_1.User)
], MobileBox.prototype, "theuser", void 0);
MobileBox = __decorate([
    core_1.Component({
        selector: 'mobile-box',
        templateUrl: 'mobile-box.template.html',
        providers: [user_service_1.UserService]
    })
], MobileBox);
exports.MobileBox = MobileBox;
//# sourceMappingURL=register.js.map