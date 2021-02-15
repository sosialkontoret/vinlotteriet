import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';

@Component({
  selector: 'sk-input-password',
  templateUrl: './input-password.component.html',
  styleUrls: ['./input-password.component.scss'],
})
export class InputPasswordComponent implements OnInit {
  @Input() placeholder: string;
  @Input() label: string;
  @Input() showLabel: boolean;

  @Output() onChange = new EventEmitter<string>();

  @Input() set value(value: string) {
    this.mValue = value ?? '';
  }

  get value(): string {
    return this.mValue ?? '';
  }

  private mValue: string;

  get labelTextClassNames(): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !this.showLabel);
  }

  constructor() {}

  ngOnInit(): void {}

  change(value: string): void {
    this.onChange.emit(value);
  }
}