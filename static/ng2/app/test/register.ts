import { Component, Input, ViewChildren } from '@angular/core';
import {NgForm} from '@angular/forms';
import { UserService } from './user.service';
import { User } from './user';

@Component({
	selector: 'app',
	templateUrl: 'register.template.html',
	providers: [UserService]
})
export class App{ 
	user: User;
	constructor(_us: UserService){
		this.user = _us.user();
		console.log(this.user);
	}
}

@Component({
	selector: 'loginpanel',
	template: `
		<nickname-box [theuser]="theuser"></nickname-box>
		<mobile-box [theuser]="theuser"></mobile-box>
	`,
	directives: [NicknameBox, MobileBox],
	providers: [UserService]
})
export class LoginPanel{
	@Input()
		theuser: User;
	// @ViewChildren(NicknameBox)
	// constructor(){
	// 	console.log(this);
	// }
}

@Component({
	selector: 'nickname-box',
	templateUrl: 'nickname-box.template.html',
	providers: [UserService]
})
export class NicknameBox{
	@Input() theuser: User;
	constructor(){
		console.log(this);
	}
}

@Component({
	selector: 'mobile-box',
	templateUrl: 'mobile-box.template.html',
	providers: [UserService]
})
export class MobileBox{
	@Input() theuser: User;
}