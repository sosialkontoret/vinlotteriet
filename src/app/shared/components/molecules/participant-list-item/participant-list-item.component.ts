import { Component, Input } from '@angular/core';
import { Participant } from '@models/participant.model';

@Component({
  selector: 'sk-participant-list-item',
  templateUrl: './participant-list-item.component.html',
  styleUrls: ['./participant-list-item.component.scss'],
})
export class ParticipantListItemComponent {
  @Input() participant: Participant | undefined;

  get probabilityOfWin(): number {
    return -1; // TODO
  }
}
