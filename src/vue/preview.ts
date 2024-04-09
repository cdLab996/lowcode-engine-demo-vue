/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */

import { h, createApp, toRaw, Suspense } from 'vue'

import type { Asset, IPublicTypeComponentMap, IPublicTypePackage } from '@alilc/lowcode-types'
import VueRenderer from '@knxcloud/lowcode-vue-renderer'
import { buildComponents, AssetLoader } from '@knxcloud/lowcode-utils'

import { getPackgesToLocalStorage, getProjectSchemaToLocalStorage } from '../utils/store'

const init = async () => {
  const packages = getPackgesToLocalStorage()
  const projectSchema = getProjectSchemaToLocalStorage()
  const { componentsMap: componentsMapArray = [], componentsTree = [] } =
    projectSchema || {}

  const componentsMap: {
    [key: string]: IPublicTypeComponentMap
  } = {}
  componentsMapArray.forEach((component) => {
    if (component.componentName) {
      componentsMap[component.componentName] = component
    }
  })

  const libraryMap: Record<string, string> = {}
  const libraryAsset: Asset = []
  // TODO?: renderUrls is deprecated
  // @ts-ignore
  packages.forEach(({ package: _package, library, urls, renderUrls }) => {
    if (_package) {
      libraryMap[_package] = library
    }
    if (renderUrls) {
      libraryAsset.push(renderUrls)
    } else if (urls) {
      libraryAsset.push(urls)
    }
  })
  await new AssetLoader().load(libraryAsset)
  const components = await buildComponents(libraryMap, componentsMap)

  return { schema: componentsTree[0], components }
}

void (async () => {
  const { schema, components } = await init()
  const app = createApp(() => {
    return h('div', { class: 'lowcode-plugin-sample-preview' }, [
      h(Suspense, null, {
        default: () =>
          h(VueRenderer, {
            class: 'lowcode-plugin-sample-preview-content',
            schema: toRaw(schema),
            components: toRaw(components),
          }),
        fallback: () =>
          h('div', { class: 'lowcode-plugin-sample-preview-loading' }, 'loading...'),
      }),
    ])
  })
  app.mount('#lce-container')
})()
