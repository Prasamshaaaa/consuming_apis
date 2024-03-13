import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { LabTestsDataListComponent } from './lab-tests-data-list/lab-tests-data-list.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptor.service';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { LabspecimensComponent } from './labspecimens/labspecimens.component';
import { AddSpecimentDialogComponent } from './labspecimens/specimen-add/speciment-add.component';
import { MAT_DIALOG_DEFAULT_OPTIONS, MatDialogModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { SchemeComponent } from './scheme/scheme.component';
import { PriceCategoriesComponent } from './price-categories/price-categories.component';
import { SchemePriceCategoryComponent } from './scheme-price-category/scheme-price-category.component';
import { BillingCreditOrganizationsComponent } from './billing-credit-organizations/billing-credit-organizations.component';
import { Chat1Component } from './chat1/chat1.component';
import { Chat2Component } from './chat2/chat2.component';
import { ChatComponent } from './chat/chat.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LabTestsDataListComponent,
    LabspecimensComponent,
    AddSpecimentDialogComponent,
    HomeComponent,
    NavComponent,
    SchemeComponent,
    PriceCategoriesComponent,
    SchemePriceCategoryComponent,
    BillingCreditOrganizationsComponent,
    Chat1Component,
    Chat2Component,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    ScrollingModule,
    MatDialogModule,
    BrowserAnimationsModule

  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true,
    },
    // For Dialog Box
    {provide: MAT_DIALOG_DEFAULT_OPTIONS, useValue: {hasBackdrop: false}},
    AuthService, AuthGuard
  ],
  bootstrap: [AppComponent],
  
  // For Dialog Box
  entryComponents: [AddSpecimentDialogComponent],

})
export class AppModule { }
