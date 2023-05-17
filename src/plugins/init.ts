import { injectAssets } from '@alilc/lowcode-plugin-inject';
import { getProjectSchemaToLocalStorage } from '@/utils/store';
import { IPublicModelPluginContext, IPublicTypeAssetsJson } from '@alilc/lowcode-types';
import assets from '@/assets/assets.json';
import vant from '@/assets/vant.json';
import elementPlus from '@/assets/element-plus.json';
import originSchema from '@/assets/schema.json';

const editorInit = (ctx: IPublicModelPluginContext) => {
  return {
    name: 'editor-init',
    async init() {
      const { material, project } = ctx;
      const loadedAssets = await injectAssets(assets);
      material.setAssets(loadedAssets);

      material.loadIncrementalAssets(elementPlus as IPublicTypeAssetsJson);
      material.loadIncrementalAssets(vant as IPublicTypeAssetsJson);

      const projectSchema = getProjectSchemaToLocalStorage();
      const schema = projectSchema ? projectSchema['componentsTree'].pop() : originSchema;

      project.onSimulatorRendererReady(() => {
        project.openDocument(schema);
      });
    },
  };
};

editorInit.pluginName = 'editorInit';

export default editorInit;
