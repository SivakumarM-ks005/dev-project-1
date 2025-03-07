
export default {
  basePath: 'https://sivakumar-mani.github.io/dev-project',
  supportedLocales: {
  "en-US": ""
},
  entryPoints: {
    '': () => import('./main.server.mjs')
  },
};
