import { Injectable } from '@angular/core';

@Injectable()
export class ContactsService {

  constructor() { }

  getContactList() {
    return [
            {
              name: 'Jhon',
              contactNumber: '9923646452',
              email: 'asabhay.udgire@gmail.com'
            },
            {
              name: 'Deo',
              contactNumber: '1111111111',
              email: 'ufd@gmail.com'
            },
            {
              name: 'Abhay',
              contactNumber: '2222222222',
              email: 'psdsd@gmail.com'
            },
            {
              name: 'TestName',
              contactNumber: '3333333333',
              email: 'ueeiwew@gmail.com'
            }
    ];
  }

}
