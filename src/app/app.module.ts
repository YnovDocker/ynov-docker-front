import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';
import {CoolStorageModule} from 'angular2-cool-storage';

import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';
import {LogoComponent} from './shared/logo/logo.component';
import {MenuComponent} from './shared/menu/menu.component';
import {AuthComponent} from './auth/auth.component';
import {RegisterComponent} from './register/register.component';
import {TestUploadComponent} from './manage/test-upload/test-upload.component';
import {LogoutComponent} from './logout/logout.component';
import {ViewerComponent} from './viewer/viewer.component';
import {PanelComponent} from './manage/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LogoComponent,
    MenuComponent,
    AuthComponent,
    RegisterComponent,
    TestUploadComponent,
    LogoutComponent,
    ViewerComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    CoolStorageModule,
    FileUploadModule,
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'auth',
        component: AuthComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'user',
        component: UserComponent
      },
      {
        path: 'manage',
        component: PanelComponent
      },
      {
        path: 'view',
        component: ViewerComponent
      },
      {
        path: 'logout',
        component: LogoutComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// todo add a method to fill in req with token in headers
export class AppModule {
}
