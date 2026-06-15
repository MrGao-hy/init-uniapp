// #ifndef H5 || APP_PLUS
export type MINI_ENV = 'develop' | 'trial' | 'release';
const { miniProgram } = uni.getAccountInfoSync();
export const mini_env: MINI_ENV = miniProgram.envVersion;
// #endif

// #ifdef H5
export enum H5_ENV {
    DEVELOP = 'develop',
    PRODUCTION = 'production',
}
export const h5_env: H5_ENV = import.meta.env.MODE as H5_ENV;
// #endif

// #ifdef APP_PLUS
export enum APP_ENV {
    DEVELOP = 'development',
    PRODUCTION = 'production',
}
export const app_env: APP_ENV = import.meta.env.MODE as APP_ENV;
// #endif

let apiConfig: IEnvConf;

interface IEnvConf {
    baseUrl: string;
    decoBaseUrl?: string;
}

interface IConfig {
    [key: string]: IEnvConf;
}

const config: IConfig = {
    // 开发环境配置
    development: {
        baseUrl:
            // #ifdef H5
            '/api',
            // #endif
            // #ifdef APP_PLUS
            'http://lbc.free.svipss.top',
            // #endif
    },
    // 生产环境配置
    production: {
        baseUrl:
            // #ifdef H5
            '/api',
            // #endif
            // #ifdef APP_PLUS
            'http://lbc.free.svipss.top',
            // #endif
    },
    // #ifndef H5 || APP_PLUS
    // 开发版
    develop: {
        baseUrl: 'https://www.ahzwyy.com/api', // 业务接口地址
        // baseUrl: 'http://192.168.0.121:8025', // 业务接口地址
        decoBaseUrl: 'https://xryy.hfykcloud.com:99/pamirs', // 装修接口地址
    },
    // 体验版
    trial: {
        baseUrl: 'https://www.ahzwyy.com/api',
        decoBaseUrl: 'https://xryy.hfykcloud.com:99/pamirs',
    },
    // 正式版
    release: {
        baseUrl: 'https://www.ahzwyy.com/api',
        decoBaseUrl: 'https://xryy.hfykcloud.com:99/pamirs',
    },
    // #endif
};


// #ifndef H5 || APP_PLUS
apiConfig = config[mini_env];
// #endif

// #ifdef H5
apiConfig = config[h5_env];
// #endif

// #ifdef APP_PLUS
apiConfig = config[app_env];
// #endif

export { apiConfig };
