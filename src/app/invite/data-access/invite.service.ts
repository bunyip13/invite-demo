import { Injectable, Signal, WritableSignal, signal } from '@angular/core';
import { QueryObserverResult, injectQuery } from '@ngneat/query';
import { Result } from '@ngneat/query/lib/types';

@Injectable({
  providedIn: 'root',
})
export class InviteService {
  #query = injectQuery();

  #invites: WritableSignal<Array<string>> = signal([]);
  invites = this.#invites.asReadonly();

  getInvites(): Result<QueryObserverResult<Signal<string[]>, Error>> {
    return this.#query({
      queryKey: ['invites'] as const,
      queryFn: () => {
        return this.#invites.asReadonly();
      },
    });
  }

  addInvite(email: string): void {
    this.#invites.update((invites) => Array.from(new Set([...invites, email])));
  }

  addGroupEmails(emails: Array<string>): void {
    this.#invites.update((invites) =>
      Array.from(new Set([...invites, ...emails]))
    );
  }

  removeInvite(email: string): void {
    this.#invites.update((invites) => invites.filter((item) => item !== email));
  }

  clear(): void {
    this.#invites.set([]);
    alert('Invites sent')
  }
}
