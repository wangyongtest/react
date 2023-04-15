module.exports = {
  // 肩头函数只有一个参数时可以忽略括号
  arrowParents: 'avoid',
  // 括号内部不要出现空格
  bracketSpacing: true,
  // 行结束符使用 Unix 格式
  endOfLine: 'lf',
  // true： put > on the last line instead of at a new line
  jsxBracketSameLine: false,
  // 行宽
  printWidth: 100,
  // 换行方式
  proseWrap: 'preserve',
  // 分号
  semi: false,
  // 使用单引号
  singleQuote: true,
  // 缩进
  tabWidth: 2,
  // 使用tab缩进
  useTab: false,
  // 后置逗号，多行对象、数组在最后一行增加逗号
  trailingComma: 'es5',
  parser: 'typescript',
}
