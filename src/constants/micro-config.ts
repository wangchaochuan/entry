export const reactAppMicroConfig = {
  name: 'react-app',
  entry: '//localhost:3001',
  container: '#react-app-root',
  activeRule: '/react-app',
  props: { appName: 'react', basename: '/react-app' },
};
export const vueAppMicroConfig = {
  name: 'vue-app',
  entry: '//localhost:3002',
  container: '#vue-app-root',
  activeRule: '/vue-app',
  props: { appName: 'vue' },
};
