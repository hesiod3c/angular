import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { initializePlayground, PlaygroundModule } from 'angular-playground';

initializePlayground('ui-app');
platformBrowserDynamic().bootstrapModule(PlaygroundModule);
