import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sk-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputDateComponent,
    },
  ],
})
export class InputDateComponent implements OnInit, ControlValueAccessor {
  @Input() value: Date = new Date();
  @Input() placeholder: string | undefined;
  @Input() label: string | undefined;
  @Input() showLabel = false;

  @Output() valueChange = new EventEmitter<Date>();

  labelClassNames: ClassNames | undefined;

  disabled: boolean = false;
  touched: boolean = false;
  onChange: (value: Date) => void = () => {};
  onTouched = () => {};

  private static labelClassNames(showLabel: boolean): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !showLabel);
  }

  ngOnInit(): void {
    this.labelClassNames = InputDateComponent.labelClassNames(this.showLabel);
  }

  change(event: Event): void {
    this.markAsTouched();
    const value = (event.target as any)?.value;
    this.valueChange.emit(value);
    this.onChange(value);
  }

  writeValue(value: Date): void {
    this.value = value;
  }

  registerOnChange(fn: (value: Date) => void): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  private markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
