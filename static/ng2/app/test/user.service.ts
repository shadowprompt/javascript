import { Injectable } from '@angular/core';

import { User} from './user';

@Injectable()
export class UserService {
	user() : User {
		return {
			nickname: "Hello",
			mobile: 1368
		}
		
	}
}