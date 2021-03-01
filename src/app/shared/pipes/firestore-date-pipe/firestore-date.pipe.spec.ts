import { FirestoreDatePipe } from './firestore-date.pipe';

describe('FirestoreDatePipe', () => {
  it('onCreate an instance', () => {
    const pipe = new FirestoreDatePipe("");
    expect(pipe).toBeTruthy();
  });
});
