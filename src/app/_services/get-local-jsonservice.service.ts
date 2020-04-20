//service without injectuble
import { User } from '../_models/user';
export class GetLocalJSONServiceService {

        // array in local storage for registered users
     users = JSON.parse(localStorage.getItem('users')) || [];
    constructor() {
    }
    getUsers(): User[] {


        return this.users.sort(function (a, b) {
            return parseInt(a.id) - parseInt(b.id)
        });
    }
}
