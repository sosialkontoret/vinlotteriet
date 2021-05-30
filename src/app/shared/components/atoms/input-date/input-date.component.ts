import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';

@Component({
  selector: 'sk-input-date',
  templateUrl: './input-date.component.html',
  styleUrls: ['./input-date.component.scss'],
})
export class InputDateComponent implements OnInit {
  @Input() value: Date = new Date();
  @Input() placeholder = '';
  @Input() label = '';
  @Input() showLabel = false;

  @Output() valueChange = new EventEmitter<Date>();

  labelClassNames: ClassNames;

  private static labelClassNames(showLabel: boolean): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !showLabel);
  }

  ngOnInit(): void {
    this.labelClassNames = InputDateComponent.labelClassNames(this.showLabel);
  }

  change(event: Event): void {
    const value = (event.target as any)?.value;
    this.valueChange.emit(value);
  }
}
