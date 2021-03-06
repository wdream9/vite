import { defineComponent } from "vue";
// 配置css 通过小驼峰进行导入
import {titleSize} from "@styles/cssmodule.module.css";

// 使用css 预处理
// import '@styles/sass-test.scss'

 // 使用less
// import '@styles/less-test.less'

// 使用stylus
import '@styles/stylus-test.styl'

// named exports w/ variable declaration: ok
export const Test = defineComponent({
  render() {
    return (
      // <div class={`${fonts.title}`}>
      <div class={`title ${titleSize}`}>
        hello vite jsx component
        <span>!!!</span>
      </div>
    );
  },
});
