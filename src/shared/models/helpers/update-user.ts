import {User} from "../user";
import {DatePipe} from "@angular/common";
export class UpdateUser {
    username: string;
    firstname: string;
    lastname: string;
    birthDate: string;
    email: string;

    constructor(user: User){
        this.username = user.username;
        this.firstname = user.firstname;
        this.lastname = user.lastname;
        this.birthDate = new DatePipe('en-US').transform(user.birthDate, 'y-MM-dd');
        this.email = user.email;
    }
}
