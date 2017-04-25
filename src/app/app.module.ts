import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FileUploadModule} from 'ng2-file-upload';


import {AppComponent} from './app.component';
import {UserComponent} from './user/user.component';
import {HomeComponent} from './home/home.component';
import {LogoComponent} from './shared/logo/logo.component';
import {MenuComponent} from './shared/menu/menu.component';
import {AuthComponent} from './auth/auth.component';
import { RegisterComponent } from './register/register.component';
import { TestUploadComponent } from './test-upload/test-upload.component';
// import { Ng2FileSelectDirective } from './ng2-file-select.directive';


@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    HomeComponent,
    LogoComponent,
    MenuComponent,
    AuthComponent,
    RegisterComponent,
    TestUploadComponent//,
    // Ng2FileSelectDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
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
        path: 'upload',
        component: TestUploadComponent
      },
      {
        path: 'user',
        component: UserComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// todo add a method to fill in req with token in headers
export class AppModule {
}
