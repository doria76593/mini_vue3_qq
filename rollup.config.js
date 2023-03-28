export default {
    input:'./src/reactivity/index.ts',//入口文件
    output:{
      file:'./dist/bundle.js',//打包后的存放文件
      format:'esm',//输出格式 amd esm/es iife umd cjs
      name:'bundleName',//如果iife,umd需要指定一个全局变量
      sourcemap:true  //生成bundle.map.js文件，方便调试
    }
  }