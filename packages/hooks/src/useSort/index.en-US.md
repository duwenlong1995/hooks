---
nav:
  path: /hooks
---

# useSort

A Hook that handles the order of array objects.

## Examples

### Default usage

<code src="./demo/demo1.tsx" />

## API

```typescript
const [array]=useSort(data, arraySort, { label: 'name' })
```

### Params

| Property          | Description                                                        | Type                     | Default |
| ----------------- | ------------------------------------------------------------------ | ------------------------ | ------- |
| data              | array Array that needs to be processed in order                    | `[{[key: string]: any}]` | -       |
| arraySort         | array array in custom order                                        | `string[]`               | -       |
| { label: 'name' } | label takes a certain key in the data and sorts it according to it | `{ label: string }`      | -       |

### Result

| Property | Description  | Type                     | Default |
| -------- | ------------ | ------------------------ | ------- |
| array    | Sorted array | `[{[key: string]: any}]` |
