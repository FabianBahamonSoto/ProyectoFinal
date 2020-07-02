import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';

import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { LibrosComponent } from './components/libros/libros.component';
import {LibrosService} from './services/libros.service';


const appRoutes: Routes = [
  //{ path: '', component: MenuComponent },
  { path: 'libros', component: LibrosComponent },
];


@NgModule({
  declarations: [
    AppComponent,
    LibrosComponent,
    MenuComponent
  ],
  imports: [

    RouterModule.forRoot(appRoutes),

    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
