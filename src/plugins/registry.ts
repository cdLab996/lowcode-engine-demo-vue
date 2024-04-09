import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import ComponentsPane from '@alilc/lowcode-plugin-components-pane'

import { Logo } from '../components/logo/logo'

const builtinPluginRegistry = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'builtin-plugin-registry',
    init() {
      const { skeleton, project } = ctx
      // 注册 logo 面板
      skeleton.add({
        area: 'topArea',
        type: 'Widget',
        name: 'logo',
        content: Logo,
        contentProps: {
          logo: 'https://img.alicdn.com/imgextra/i4/O1CN013w2bmQ25WAIha4Hx9_!!6000000007533-55-tps-137-26.svg',
          href: 'https://lowcode-engine.cn',
        },
        props: {
          align: 'left',
        },
      })

      // 注册组件面板
      const componentsPane = skeleton.add({
        area: 'leftArea',
        type: 'PanelDock',
        name: 'componentsPane',
        content: ComponentsPane,
        props: {
          align: 'top',
          icon: 'zujianku',
          description: '组件库',
        },
      })
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      // eslint-disable-next-line @typescript-eslint/no-unsafe-call
      componentsPane?.disable?.()
      project.onSimulatorRendererReady(() => {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-expect-error
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        componentsPane?.enable?.()
      })
    },
  }
}

builtinPluginRegistry.pluginName = 'builtinPluginRegistry'

export default builtinPluginRegistry
