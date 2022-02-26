import { TextArticle } from 'src/components/models'
export interface InfoStateInterface {
  articles: Array<TextArticle>,
}
const state: InfoStateInterface = {
  articles: [
    {
      title: 'Vue JS',
      link: 'https://vuejs.org',
      text: 'JavaScript-фреймворк с открытым исходным кодом для создания пользовательских интерфейсов.Легко интегрируется в проекты с использованием других JavaScript-библиотек. Может функционировать как веб-фреймворк для разработки одностраничных приложений в реактивном стиле.',
      pic: 'https://cdn1.savepice.ru/uploads/2022/2/26/670cb75549ad5ceb2ef807a35e6a801b-full.png'
    },
    {
      title: 'Quasar',
      link: 'https://quasar.dev/',
      text: 'Quasar Framework - это платформа на основе Vue.JS с открытым исходным кодом для создания приложений с единой базой кода и их развертывания в Интернете как SPA, PWA, SSR, в мобильном приложении, используя Cordova для iOS и Android, а также в Настольное приложение с использованием Electron для Mac, Windows и Linux.',
      pic: 'https://cdn1.savepice.ru/uploads/2022/2/26/d127ea45c70cbf6dfabc4f9e7098111e-full.png'
    },
    {
      title: 'Vuex ',
      link: 'https://vuex.vuejs.org/',
      text: 'Vuex — паттерн управления состоянием + библиотека для приложений на Vue.js. Он служит централизованным хранилищем данных для всех компонентов приложения с правилами, гарантирующими, что состояние может быть изменено только предсказуемым образом. Vuex интегрируется с официальным расширением vue-devtools (opens new window), предоставляя «из коробки» такие продвинутые возможности, как «машину времени» для отладки и экспорт/импорт слепков состояния данных',
      pic: 'https://cdn1.savepice.ru/uploads/2022/2/26/9ebb46fb79a63a4c811008b3da01863b-full.png'
    },
    {
      title: 'Vue Router ',
      link: 'https://router.vuejs.org/',
      text: 'Vue-Router - это пакет JavaScript, который позволяет настроить маршрутизацию для одностраничных приложений (SPA). SPA относится к веб-приложению, которое обслуживает только одну index.html и динамически отображает контент, что, скорее всего, является способом настройки современных JavaScript-фреймворков, таких как React.js или Vue.js.',
      pic: 'https://cdn1.savepice.ru/uploads/2022/2/26/cbabdad502f316149d5483e5c62d2308-full.jpg'
    },
    {
      title: 'Stylus',
      link: 'https://stylus-lang.com/',
      text: 'Stylus — это препроцессор CSS, использующий SASS-подобный синтаксис с возможностью использовать математические операторы (унарные/бинарные)',
      pic: 'https://cdn1.savepice.ru/uploads/2022/2/26/4a22d056f2f7b2d49c77f659f45c9591-full.png'
    }
  ]
}
export default state
