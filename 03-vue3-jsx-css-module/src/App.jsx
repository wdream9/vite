import { defineComponent } from "vue";
// import "./assets/styles/demo.css";
// 引入别名
import "@styles/demo.css";

// 导入css模块
// import fonts from "@styles/cssmodule.module.css";

// 配置css 通过小驼峰进行导入
import {titleSize} from "@styles/cssmodule.module.css";

// named exports w/ variable declaration: ok
export const Test = defineComponent({
  render() {
    return (
      // <div class={`${fonts.title}`}>
      <div class={`${titleSize}`}>
        hello vite jsx component
        <span>!!!</span>
      </div>
    );
  },
});
