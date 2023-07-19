import { isEmoteElement } from './is-emote-card.js'

export function videoPlay(event: Event): void {
  const element = event.target as HTMLElement
  if (!isEmoteElement(element)) return

  const video = element.querySelector('video')
  if (!video || Number.isNaN(video.duration)) return
  video.play()
}
