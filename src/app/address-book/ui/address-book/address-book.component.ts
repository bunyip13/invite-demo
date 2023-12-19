import { JsonPipe, KeyValuePipe } from '@angular/common';
import { Component, inject } from '@angular/core';
import { QueryObserverResult } from '@ngneat/query';
import { Observable, tap } from 'rxjs';
import { InviteService } from '../../../invite/data-access/invite.service';
import { AddressBookService } from '../../data-access/address-book.service';

@Component({
  selector: 'app-address-book',
  standalone: true,
  imports: [JsonPipe, KeyValuePipe],
  templateUrl: 'address-book.component.html',
  styleUrl: './address-book.component.scss',
})
export class AddressBookComponent {
  #invitesService = inject(InviteService);
  #addressBookService = inject(AddressBookService);
  addressBook = this.#addressBookService.getAddressBook$().result;
  groups = this.#addressBookService.getGroups$().result;

  addInvite(email: string): void {
    this.#invitesService.addInvite(email);
  }

  addGroup$(
    groupName: string
  ): Observable<QueryObserverResult<string[], Error>> {
    return this.#addressBookService
      .getCounterpartiesFromGroup$(groupName.trim())
      .result$.pipe(
        tap((emails) => {
          if (emails.isSuccess === true) {
            this.#invitesService.addGroupEmails(emails.data);
          }
        })
      );
  }

  addGroupEmails(emails: Array<string>): void {
    this.#invitesService.addGroupEmails(emails);
  }
}
