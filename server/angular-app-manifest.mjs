
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://sivakumar-mani.github.io/dev-project',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/dev-project"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 4986, hash: '7733828a01635b1df72eb59aeca87752616a11d6b21ac4dcadff6757242daa35', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1102, hash: '282ad077eeb0f832d6a49740e3bab1f636988720271a7bd41b61233f378faf5e', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 13463, hash: '299e32464113bf69f06b63e430e022323a084939b25c75adeb28840e019c6c93', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-DZ6UBGXD.css': {size: 231612, hash: 'B2Fy9V+bfZo', text: () => import('./assets-chunks/styles-DZ6UBGXD_css.mjs').then(m => m.default)}
  },
};
