import { defineComponent } from "vue";
// import "./assets/styles/demo.css";
// 引入别名
import "@styles/demo.css";

// 导入css模块
import fonts from "@styles/cssmodule.module.css";

// named exports w/ variable declaration: ok
export const Test = defineComponent({
  render() {
    return (
      <div class={`${fonts.title}`}>
        hello vite jsx component
        <span>!!!</span>
      </div>
    );
  },
});
