import { defineComponent } from "vue";
// import "./assets/styles/demo.css";
// 引入别名
import "@styles/demo.css";

// named exports w/ variable declaration: ok
export const Test = defineComponent({
  render() {
    return <div class="demo">
      hello vite jsx component
      <span>!!!</span>
      </div>;
  },
});
