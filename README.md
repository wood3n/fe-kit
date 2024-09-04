# fe-kit

front-end react components and dev utils.

<div>
  <img alt="Static Badge" src="https://img.shields.io/badge/node-%3E%3D18-5FA04E?style=for-the-badge&logo=node.js">
  <img alt="Static Badge" src="https://img.shields.io/badge/react-ts-blue?style=for-the-badge&logo=react">
  <img alt="Static Badge" src="https://img.shields.io/badge/storybook-FF4685?style=for-the-badge&logo=storybook&logoColor=fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/nx-143055?style=for-the-badge&logo=nx&logoColor=fff">
  <img alt="Static Badge" src="https://img.shields.io/badge/license-MIT-green?style=for-the-badge">
</div>

## development

### install pnpm and nx

```shell
npm install -g pnpm nx
```

### install dependencies

```shell
pnpm i
```

### start

```shell
pnpm run dev:components

// or

pnpm run dev:utils
```

### commit and add changelog

use `nx release plan` to add your changelog and commit.

```shell
nx release plan

git add . && git commit -m [message]
```
