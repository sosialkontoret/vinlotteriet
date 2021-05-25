import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '../../../models/participant.model';
import { State } from '../../../models/enums/state.enum';

@Component({
  selector: 'sk-participant-list',
  templateUrl: './participant-list.component.html',
  styleUrls: ['./participant-list.component.scss'],
})
export class ParticipantListComponent implements OnInit {
  @Input() state: State;
  @Input() participants: Participant[];

  get noParticipants(): boolean {
    return !this.participants?.length;
  }

  ngOnInit(): void {}

  trackParticipant(index: number, participant: Participant): string {
    return participant.name;
  }
}
