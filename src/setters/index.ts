import type { IPublicModelPluginContext } from '@alilc/lowcode-types'
import AliLowCodeEngineExt from '@cdlab996/lowcode-engine-ext-vue'

import ExpressionSetter from './expression-setter'

// 注册内置 Setter 、事件绑定、变量绑定面板
const setterRegistry = (ctx: IPublicModelPluginContext) => {
  const { setterMap, pluginMap } = AliLowCodeEngineExt
  return {
    name: 'ext-setters-registry',
    init() {
      const { setters, skeleton } = ctx

      /**
       * 注册内置 Setter
       */
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      setters.registerSetter({ ...setterMap, ExpressionSetter })

      // TODO: IconSetter
      // setters.registerSetter('CIconSetter', IconSetter)

      // 注册事件绑定面板
      skeleton.add({
        area: 'centerArea',
        type: 'Widget',
        content: pluginMap.EventBindDialog,
        name: 'eventBindDialog',
        props: {},
      })

      // 注册变量绑定面板
      skeleton.add({
        area: 'centerArea',
        type: 'Widget',
        content: pluginMap.VariableBindDialog,
        name: 'variableBindDialog',
        props: {},
      })
    },
  }
}

setterRegistry.pluginName = 'setterRegistry'

export default setterRegistry
