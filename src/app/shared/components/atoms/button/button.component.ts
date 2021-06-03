import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ClassNames } from '@models/class-names';

@Component({
  selector: 'sk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  @Output() clicked = new EventEmitter<void>();

  get buttonContainerClassNames(): ClassNames {
    return new ClassNames('button-container').set(this.variant);
  }

  get buttonClassNames(): ClassNames {
    return new ClassNames('button').set(this.variant);
  }

  click(): void {
    this.clicked.emit();
  }
}
