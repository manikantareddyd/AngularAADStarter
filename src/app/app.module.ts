import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import { MsalModule } from '@azure/msal-angular';

import 'bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';

import AuthSettings from './settings/auth.json';

console.log(AuthSettings);

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MsalModule.forRoot(AuthSettings)
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
