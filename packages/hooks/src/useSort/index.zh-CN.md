---
nav:
  path: /hooks
---

# useSort

处理数组对象顺序的 Hook。

## 代码演示

### 基础用法

<code src="./demo/demo1.tsx" />

## API

```typescript
const [array]=useSort(data, arraySort, { label: 'name' })
```

### Params

| 参数              | 说明                                | 类型                     | 默认值 |
| ----------------- | ----------------------------------- | ------------------------ | ------ |
| data              | array 需要处理顺序的数组            | `[{[key: string]: any}]` | -      |
| arraySort         | array 按照自定义顺序的数组          | `string[]`               | -      |
| { label: 'name' } | label 取data中的某个key并按照其排序 | `{ label: string }`      | -      |

### Result

| 参数  | 说明           | 类型                     | 默认值 |
| ----- | -------------- | ------------------------ | ------ |
| array | 排完顺序的数组 | `[{[key: string]: any}]` |
