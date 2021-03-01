import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { Lottery } from '@models/lottery.model';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Participant } from '@models/participant.model';
import { ValidationUtils } from '@utils/validation';
import { State } from '@models/enums/state.enum';

@Component({
  selector: 'sk-edit-lottery-template',
  templateUrl: './edit-lottery-template.component.html',
  styleUrls: ['./edit-lottery-template.component.scss'],
})
export class EditLotteryTemplateComponent implements OnInit {
  @Input() state: State;
  @Input() lottery: Lottery;
  @Input() lotteryOngoing: boolean;
  @Output() startLottery = new EventEmitter<Lottery>();
  @Output() updated = new EventEmitter<Lottery>();

  newParticipantForm: FormGroup;
  addParticipantError: string;
  countdownFinished: boolean;

  get isLoading(): boolean {
    return this.state === State.IsLoading;
  }

  get name() {
    return this.newParticipantForm.get('name');
  }

  get numberOfTickets() {
    return this.newParticipantForm.get('numberOfTickets');
  }

  get numberOfDrawsDone(): number {
    let numberOfDrawsDone = 0;
     this.lottery?.draws?.forEach(draw => {
       if (draw.started) {
         numberOfDrawsDone += 1;
       }
     });
     return numberOfDrawsDone;
  }

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setupForm();
  }

  addParticipant(participant: Participant, valid: boolean) {
    this.addParticipantError = null;
    if (valid) {
      this.updateForm(participant);
    } else {
      this.addParticipantError = 'Skjema har mangler';
    }
  }

  onStartLottery() {
    this.startLottery.emit(this.lottery);
  }

  deleteParticipant(name: string, index: number) {
    if (!(index >= 0 && name)) {
      return;
    }
    if (!confirm(`Er du sikker på at du vil slette ${name}`)) {
      return;
    }
    this.lottery.participants.splice(index, 1);
    this.updated.emit(this.lottery);
  }

  setCountdownFinished(value: boolean) {
    this.countdownFinished = value;
  }

  private updateForm(participant: Participant) {
    if (!this.lottery?.participants) {
      this.lottery.participants = [];
    }
    participant = this.setParticipantFloatingPosition(participant);
    this.lottery.participants.push(participant);
    this.updated.emit(this.lottery);
    this.resetForm();
  }

  private setParticipantFloatingPosition(participant: Participant) {
    participant.cssTop = EditLotteryTemplateComponent.getRandomInt(25, 98);
    participant.cssLeft = EditLotteryTemplateComponent.getRandomInt(0, 98);
    return participant;
  }

  private resetForm() {
    this.newParticipantForm.reset();
  }

  private setupForm() {
    this.newParticipantForm = this.fb.group({
      name: ['', Validators.required],
      numberOfTickets: ['', Validators.compose([Validators.required, ValidationUtils.validDrawNumber])],
    });
  }

  private static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }
}
