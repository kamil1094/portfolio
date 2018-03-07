import { AuthService } from './auth.service';
import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable, FirebaseObjectObservable } from 'angularfire2/database';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  id:string;
  token: string;
  messages: FirebaseListObservable<any>;
  adminRef: FirebaseObjectObservable<any>;
  userRef: FirebaseObjectObservable<any>;
  constructor(private db: AngularFireDatabase, 
              private authService: AuthService,
              private route: ActivatedRoute,
              private router: Router) 
              {
        this.messages = db.list('/messages');
        this.adminRef = db.object('/roles/admin');
        this.userRef = db.object('/roles/user');
  }

  ngOnInit() {
    
  }
  getToken() {
    firebase.auth().currentUser.getIdToken()
        .then(
            (token: string) => this.token = token
        );
    return this.token;
}

saveAdmin(){
  var id = firebase.auth().currentUser.uid; 
  this.id = id;
  this.adminRef.update({[id]: true}); //needed for a first time
}

saveUser(){
  var id = firebase.auth().currentUser.uid; 
  this.id = id;
  this.userRef.update({[id]: true}); //needed for a first time
}


  onLogout(){
    this.authService.logout()
      .then(
        (success) => {
          console.log('Very well!');
          this.router.navigate([''], {relativeTo: this.route});
        }
      )
      .catch(
        (error) => console.log(error)
      )
  }
 

}
