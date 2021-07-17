import { Component, Input } from '@angular/core';
import { Participant } from '@models/participant.model';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
})
export class ParticipantListComponent {
  @Input() state: State = State.Before;
  @Input() participants: Participant[] = [];

  get noParticipants(): boolean {
    return !this.participants?.length;
  }

  trackParticipant(index: number, participant: Participant): string {
    return participant.name;
  }
}
