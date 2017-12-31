import { Component, EventEmitter, Input, Output } from '@angular/core';
import { styles } from '@descco/ui-core';

@Component({
  selector: 'ui-button',
  template: `
    <button
      (click)="handleClick($event)"
      type="{{type || 'button'}}"
      class="{{getStyle(style, size)}}">
      {{ text }}
    </button>
  `,
  styleUrls: ['../../../node_modules/@descco/ui-core/lib/css/06-components/button.css']
})
export class UiButtonComponent {
  classes: object;
  @Input() className: string;
  @Input() style: string;
  @Input() type: string;
  @Input() text: string;
  @Input() size: string;
  @Output() onClick: EventEmitter<any> = new EventEmitter<any>();

  constructor() {
    this.classes = styles.button;
  }

  getStyle(style, size) {
    const styleName = this.classes[style] || this.classes['default'];
    const sizeName = this.classes[size] || this.classes['medium'];
    return `${styleName} ${sizeName}`;
  }

  handleClick(event: any) {
    this.onClick.emit(event);
  }
};
