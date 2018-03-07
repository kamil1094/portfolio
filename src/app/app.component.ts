import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
//some test comments
//another test
  ngOnInit(){
    var config = {
      apiKey: "AIzaSyCVEp-W9Xp-jBm_ZEnDzbqySgwEuAFrdNc",
      authDomain: "portfolio-35d5e.firebaseapp.com",
      databaseURL: "https://portfolio-35d5e.firebaseio.com",
      projectId: "portfolio-35d5e",
      storageBucket: "portfolio-35d5e.appspot.com",
      messagingSenderId: "441220843801"
    };
    firebase.initializeApp(config);
  }
}
