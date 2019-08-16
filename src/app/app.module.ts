import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import {MatIconModule} from '@angular/material/icon';
import { LedgerBarComponent } from './ledger-bar/ledger-bar.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, MatIconModule ],
  declarations: [ AppComponent, HelloComponent, SidebarComponent, LedgerBarComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
