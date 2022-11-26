import 'core-js/proposals/reflect-metadata';
import '@angular/compiler';
import { defineNgModule, fromNg } from 'piral-ng/convert';
import { AppModule } from './app/app.module';
import { PageComponent } from './app/page.component';
import { MenuComponent } from './app/menu.component';
import type { PiletApi } from 'isz-app';

export function setup(app: PiletApi) {
  defineNgModule(AppModule, {
    // remove the following if you actually want to enable zone.js
    ngZone: 'noop',
  });

  app.registerMenu(fromNg(MenuComponent));

  app.registerPage('/sample', fromNg(PageComponent));
}
