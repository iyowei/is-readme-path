# isReadmePath(path)

> 判定给定路径是否指向一个 README.md。

## 使用

- path {String} 路径，**默认：** `""`；
- 返回 {Boolean} 指向 README.md 为 `true`，否则 `false`。

```js
import {log} from 'console';
import isReadmePath from '@iyowei/is-readme-path';

log(isReadmePath('isReadmePath("~/README.md"))')); // true

```

## 安装

[![Node version](https://img.shields.io/badge/node.js-%3E%3D12.20.0-brightgreen?style=flat&logo=Node.js)](https://nodejs.org/en/download/)

```shell
# Pnpm
pnpm add @iyowei/is-readme-path

# yarn
yarn add @iyowei/is-readme-path

# npm
npm add @iyowei/is-readme-path
```

## 参与贡献
![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)
