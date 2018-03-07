import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class AuthService {

    user: Observable<firebase.User>;

    constructor(public afAuth: AngularFireAuth){
        this.user = afAuth.authState;
    }

    signinAdmin(email: string, password: string){
        return firebase.auth().signInWithEmailAndPassword(email, password)
    }

    logout(){
        return firebase.auth().signOut()
    }

    

}