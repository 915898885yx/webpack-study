语法检查：eslint-loader eslint
注意：只检查自己写的代码，第三方库不用检查
设置检查规则：
package.json 中 eslintConfig 中设置
"eslintConfig": {
"extends": "airbnb-base"
}
airbnb --> eslint-config-airbnb-base eslint-plugin-import eslint
