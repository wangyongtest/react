# 问题一览表

## 注意事项一： npm run format

- "format": "prettier --write src/**/*.{js,ts,jsx,tsx}" ==》 write 不能加引号，否则报错 jsx,ts 不是内部或外部命令，也不是可运行的程序 或批处理文件

## 注意事项二： 在根路径下 创建 settings.json 文件， 配置 vscode 配置

## 注意事项三：  npm install husky -D

- npm pkg set scripts.prepare = "husky install"
- 在 package.json 中添加 "husky install"
- 执行： npm run prepare
- npx husky add .husky/pre-commit "npm run lint"
- npx husky add .husky/pre-commit "npm run format"
- git add .husky/pre-commit
- git commit -m "keep calm add commit"
