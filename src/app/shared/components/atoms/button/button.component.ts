import { Component, Input, Output, EventEmitter, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ClassNames } from '@models/class-names';
import { AngularUtils } from '@utils/angular';

@Component({
  selector: 'sk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit, OnChanges {
  @Input() variant: 'primary' | 'secondary' = 'primary';
  @Input() type: 'submit' | 'button' = 'button';

  @Output() clicked = new EventEmitter<void>();

  buttonContainerClassNames: ClassNames = ButtonComponent.buttonContainerClassNames(this.variant);
  buttonClassNames: ClassNames = ButtonComponent.buttonClassNames(this.variant);

  private static buttonContainerClassNames(variant: string): ClassNames {
    return new ClassNames('button-container').set(variant);
  }

  private static buttonClassNames(variant: string): ClassNames {
    return new ClassNames('button').set(variant);
  }

  click(): void {
    this.clicked.emit();
  }

  ngOnInit(): void {
    this.updateClassNames();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (AngularUtils.changed(changes.variant)) {
      this.updateClassNames();
    }
  }

  private updateClassNames(): void {
    this.buttonContainerClassNames = ButtonComponent.buttonContainerClassNames(this.variant);
    this.buttonClassNames = ButtonComponent.buttonClassNames(this.variant);
  }
}
