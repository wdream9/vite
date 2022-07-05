import { defineComponent } from "vue";
import logo from './assets/logo.png?url' 
// import main from './main?raw'

// console.log(logo)
// console.log(main)

const imgUrl = new URL('./assets/logo.png',import.meta.url).href
console.log(imgUrl)
export const Test = defineComponent({
  render() {
    return (
      // <div class={`${fonts.title}`}>
      <div>
        hello vite jsx component
        <span>!!!</span>
        <img src={logo} alt="" />
      </div>
    );
  },
});
