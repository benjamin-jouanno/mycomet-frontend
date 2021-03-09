import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { CustomTollbarComponent } from './custom-tollbar/custom-tollbar.component';
import { UserTabComponent } from './shared/components/user-tab/user-tab.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { SnackbarComponent } from './shared/components/snackbar/snackbar.component';
import { BottomContactComponent } from './shared/components/bottom-contact/bottom-contact.component';
import { AddUserModalComponent } from './shared/components/add-user-modal/add-user-modal.component';
import { UserPageComponent } from './user-page/user-page.component';
import { CometTabComponent } from './shared/components/comet-tab/comet-tab.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    CustomTollbarComponent,
    UserTabComponent,
    UserEditComponent,
    SnackbarComponent,
    BottomContactComponent,
    AddUserModalComponent,
    UserPageComponent,
    CometTabComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [SnackbarComponent, BottomContactComponent, AddUserModalComponent]
})
export class AppModule { }
