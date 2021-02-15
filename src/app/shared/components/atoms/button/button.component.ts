import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ClassNames } from '@models/class-names';

@Component({
  selector: 'sk-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() variant: 'primary' | 'secondary' = 'primary';

  @Output() onClick = new EventEmitter<void>();

  get buttonContainerClassNames(): ClassNames {
    return new ClassNames('button-container').set(this.variant);
  }

  get buttonClassNames(): ClassNames {
    return new ClassNames('button').set(this.variant);
  }

  ngOnInit(): void {}

  click(): void {
    this.onClick.emit();
  }
}
