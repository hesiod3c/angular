import { storiesOf } from '@storybook/angular';
import { withNotes } from '@storybook/addon-notes';
import { action } from '@storybook/addon-actions';

import { UiButtonComponent } from './button.component';

storiesOf('Button', module)
  .add('with text', () => ({
    component: UiButtonComponent,
    props: {
      text: 'Button',
    },
  }));
