import { injectAssets } from '@alilc/lowcode-plugin-inject'
import type {
  IPublicModelPluginContext,
  IPublicTypeAssetsJson,
  IPublicTypeRootSchema,
} from '@alilc/lowcode-types'

import { getProjectSchemaToLocalStorage } from '@/utils/store'
// import Logger from '@/utils/Logger'

import assets from '@/assets/assets.json'
import originSchema from '@/assets/schema.json'

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx

      // const assets = await fetch('http://127.0.0.1:9000/assets.json').then((res) =>
      //   res.json()
      // );
      // Logger.log('🚀 ~ file: init.ts:16 ~ init ~ assets:', assets);
      // material.setAssets(assets);

      const loadedAssets = (await injectAssets(assets)) as IPublicTypeAssetsJson
      material.setAssets(loadedAssets)

      const projectSchema = getProjectSchemaToLocalStorage()
      const schema = projectSchema ? projectSchema.componentsTree.pop() : originSchema

      project.onSimulatorRendererReady(() => {
        project.openDocument(schema as IPublicTypeRootSchema)
      })
    },
  }
}

editorInit.pluginName = 'editorInit'

export default editorInit
