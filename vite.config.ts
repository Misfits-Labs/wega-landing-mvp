import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import autoprefixer from 'autoprefixer';
// https://vitejs.dev/config/
export default ({ mode }) => {

  process.env = { ...process.env, ...loadEnv(mode, process.cwd())};
  return defineConfig({
    optimizeDeps: {
      esbuildOptions: {
        target: 'esnext',
      },
    },
    esbuild: {
      // https://github.com/vitejs/vite/issues/8644#issuecomment-1159308803
      logOverride: { 'this-is-undefined-in-esm': 'silent' },
    },
    css: {
      postcss: {
        plugins: [autoprefixer({overrideBrowserslist: ["last 5 version"]})],
      },
    },
    plugins: [
      react({
        babel: {
          plugins: [
            'babel-plugin-macros', 
            'babel-plugin-styled-components'
          ]
        }
      }),

    ],
  })
  
}
