import "core-js/es6";
import "core-js/es7/reflect";
import "zone.js/dist/zone";
import "@angular/common";
import "@angular/compiler";
import "reflect-metadata";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { AppModule } from "./app/app.module";

platformBrowserDynamic().bootstrapModule(AppModule)
  .then(success => success)
  .catch(err => console.log(err));
