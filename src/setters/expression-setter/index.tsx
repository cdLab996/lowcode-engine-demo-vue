/**
 * 扩展官方的 ExpressionSetter 组件
 */
import { isJSExpression } from '@alilc/lowcode-utils'
import AliLowCodeEngineExt from '@cdlab996/lowcode-engine-ext-vue'
import { project } from '@alilc/lowcode-engine'

import Logger from '@/utils/Logger'

const ReactExpressionSetter = AliLowCodeEngineExt.setterMap.ExpressionSetter
const ReactExpressionSetterView = ReactExpressionSetter.component

function isPlainObject(val: unknown): val is Record<string, any> {
  return Object.prototype.toString.call(val) === '[object Object]'
}

function flatObject(
  obj: unknown,
  parentPath: string[] = [],
  target: Record<string, any> = {}
): Record<string, any> {
  if (obj && isPlainObject(obj)) {
    for (const key in obj) {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      const value = obj[key]
      const path = parentPath.concat(key)
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      target[path.join('.')] = value
      isPlainObject(value) && flatObject(value, path, target)
    }
  }
  return target
}

class ExpressionSetterView extends ReactExpressionSetterView {
  getDataSource(): string[] {
    const schema = project.exportSchema()
    const stateMap = schema.componentsTree[0].state
    const dataSource = []

    const datasourceMap = schema.componentsTree[0]?.dataSource
    const list = datasourceMap?.list || []

    for (const key in stateMap) {
      dataSource.push(`this.${key}`)

      const state = stateMap[key]
      if (isJSExpression(state)) {
        try {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-implied-eval, no-new-func
          const data = new Function(`return ${state.value}`)()
          const flatted = flatObject(data, ['this', key])
          if (isPlainObject(flatted)) {
            dataSource.push(...Object.keys(flatted))
          }
        } catch (err) {
          Logger.error('parse error', err)
        }
      }
    }

    for (const item of list) {
      if (item && item.id) {
        dataSource.push(`this.${item.id}`)
      }
    }

    return dataSource
  }
}

const ExpressionSetter = {
  ...ReactExpressionSetter,
  component: ExpressionSetterView,
}

export default ExpressionSetter
