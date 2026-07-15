/// <reference types="vite/client" />

// import '@dcloudio/uni-app';
// declare module 'vue' {
//   interface ComponentCustomProperties {
//     $hy: Uni['$hy'];
//   }
// }

declare module '*.vue' {
    import type { DefineComponent } from 'vue';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    const component: DefineComponent<{}, {}, any>;
    export default component;
}