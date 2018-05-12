import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  contacts;

  constructor(contacts: ContactsService) {
    this.contacts = contacts.getContactList();
  }

  ngOnInit() {

  }
}
