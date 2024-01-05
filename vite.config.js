import {fileURLToPath, URL} from 'node:url'
import process from 'node:process'
import {defineConfig, loadEnv} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'


// https://vitejs.dev/config/
export default defineConfig(({mode}) => {
  const vite_env = loadEnv(mode, process.cwd(), '');
  // console.log("vite_env", vite_env.APP_VERSION);
  const port = vite_env.VITE_FRONTEND_SERVER_PORT;
  const server = `${vite_env.VITE_BACKEND_SERVER_ADDR}:${vite_env.VITE_BACKEND_SERVER_PORT}/`;
  // console.log(server);

  return {
    plugins: [
      vue(),
      vueJsx(),
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      port,
      host: true,
      proxy: {
        '/api': {
          target: server,
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/api/, ''),
        },
      }
    }
  }
})


