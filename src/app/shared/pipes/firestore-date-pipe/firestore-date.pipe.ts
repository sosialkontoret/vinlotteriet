import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { formatDate } from '@angular/common';
import firebase from 'firebase/app';
import Timestamp = firebase.firestore.Timestamp;

@Pipe({
  name: 'firestoreDate',
})
export class FirestoreDatePipe implements PipeTransform {
  constructor(@Inject(LOCALE_ID) private locale: string) {}

  transform(timestamp: Timestamp, format?: string): string | undefined {
    if (!timestamp?.toDate) {
      return undefined;
    }
    return formatDate(timestamp.toDate(), format || 'medium', this.locale);
  }
}
