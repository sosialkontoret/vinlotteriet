import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {ValidationService} from '@services/validation';
import {LotteryModel} from '@models/lottery.model';
import {State} from '@models/enums/state.enum';

@Component({
  selector: 'sk-new-lottery-template',
  templateUrl: './new-lottery-template.component.html',
  styleUrls: ['./new-lottery-template.component.scss'],
})
export class NewLotteryTemplateComponent implements OnInit {
  @Input() state: State;
  @Input() userId: string;

  @Output() createLottery = new EventEmitter<LotteryModel>();

  newLotteryForm: FormGroup;
  minDate: Date;
  errorMessage: string;

  get isLoading (): boolean {
    return this.state === State.IsLoading;
  }

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private validationService: ValidationService) {
    this.minDate = new Date();
  }

  ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    this.newLotteryForm = this.fb.group({
      name: ['', Validators.required],
      dateTime: ['', Validators.compose([Validators.required, this.validationService.dateTimeValidation])],
      description: ['', Validators.required],
      numberOfDraws: ['', Validators.compose([Validators.required, this.validationService.validDrawNumber])],
    });
  }

  onCreateLottery(lotteryForm: LotteryModel, valid: boolean) {
    this.errorMessage = null;
    if (this.userId && valid) {
      lotteryForm.userId = this.userId;
      this.createLottery.emit(lotteryForm);
    } else {
      this.errorMessage = 'Something wrong with the form';
      console.error('No valid user id.');
    }
  }

  cancel() {
    this.router.navigate(['profile']);
  }

  get dateTime() {
    return this.newLotteryForm.get('dateTime');
  }

  get description() {
    return this.newLotteryForm.get('description');
  }

  get name() {
    return this.newLotteryForm.get('name');
  }

  get numberOfDraws() {
    return this.newLotteryForm.get('numberOfDraws');
  }
}