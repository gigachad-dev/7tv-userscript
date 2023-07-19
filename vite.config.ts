import { defineConfig } from 'vite'
import Userscript from 'vite-userscript-plugin'
import { author, homepage, license, name, version } from './package.json'

export default defineConfig((config) => {
  return {
    plugins: [
      Userscript({
        fileName: '7tv-userscript',
        entry: 'src/index.ts',
        header: {
          name,
          version,
          author,
          license,
          homepage,
          match: 'https://7tv.app/*'
        },
        server: {
          port: 3000
        }
      })
    ]
  }
})
