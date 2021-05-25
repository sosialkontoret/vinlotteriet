import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Participant } from '@models/participant.model';

@Component({
  selector: 'sk-add-participant',
  templateUrl: './add-participant.component.html',
  styleUrls: ['./add-participant.component.scss'],
})
export class AddParticipantComponent implements OnInit {
  @Output() onAdd = new EventEmitter<Participant>();
  private name: string = '';
  private tickets: number = 0;

  ngOnInit(): void {}

  nameUpdated(name: string): void {
    this.name = name;
  }

  add(): void {
    const participant: Participant = {
      name: this.name,
      numberOfTickets: this.tickets,
    };
    this.onAdd.emit(participant);
    this.name = '';
    this.tickets = 0;
  }
}
