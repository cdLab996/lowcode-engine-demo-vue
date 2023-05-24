# lowcode-engine-demo-vue

This is the Lowcode Engine Vue demo, and you can check it out live [here](https://lowcode-engine-demo-vue.vercel.app/).

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
