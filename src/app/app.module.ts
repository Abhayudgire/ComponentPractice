import { ShortTitlePipe } from './short-title.pipe';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactsService } from './contacts.service';

@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ShortTitlePipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
