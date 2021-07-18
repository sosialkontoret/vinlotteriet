import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';

@Component({
  selector: 'sk-input-email',
  templateUrl: './input-email.component.html',
  styleUrls: ['./input-email.component.scss'],
})
export class InputEmailComponent {
  @Input() placeholder: string | undefined;
  @Input() label: string | undefined;
  @Input() showLabel = false;

  @Output() valueChange = new EventEmitter<string>();

  @Input() set value(value: string) {
    this.mValue = value ?? '';
  }

  get value(): string {
    return this.mValue ?? '';
  }

  private mValue: string = '';

  get labelTextClassNames(): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !this.showLabel);
  }

  change(event: Event): void {
    const value = (event.target as any)?.value;
    this.valueChange.emit(value);
  }
}
