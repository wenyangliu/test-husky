# Husky + Eslint + Prettier代码提交规范

## 1.安装依赖
```sh
yarn add husky lint-staged prettier -D
```

## 2.生成.husky目录
```sh
npx husky install
```

## 3.添加`pre-commit` hook
```sh
npx husky add .husky/pre-commit 'npx lint-staged'
```

## 4.配置eslint
```sh
npx eslint --init
```
安装提示选择适合自己的项目

## 5.配置prettier

项目根目录创建 `.prettier.json`
```json
{
  "bracketSpacing": false, // 括号不留空格
  "singleQuote": true, // 使用单引号
  "semi": false // 不保留分号
  // ...其他配置参照官网
}
```

## 6.配置lint-staged
项目根目录创建 `lint-staged.config.js`
```json
module.exports = {
  '*.{js,vue}': [
    'eslint --fix', // 代码检查
    'prettier --write' // 代码格式化
  ]
}
```
具体配置可根据项目来

