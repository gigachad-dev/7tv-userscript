const PREVIEW_SIZE = '.preview-size'
const EMOTE_CARD_WRAPPER = '.emote-card-wrapper'

export function isEmoteElement(el: HTMLElement): boolean {
  if (
    el.classList.contains(PREVIEW_SIZE) ||
    el.classList.contains(EMOTE_CARD_WRAPPER)
  ) {
    return true
  }

  const previewSize = el.closest(PREVIEW_SIZE)
  const emoteCardWrapper = el.closest(EMOTE_CARD_WRAPPER)
  return Boolean(previewSize || emoteCardWrapper)
}
