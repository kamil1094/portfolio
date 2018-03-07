import { AuthService } from './admin/auth.service';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { NavComponent } from './core/nav/nav.component';
import { SectionsComponent } from './core/sections/sections.component';
import { HeaderComponent } from './core/header/header.component';
import { StickyDirective } from './shared/sticky.directive';
import { WindowRef } from './shared/window.service';
import { Ng2PageScrollModule } from 'ng2-page-scroll';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AdminComponent } from './admin/admin.component';
import { FrontComponent } from './front/front.component';
import { SigninComponent } from './admin/signin/signin.component';
import { SwiperModule } from 'angular2-useful-swiper';
import { MdSnackBarModule } from '@angular/material';
import { MdInputModule } from '@angular/material';

const appRoutes: Routes = [
  { path: '', component: FrontComponent },
  { path: 'admin', component: SigninComponent },
  { path: 'admin/authenticated', component: AdminComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    SectionsComponent,
    HeaderComponent,
    StickyDirective,
    AdminComponent,
    FrontComponent,
    SigninComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    Ng2PageScrollModule,
    BrowserAnimationsModule,
    AnimateOnScrollModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(appRoutes),
    SwiperModule,
    MdSnackBarModule,
    MdInputModule
  ],
  providers: [WindowRef, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
