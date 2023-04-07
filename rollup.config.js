// import pkg from './package.json'
// console.log('pkg')
// console.log(pkg)
import typescript from 'rollup-plugin-typescript'

const pkg2 = await import('./package.json', {
  assert: { type: 'json' },
})
const pkg = pkg2.default
// 通过package获取 一般main是cjs的入口 module是esm的入口
// "main": "lib/guide-mini-vue.cjs.js",
//   "module": "lib/guide-mini-vue.esm.js",

export default {
  input: './src/index.ts', //入口文件
  // output:{
  //   file:'./dist/bundle.js',//打包后的存放文件
  //   format:'esm',//输出格式 amd esm/es iife umd cjs
  //   name:'bundleName',//如果iife,umd需要指定一个全局变量
  //   sourcemap:true  //生成bundle.map.js文件，方便调试
  // }
  output: [
    {
      format: 'cjs',
      file: pkg.main,
    },
    {
      format: 'es',
      file: pkg.module,
    },
  ],
  plugins: [typescript()],
}
