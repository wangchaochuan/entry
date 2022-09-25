import { registerMicroApps, start } from 'qiankun';
import { reactAppMicroConfig, vueAppMicroConfig } from '@constants/micro-config';

registerMicroApps([reactAppMicroConfig, vueAppMicroConfig], {
  beforeLoad(app) {
    console.log('before load', app.name);
    return Promise.resolve();
  },
  afterMount(app) {
    console.log('after mount', app.name);
    return Promise.resolve();
  },
  beforeUnmount(app) {
    console.log('before unmount', app.name);
    return Promise.resolve();
  },
});

start();
