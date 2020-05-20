import { Component } from '@angular/core';
import { WithDecorator } from './models/decorator-model';
import { logMessage } from './models/log-message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TypeScript - HALO';
  version: number;
  get hexVersion(): string {
    try {
    return this.version.toString(16);

    // const safeVersion = this.version || 0;
    // return safeVersion.toString(16);

    // const safestVersion = Number(this.version);
    // if (isNaN(safestVersion)) {
    //   return '';
    // }
    // return safestVersion.toString(16);
    } catch (error) {
      logMessage({ error });
    }
  }

  constructor() {
    const decoratorModel = new WithDecorator();
    logMessage({ message: 'Made a decorator model:'});
    console.dir(decoratorModel);
  }
}
