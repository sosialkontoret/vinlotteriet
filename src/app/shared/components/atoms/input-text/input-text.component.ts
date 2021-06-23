import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'sk-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: InputTextComponent,
    },
  ],
})
export class InputTextComponent implements OnInit, ControlValueAccessor {
  @Input() value: string = '';
  @Input() placeholder = '';
  @Input() label = '';
  @Input() type: 'text' | 'email' | 'password' = 'text';
  @Input() showLabel = false;

  @Output() valueChange = new EventEmitter<string>();
  labelClassNames: ClassNames;

  disabled: boolean;
  touched: boolean;
  onChange: (value: string) => void = () => {};
  onTouched = () => {};

  private static labelClassNames(showLabel: boolean): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !showLabel);
  }

  ngOnInit(): void {
    this.labelClassNames = InputTextComponent.labelClassNames(this.showLabel);
  }

  change(event: Event): void {
    this.markAsTouched();
    const value = (event.target as any)?.value;
    this.valueChange.emit(value);
    this.onChange(value);
  }

  writeValue(value: string): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
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
