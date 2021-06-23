import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';
import { AbstractControl, ControlValueAccessor, NG_VALIDATORS, NG_VALUE_ACCESSOR, ValidationErrors, Validator } from '@angular/forms';

@Component({
  selector: 'sk-input-increment',
  templateUrl: './input-increment.component.html',
  styleUrls: ['./input-increment.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputIncrementComponent,
    },
    {
      provide: NG_VALIDATORS,
      multi: true,
      useExisting: InputIncrementComponent,
    },
  ],
})
export class InputIncrementComponent implements OnInit, ControlValueAccessor, Validator {
  @Input() value = 1;
  @Input() label = '';
  @Input() showLabel = false;

  @Output() valueChange = new EventEmitter<number>();

  labelClassNames: ClassNames;

  disabled: boolean;
  touched: boolean;
  onChange: (value: number) => void = () => {};
  onTouched = () => {};

  private static labelClassNames(showLabel: boolean): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !showLabel);
  }

  ngOnInit(): void {
    this.labelClassNames = InputIncrementComponent.labelClassNames(this.showLabel);
  }

  change(event: Event): void {
    this.markAsTouched();
    this.value = (event.target as any)?.value;
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  decrement() {
    this.markAsTouched();
    this.value -= 1;
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  increment() {
    this.markAsTouched();
    this.value += 1;
    this.valueChange.emit(this.value);
    this.onChange(this.value);
  }

  writeValue(value: number): void {
    this.value = value;
  }

  registerOnChange(fn: (value: number) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
  }

  validate(control: AbstractControl): ValidationErrors | null {
    const { value } = control;
    if (value <= 0) {
      return {
        mustBePositive: {
          value,
        },
      };
    }
    return null;
  }

  private markAsTouched() {
    if (!this.touched) {
      this.onTouched();
      this.touched = true;
    }
  }
}
