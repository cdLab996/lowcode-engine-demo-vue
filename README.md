# 🚀 Lowcode Engine Vue Demo

This is a Lowcode Engine demo based on Vue. You can experience the following versions online:

- Vue 3: [https://lowcode-engine-demo-vue.vercel.app/](https://lowcode-engine-demo-vue.vercel.app/)
- Vue 2.7: [https://lowcode-engine-demo-vue2-7.vercel.app/](https://lowcode-engine-demo-vue2-7.vercel.app/)
- Vue 2.7 Examples: [https://lowcode-engine-demo-vue2-7-examples.vercel.app/](https://lowcode-engine-demo-vue2-7-examples.vercel.app/)

## Getting Started

run the development server:

Recommended versions:

- node `^v16.14.0`
- pnpm `^8.15.4`

```bash
pnpm install

pnpm run dev
```

Open [http://localhost:5577](http://localhost:5577) with your browser to see the result.

## Usage Considerations

When using variables:

- `this.props.xxx` -> `this.xxx`
- `this.state.xxx` -> `this.xxx`

At present, the vue code editor has not been adapted yet. You can directly edit the code using the react code editor.

- The content within `state` will automatically convert to vue `data`.
- Lifecycle events will automatically adapt to vue lifecycle.
  - `componentDidMount` -> `onMounted`
  - `componentDidCatch` -> `onErrorCaptured`
  - `shouldComponentUpdate` -> `onBeforeUpdate`
  - `componentWillUnmount` -> `onBeforeUnmount`
- All other methods will automatically convert to vue `methods`.

## ⚡ Credits

Code built with the help of these related projects:

- [@alib/build-scripts](https://github.com/ice-lab/build-scripts) for development and build.
- [@alilc/lowcode-plugin-components-pane](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-components-pane) Lowcode Engine - Lowcode Plugin Component Panel
- [@alilc/lowcode-plugin-datasource-pane](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-datasource-pane) Lowcode Engine - Datasource Panel Plugin
- [@alilc/lowcode-plugin-inject](https://github.com/alibaba/lowcode-tools/tree/main/packages/lowcode-plugin-inject) Lowcode Engine - In-project Debugging Plugin
- [@alilc/lowcode-plugin-schema](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-schema) Lowcode Engine - View Lowcode Engine Schema
- [@alilc/lowcode-plugin-set-ref-prop](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-set-ref-prop) Lowcode Engine - Ability to Set ref-id in the Advanced Settings Panel
- [@alilc/lowcode-plugin-simulator-select](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-simulator-size) Lowcode Engine - Canvas Switching
- [@alilc/lowcode-plugin-undo-redo](https://github.com/alibaba/lowcode-plugins/tree/main/packages/plugin-undo-redo) Lowcode Engine - Lowcode Plugin Undo and Redo
- [@alilc/lowcode-types](https://github.com/alibaba/lowcode-engine/tree/main/packages/types) Lowcode Engine - Type Definitions
- [@knxcloud/lowcode-plugin-vue-code-editor](https://github.com/KNXCloud/lowcode-engine-plugins/tree/main/packages/plugin-vue-code-editor) Lowcode Engine - Vue Code Editor
- [@knxcloud/lowcode-utils](https://github.com/KNXCloud/lowcode-engine-vue/tree/main/packages/utils) Lowcode Engine - Utility Library for @knxcloud Packages
- [@knxcloud/lowcode-vue-renderer](https://github.com/KNXCloud/lowcode-engine-vue/tree/main/packages/vue-renderer) Lowcode Engine - Vue Renderer
- [@knxcloud/lowcode-vue-simulator-renderer](https://github.com/KNXCloud/lowcode-engine-vue/tree/main/packages/vue-simulator-renderer) Lowcode Engine - Vue Simulator Renderer
- [@cdlab996/lowcode-plugin-manual](https://github.com/cdlab996/lowcode-plugin-manual) Lowcode Engine - Lowcode Plugin Manual (Due to the official plugins not supporting URL configuration, it has been separated)
- [@cdlab996/lowcode-engine-ext-vue](https://github.com/cdlab996/lowcode-engine-ext-vue) Lowcode Engine - Adapting Vue Setters
- [@cdlab996/plugin-directive-loading](https://github.com/cdlab996/plugin-directive-loading) Lowcode Engine - Vue Custom Directive
- [@cdlab996/antd-lowcode-materials](https://github.com/cdLab996/lowcode-engine-materials-vue/tree/main/packages/ant-design-vue) Lowcode Engine - Ant Design Vue Materials
- [@cdlab996/element-plus-lowcode-materials](https://github.com/cdLab996/lowcode-engine-materials-vue/tree/main/packages/element-plus) Lowcode Engine - Element Plus Materials
- [@cdlab996/vant-lowcode-materials](https://github.com/cdLab996/lowcode-engine-materials-vue/tree/main/packages/vant) Lowcode Engine - Vant Materials

## 📜 License

[MIT](./LICENSE) License &copy; 2023-PRESENT [cdLab996](https://github.com/cdLab996)
