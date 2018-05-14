# Func by linxianliang

# 使用
### 方法①
```html
<script src="linxljs.min.js"></script>
<script>
  let arr1 = [1,2];
  let arr2 = [1,2];
  console.log(linxljs.arrayEqual(arr1,arr2))
</script>
```

### 方法②
```javascript
//完整引入
const linxljs = require('linxljs')
const arrayEqual = linxljs.arrayEqual()
//按需引入
const arrayEqual = require('linxljs/arrayEqual')
const arrayEqual = arrayEqual()
```

### 方法③

当开发环境有`babel`编译`ES6`语法时：

`npm install --save-dev linxljs`
```javascript
import { arrayEqual } from 'linxljs'
let arr1 = [1,2];
let arr2 = [1,2];
console.log(arrayEqual(arr1,arr2))
```