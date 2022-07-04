import { defineComponent } from "vue";

// named exports w/ variable declaration: ok
export const Test = defineComponent({
  render() {
    return (<div>hello vite jsx component</div>);
  },
});
