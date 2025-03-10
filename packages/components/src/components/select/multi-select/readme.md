# ifx-multiselect



<!-- Auto Generated Below -->


## Properties

| Property       | Attribute        | Description | Type              | Default           |
| -------------- | ---------------- | ----------- | ----------------- | ----------------- |
| `disabled`     | `disabled`       |             | `boolean`         | `false`           |
| `error`        | `error`          |             | `boolean`         | `false`           |
| `errorMessage` | `error-message`  |             | `string`          | `"Error"`         |
| `label`        | `label`          |             | `string`          | `""`              |
| `maxItemCount` | `max-item-count` |             | `number`          | `undefined`       |
| `options`      | `options`        |             | `any[] \| string` | `undefined`       |
| `size`         | `size`           |             | `string`          | `'medium (40px)'` |


## Events

| Event                  | Description | Type               |
| ---------------------- | ----------- | ------------------ |
| `ifxMultiselectIsOpen` |             | `CustomEvent<any>` |
| `ifxSelect`            |             | `CustomEvent<any>` |


## Dependencies

### Depends on

- [ifx-checkbox](../../checkbox)
- [ifx-icon](../../icon)

### Graph
```mermaid
graph TD;
  ifx-multiselect --> ifx-checkbox
  ifx-multiselect --> ifx-icon
  ifx-checkbox --> ifx-icon
  style ifx-multiselect fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
