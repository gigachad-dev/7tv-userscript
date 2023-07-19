import { el, observeElement } from '@zero-dependency/dom'
import { logger } from './utils/logger.js'
import { videoPlay } from './utils/video-play.js'
import './styles.css'

function bootstrap() {
  const app = document.querySelector('#app')
  if (!app) {
    logger.error('App is not defined')
    return
  }

  document.body.addEventListener('mouseover', (event) => {
    videoPlay(event)
  })

  observeElement(app, () => {
    const images = document.querySelectorAll('img')
    for (const image of images) {
      const video = el('video', {
        loop: true,
        src: image.src.replace('.webp', '.avif'),
        poster: image.src.replace('.webp', '.png')
      })

      video.currentTime = 0.01
      image.replaceWith(video)
    }
  })
}

bootstrap()
