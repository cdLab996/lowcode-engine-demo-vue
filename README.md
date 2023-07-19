# Lowcode Engine Vue Demo

This is a Lowcode Engine demo based on Vue. You can experience the following versions online:

- Vue 3: [https://lowcode-engine-demo-vue.vercel.app/](https://lowcode-engine-demo-vue.vercel.app/)
- Vue 2.7: [https://lowcode-engine-demo-vue2-7.vercel.app/](https://lowcode-engine-demo-vue2-7.vercel.app/)
- Vue 2.7 Examples: [https://lowcode-engine-demo-vue2-7-examples.vercel.app/](https://lowcode-engine-demo-vue2-7-examples.vercel.app/)

## Running the Demo

```bash
git clone https://github.com/cdLab996/lowcode-engine-demo-vue.git
cd lowcode-engine-demo-vue
pnpm install
pnpm start
```

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

## License

This is a fork
from [lowcode-engine-demo](https://github.com/KNXCloud/lowcode-engine-demo)
