import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {CommonModule} from "@angular/common";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {AppComponent} from "./app.component";
import {provideAnimationsAsync} from "@angular/platform-browser/animations/async";
import { DisplayhelloworldComponent } from './components/displayhelloworld/displayhelloworld.component';
import { ShowhellobuttonComponent } from './components/showhellobutton/showhellobutton.component';
import { FormsModule } from '@angular/forms';
import { DisplaynameComponent } from './components/displayname/displayname.component';

const routes: Routes = [
    {path: ' ', component: DisplayhelloworldComponent},
    {path: 'showhellobutton', component: ShowhellobuttonComponent},
    {path: 'displayname', component: DisplaynameComponent}
];
@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        BrowserAnimationsModule,
        RouterModule.forRoot(routes, {enableTracing: true}),
        FormsModule,
    ], 
    declarations: [
        AppComponent,
        ShowhellobuttonComponent,
        DisplaynameComponent,
    ],
    providers: [
        provideAnimationsAsync(),
    ],
        
    bootstrap: [
        AppComponent,
    ],
    exports: [RouterModule],
})
export class AppModule{}