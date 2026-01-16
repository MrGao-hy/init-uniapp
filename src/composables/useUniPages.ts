import type { PageContext } from '@uni-helper/vite-plugin-uni-pages'

export interface PageOptions {
  /**
   * 是否在 pages.json 中扫描并合并页面
   * @default true
   */
  mergePages: boolean

  /**
   * 用于搜索页面组件的目录路径。
   * @default 'src/pages'
   */
  dir: string

  /**
   * pages.json dir
   * @default "src"
   */
  outDir: string

  /**
   * 排除某些文件
   * @default []
   */
  exclude: string[]
  
  /**
   * 分包目录,把分包的目录填入，分包不要放在pages目录下
   * */
  subPackages: string[]

  /**
   * 设置默认的路由块解析器，或者在 SFC 路由块中使用 `<route lang="xxx">` 格式。
   * @default 'json5'
   */
  routeBlockLang: 'json5' | 'jsonc' | 'json' | 'yaml' | 'yml'

  onBeforeLoadUserConfig: (ctx: PageContext) => void
  onAfterLoadUserConfig: (ctx: PageContext) => void
  onBeforeScanPages: (ctx: PageContext) => void
  onAfterScanPages: (ctx: PageContext) => void
  onBeforeMergePageMetaData: (ctx: PageContext) => void
  onAfterMergePageMetaData: (ctx: PageContext) => void
  onBeforeWriteFile: (ctx: PageContext) => void
  onAfterWriteFile: (ctx: PageContext) => void
}

export const useUniPages: Partial<PageOptions> = {
    exclude: ['**/components/**/**.*'],
}
