import Inject from '@alilc/lowcode-plugin-inject';
import { init, plugins, project } from '@alilc/lowcode-engine';
import UndoRedoPlugin from '@alilc/lowcode-plugin-undo-redo';
import SchemaPlugin from '@alilc/lowcode-plugin-schema';
import ManualPlugin from '@cdlab996/lowcode-plugin-manual';
import DataSource from '@alilc/lowcode-plugin-datasource-pane';
import { setupHostEnvironment } from '@knxcloud/lowcode-utils';
import SimulatorResizer from '@alilc/lowcode-plugin-simulator-select';
import CodeEditor from '@knxcloud/lowcode-plugin-vue-code-editor';
import SetRefPropPlugin from '@alilc/lowcode-plugin-set-ref-prop';
import RegistryPlugin from './plugins/registry';
import InitPlugin from './plugins/init';
import SetterPlugin from './plugins/setter';
import Actions from './plugins/actions';
import './editor.less';

const getUrlParam = (name: string): string | null => {
  if (!name) return null;

  const searchParams = window.location.search;
  if (!searchParams) return null;

  const urlParams = new URLSearchParams(searchParams);
  return urlParams.get(name);
};

(async () => {
  const preference = new Map();

  preference.set('DataSourcePane', {
    importPlugins: [],
    dataSourceTypes: [
      {
        type: 'fetch',
      },
    ],
  });

  /**
   * More official plugins can be found here
   *
   * https://github.com/alibaba/lowcode-plugins
   */
  const pluginsList = [
    Inject,
    RegistryPlugin,
    UndoRedoPlugin,
    SchemaPlugin,
    DataSource,
    SetterPlugin,
    InitPlugin,
    CodeEditor,
    Actions,
    SimulatorResizer,
    SetRefPropPlugin,
  ];

  for (const plugin of pluginsList) {
    await plugins.register(plugin);
  }
  await plugins.register(ManualPlugin, {
    href: 'https://github.com/cdLab996',
  });

  const client: string = getUrlParam('client') || 'h5';
  const client2deviceMap: Record<string, string> = {
    h5: 'mobile',
    pc: 'default',
  };

  const device: string = client2deviceMap[client] || 'default';
  setupHostEnvironment(project, '/js/vue.runtime.global.js');

  const options = {
    enableCondition: true,
    enableCanvasLock: true,
    supportVariableGlobally: true,
    device,
    simulatorUrl: ['/js/vue-simulator-renderer.js', '/js/vue-simulator-renderer.css'],
  };

  await init(document.getElementById('lce-container')!, options, preference);
})();
