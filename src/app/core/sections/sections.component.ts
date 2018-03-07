import { SwiperComponent } from 'angular2-useful-swiper/lib/swiper.module';
import { Component, OnInit, trigger, state, transition, animate, style, ViewChild } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import {Popup} from 'ng2-opd-popup';
import { MdSnackBar } from '@angular/material';

@Component({
  selector: 'app-sections',
  templateUrl: './sections.component.html',
  styleUrls: ['./sections.component.css'],
  animations: [
    trigger('inOut', [
      state('in', style({transform: 'scale(1)'})),
      transition('void => *', [
        style({transform: 'scale(0)'}),
        animate(300)
      ]),
      transition('* => void', [
        animate(300, style({transform: 'scale(0)'}))
      ])
    ])
  ]
})
export class SectionsComponent implements OnInit {

  @ViewChild('swipper1') swipper1: SwiperComponent;
  @ViewChild('swipper2') swipper2: SwiperComponent;
  @ViewChild('popup1') popup1: Popup;

  msgForm: FormGroup;
  messages: FirebaseListObservable<any>;
  constructor(private db: AngularFireDatabase, public snackBar: MdSnackBar) {
    this.messages = db.list('/messages');
  }

  mixed = true;
  frontend = true;
  swiper2 = true;
  swiper1 = true;

  ngOnInit() {
    this.initForm();
  }

  onFrontendClick(){
    this.frontend = true;
    this.mixed = false;
  }

  onMixedClick(){
    this.mixed = true;
    this.frontend = false;
  }

  onAllClick(){
    this.frontend = true;
    this.mixed = true;
  }

  onSwipper2(){
    if(this.swiper2)
      {
        this.swiper2 = false;
        this.swipper2.swiper.stopAutoplay();
      }
      else{
        this.swiper2 = true;
        this.swipper2.swiper.startAutoplay();
      }
  }

  onSwipper1(){
    if(this.swiper1)
      {
        this.swiper1 = false;
        this.swipper1.swiper.stopAutoplay();
      }
      else{
        this.swiper1 = true;
        this.swipper1.swiper.startAutoplay();
      }
  }

  onSubmit(){
    this.messages.push({
      subject: this.msgForm.value.subject,
      phone: this.msgForm.value.phone,
      name: this.msgForm.value.name,
      email: this.msgForm.value.email,
      message: this.msgForm.value.message
    });
    this.snackBar.open('Message sent', '',{
      duration: 2000,
    });
    console.log(this.msgForm.value.subject);
  }

  private initForm(){
    let msgSubject = '';
    let msgPhone = '';
    let msgName = '';
    let msgEmail = '';
    let msgMessage = '';

    this.msgForm = new FormGroup({
      'subject': new FormControl(msgSubject, [
        Validators.required,
        Validators.minLength(1)]),
      'phone': new FormControl(msgPhone),
      'name': new FormControl(msgName),
      'email': new FormControl(msgEmail, [
        Validators.required,
        Validators.email]),
      'message': new FormControl(msgMessage, Validators.required)
    });
  }

    config: Object = {
      spaceBetween: 50,
      loop: true,
      autoplay: 1500,
      effect: 'cube',
      speed: 500,
      autoplayDisableOnInteraction: false
  };
}
