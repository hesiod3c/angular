import { sandboxOf } from 'angular-playground';
import { UiButtonComponent } from './button.component';

export default sandboxOf(UiButtonComponent)
  .add('Normal', {
    template: `<ui-button>text</ui-button>`
  });
