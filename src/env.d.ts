/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue';
  // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

import '@dcloudio/uni-app';
declare module 'vue' {
  interface ComponentCustomProperties {
    $hy: Uni['$hy'];
  }
}
