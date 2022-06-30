import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ApiserviceService } from './apiservice.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PasangerFormComponent } from './list-page/pasanger-form.component';
import {TableModule} from 'primeng/table';
import {HttpClientModule} from '@angular/common/http';
import { ShowPageComponent } from './show-page/show-page.component';
import { DeleteComponent } from './delete/delete.component';
import { ConfirmationService, MessageService } from "primeng/api";
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {PaginatorModule} from 'primeng/paginator';
@NgModule({
  declarations: [
    AppComponent,
    PasangerFormComponent,
    ShowPageComponent,
    DeleteComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    TableModule,
    HttpClientModule,
    ConfirmPopupModule,
    ToastModule,
    ButtonModule,
    BrowserAnimationsModule,
    PaginatorModule,
  ],
  providers: [ConfirmationService, MessageService, ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
