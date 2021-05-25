import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ClassNames } from '@models/class-names';

@Component({
  selector: 'sk-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss'],
})
export class InputTextComponent implements OnInit {
  @Input() value: string = '';
  @Input() placeholder: string = '';
  @Input() label: string = '';
  @Input() showLabel = false;

  @Output() onChange = new EventEmitter<string>();

  labelClassNames: ClassNames;

  private static labelClassNames(showLabel: boolean): ClassNames {
    return new ClassNames('label-text').setNoDefault('visually-hidden', !showLabel);
  }

  ngOnInit(): void {
    this.labelClassNames = InputTextComponent.labelClassNames(this.showLabel);
  }

  change(event: Event): void {
    const value = (event.target as any)?.value;
    this.onChange.emit(value);
  }
}
