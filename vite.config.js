import vue from '@vitejs/plugin-vue';
import * as path from 'path';
import vitePluginImp from 'vite-plugin-imp';
import { viteVConsole } from 'vite-plugin-vconsole';

// https://vitejs.dev/config/
export default ({ mode }) => {
  let plugins = [
    vue(),
    vitePluginImp({
      libList: [
        {
          libName: 'vant',
          style(name) {
            if (/CompWithoutStyleFile/i.test(name)) {
              // This will not import any style file
              return false;
            }
            return `vant/es/${name}/style/index.js`;
          },
        },
      ],
    })
  ];

  if (mode !== 'release') {
    plugins = [
      ...plugins,
      viteVConsole({
        entry: path.resolve('src/main.js'),
        localEnabled: true,
        enabled: true,
      }),
    ];
  }

  return {
    optimizeDeps: {
      entries: 'vant/es/**/*.js',
    },
    plugins,
  };
};