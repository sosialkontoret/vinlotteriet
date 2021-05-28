import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Participant} from '@models/participant.model';

@Component({
  selector: 'sk-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss'],
})
export class AddParticipantComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Participant>();
  name: string = '';
  numberOfTickets: number = 1;

  ngOnInit(): void {
  }

  nameUpdated(name: string): void {
    this.name = name;
  }

  numberOfTicketsUpdated(numberOfTickets: number): void {
    this.numberOfTickets = numberOfTickets;
  }

  add(): void {
    if (this.name === '' || this.numberOfTickets <= 0) {
      return;
    }
    const participant: Participant = {
      name: this.name,
      numberOfTickets: this.numberOfTickets,
    };
    this.onAdd.emit(participant);
    this.name = '';
    this.numberOfTickets = 1;
  }
}
