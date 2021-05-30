import { Component, Input, OnInit } from '@angular/core';
import { Participant } from '@models/participant.model';

@Component({
  selector: 'sk-participant-list-item',
  templateUrl: './participant-list-item.component.html',
  styleUrls: ['./participant-list-item.component.scss'],
})
export class ParticipantListItemComponent implements OnInit {
  @Input() participant: Participant;

  ngOnInit(): void {}

  get probabilityOfWin(): number {
    return -1; // TODO
  }
}
