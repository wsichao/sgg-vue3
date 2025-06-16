// import { svgIcons } from './svgIcons/index.vue'
const allGlobalComponent = import.meta.glob('../components/**/*.vue', { eager: true })
export default {
  install: (app: any) => {
    Object.keys(allGlobalComponent).forEach(item => {
      const component = allGlobalComponent[item];
      const componentName = item.split('/')[1] || '';
      app.component(componentName, component.default);
    })
  }
}

// import svgIcons from './svgIcons/index.vue'
// // const allGlobalComponent = import.meta.glob('../components/**/*.vue', { eager: true })
// const allGlobalComponent = { svgIcons }
// export default {
//   install: (app: any) => {
//     Object.keys(allGlobalComponent).forEach(item => {
//       app.component(item, allGlobalComponent[item]);
//     })
//   }
// }