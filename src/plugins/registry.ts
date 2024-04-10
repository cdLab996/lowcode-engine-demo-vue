import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import { plugins } from '@alilc/lowcode-engine'

/**
 * More plugins can be found here
 *
 * https://github.com/cdLab996/lowcode-engine-demo-vue?tab=readme-ov-file#-credits
 */

import Inject from '@alilc/lowcode-plugin-inject'
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop'
import ComponentsPane from '@alilc/lowcode-plugin-components-pane'
import DataSourcePanePlugin from '@alilc/lowcode-plugin-datasource-pane'
import SchemaPlugin from '@alilc/lowcode-plugin-schema'
import SimulatorResizer from '@alilc/lowcode-plugin-simulator-select'
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo'
import CodeEditor from '@knxcloud/lowcode-plugin-vue-code-editor'
import ManualPlugin from '@cdlab996/lowcode-plugin-manual'
import DirectiveLoading from '@cdlab996/plugin-directive-loading'
import PluginSetDocUrlProp from '@cdlab996/lowcode-plugin-set-doc-url'

// setters
import SetterPlugin from '../setters/index'

import Actions from './actions'
import ResourceInit from './init'
import { Logo } from '../components/logo/logo'

export default async function registerPlugins() {
  // Inject：支持调试功能
  await plugins.register(Inject)

  // 高级设置面板中设置 ref-id（实现：https://lowcode-engine.cn/site/docs/api/material#%E7%A4%BA%E4%BE%8B-8）
  await plugins.register(SetRefPropPlugin)

  // 高级面板中设置 v-loading 指令
  await plugins.register(DirectiveLoading)

  // 支持给每个组件注入 docUrl
  await plugins.register(PluginSetDocUrlProp)

  // 加载默认的资产包、schema
  await plugins.register(ResourceInit)

  // 注册 logo 和组件面板
  const builtinPluginRegistry = (ctx: IPublicModelPluginContext) => {
    return {
      name: 'builtin-plugin-registry',
      init() {
        const { skeleton, project } = ctx
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
  await plugins.register(builtinPluginRegistry)

  // 注册数据源面板
  await plugins.register(DataSourcePanePlugin)

  // 注册源码面板
  await plugins.register(CodeEditor)

  // 注册 Schema 面板
  await plugins.register(SchemaPlugin)

  // 注册 使用手册
  await plugins.register(ManualPlugin, {
    href: 'https://github.com/cdLab996/lowcode-engine-demo-vue',
  })

  // 画布切换
  await plugins.register(SimulatorResizer)

  // 注册回退/前进
  await plugins.register(UndoRedoPlugin)

  // 注册操作按钮（保存、预览）
  await plugins.register(Actions)

  // 注册 Setter
  await plugins.register(SetterPlugin)
}
