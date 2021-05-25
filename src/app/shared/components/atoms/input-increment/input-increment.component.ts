import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ClassNames} from '../../../models/class-names';

@Component({
  selector: 'sk-input-increment',
  templateUrl: './input-increment.component.html',
  styleUrls: ['./input-increment.component.scss']
})
export class InputIncrementComponent implements OnInit {
  @Input() value: number = 1;
  @Input() min: number = 1;
  @Input() max: number = 999;
  @Input() label: string = '';
  @Input() showLabel = false;

  @Output() onChange = new EventEmitter<number>();

  labelClassNames: ClassNames;

  private static labelClassNames(showLabel: boolean): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !showLabel);
  }

  ngOnInit(): void {
    this.labelClassNames = InputIncrementComponent.labelClassNames(this.showLabel);
  }

  change(event: Event): void {
    const value = (event.target as any)?.value;
    let safeValue = value < this.min ? this.min : value;
    safeValue = safeValue > this.max ? this.max : safeValue
    this.value = safeValue;
    this.onChange.emit(safeValue);
  }

  decrement() {
    if (this.value > this.min) {
      this.value--;
      this.onChange.emit(this.value);
    }
  }

  increment() {
    if (this.max === undefined || this.value < this.max) {
      this.value++;
      this.onChange.emit(this.value);
    }
  }
}
