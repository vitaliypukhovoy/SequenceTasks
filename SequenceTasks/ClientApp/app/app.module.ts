import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { Service } from './serv/serv.service';
import { AppComponent } from './app.component';
import { ContainerComponent } from './container/container.component';
import { InContainerComponent } from './in-container/in-container.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'

@NgModule({
    declarations: [
        AppComponent,
        ContainerComponent,
        InContainerComponent
    ],
    imports: [
        BrowserModule, FormsModule, HttpClientModule, ReactiveFormsModule
    ],
    providers: [HttpClientModule, Service],
    bootstrap: [AppComponent]
})
export class AppModule { }
