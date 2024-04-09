import { init, project } from '@alilc/lowcode-engine'
import { setupHostEnvironment } from '@knxcloud/lowcode-utils'

import registerPlugins from './plugins/registry'
import './editor.less'

const getUrlParam = (name: string): string | null => {
  if (!name) return null

  const searchParams = window.location.search
  if (!searchParams) return null

  const urlParams = new URLSearchParams(searchParams)
  return urlParams.get(name)
}

void (async () => {
  const preference = new Map()

  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
    ],
  })

  await registerPlugins()

  const client: string = getUrlParam('client') || 'h5'
  const client2deviceMap: Record<string, string> = {
    h5: 'mobile',
    pc: 'default',
  }

  const device: string = client2deviceMap[client] || 'default'
  setupHostEnvironment(project, '/js/vue.runtime.global.js')

  const options = {
    enableCondition: true,
    enableCanvasLock: true,
    supportVariableGlobally: true,
    device,
    simulatorUrl: ['/js/vue-simulator-renderer.js', '/js/vue-simulator-renderer.css'],
  }

  await init(document.getElementById('lce-container')!, options, preference)
})()
