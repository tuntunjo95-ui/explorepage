import { useState } from 'react'
import StatusBar from '../StatusBar'
import meAvatar from '../../assets/avatars/me_nav.png'
import colorBlue from '../../assets/plaza/color_blue.png'
import colorGreen from '../../assets/plaza/color_green.png'
import colorPurple from '../../assets/plaza/color_purple.png'
import colorOrange from '../../assets/plaza/color_orange.png'
import colorRed from '../../assets/plaza/color_red.png'

const clampFrameRatio = ratio => Math.min(4 / 3, Math.max(3 / 4, ratio))
const imageMeta = (width, height) => {
  const ratio = width / height
  return { ratio, rawRatio: ratio, frameRatio: clampFrameRatio(ratio) }
}

const IMAGE_META = {
  [colorBlue]: imageMeta(1254, 1254),
  [colorGreen]: imageMeta(1086, 1448),
  [colorPurple]: imageMeta(941, 1672),
  [colorOrange]: imageMeta(1448, 1086),
  [colorRed]: imageMeta(1672, 941),
}

function BackIcon() {
  return (
    <svg width="31" height="31" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M20.5 6.5 11 16l9.5 9.5" stroke="currentColor" strokeWidth="3.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function SmileIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <circle cx="14" cy="14" r="10.6" stroke="currentColor" strokeWidth="2.2" />
      <path d="M10.2 11.6v.2M17.8 11.6v.2" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
      <path d="M9.5 16.2c1.35 2.05 3.15 3.05 5.4 3.05 1.9 0 3.3-.82 4.2-2.45" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function ImageIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <rect x="5.1" y="5.3" width="17.8" height="17.4" rx="3.2" stroke="currentColor" strokeWidth="2.2" />
      <path d="m7.7 20.1 5.3-5.25 3.2 3.05 2.15-2.25 3 3.05" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="17.9" cy="10.2" r="1.7" fill="currentColor" />
    </svg>
  )
}

function AudioIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M7.2 18V12M11.7 21.2V8.7M16.2 23V6M20.7 19.5v-11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function StickerIcon() {
  return (
    <svg viewBox="0 0 28 28" fill="none" aria-hidden="true">
      <path d="M7 6.6h12.1c1.2 0 2.2 1 2.2 2.2v12.1H8.8A2.2 2.2 0 0 1 6.6 18.7V7Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <path d="M21.3 14.9 15 20.9v-3.8c0-1.2 1-2.2 2.2-2.2h4.1Z" stroke="currentColor" strokeWidth="2.1" strokeLinejoin="round" />
      <circle cx="19.9" cy="7" r="2.4" fill="#ff7d8c" />
    </svg>
  )
}

function ComposerMediaPreview({ photos }) {
  if (photos.length === 1) {
    const ratio = IMAGE_META[photos[0]]?.ratio || 1
    const singleKind = ratio < 0.9 ? 'portrait' : ratio > 1.2 ? 'landscape' : 'square'
    return (
      <div className="post-media-preview interactive-feed-card">
        <button className={`feed-photo-button single-${singleKind}`} style={{ '--media-ratio': ratio }} type="button" aria-label="preview single image">
          <img className="feed-photo" src={photos[0]} alt="post preview" />
          <span className="post-media-remove">×</span>
        </button>
      </div>
    )
  }

  const firstRatio = IMAGE_META[photos[0]]?.ratio || 1
  return (
    <div className="post-media-preview interactive-feed-card">
      <div className={`feed-gallery-window first-${firstRatio >= 1 ? 'landscape' : 'portrait'}`} style={{ '--media-ratio': firstRatio }}>
        <div className="feed-gallery gallery-mixed" role="list" aria-label="preview multi images">
          {photos.map((photo, index) => {
            const rawRatio = IMAGE_META[photo]?.rawRatio || 1
            const displayRatio = Math.min(4 / 3, Math.max(3 / 4, rawRatio))
            const needsCrop = displayRatio !== rawRatio
            return (
              <button
                key={`${photo}-${index}`}
                className={`feed-gallery-item ${needsCrop ? 'needs-crop' : 'no-crop'}`}
                style={{ '--display-ratio': displayRatio }}
                type="button"
                aria-label={`preview image ${index + 1}`}
              >
                <img className="feed-gallery-img" src={photo} alt="post preview" />
                {index === 0 && <span className="post-media-remove">×</span>}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default function PostComposer({ nav }) {
  const [anonymous, setAnonymous] = useState(false)
  const [mode, setMode] = useState('single')
  const photos = mode === 'single' ? [colorGreen] : [colorGreen, colorOrange, colorRed]

  return (
    <div className="screen post-composer-screen">
      <StatusBar time="16:06" battery={67} />
      <div className="post-composer-header">
        <button className="post-composer-back" type="button" onClick={() => nav('plaza')} aria-label="back">
          <BackIcon />
        </button>
        <h1>Write a Post</h1>
        <button className="post-composer-submit" type="button">Post</button>
      </div>

      <main className="post-composer-content">
        <section className="post-author-row" aria-label="post identity">
          <img src={meAvatar} alt="Joxon" />
          <strong>Joxon</strong>
          <span className="post-author-divider" />
          <span className={anonymous ? 'is-active' : ''}>Anonymous</span>
          <button
            className={`post-anon-switch ${anonymous ? 'on' : ''}`}
            type="button"
            onClick={() => setAnonymous(!anonymous)}
            aria-label="toggle anonymous"
          >
            <span />
          </button>
        </section>

        <div className="post-composer-copy">
          <textarea className="post-composer-text" defaultValue="#เด็กใหม่" aria-label="post text" />

          <div className="post-preview-tabs" role="tablist" aria-label="preview mode">
            <button className={mode === 'single' ? 'active' : ''} type="button" onClick={() => setMode('single')}>单图</button>
            <button className={mode === 'multi' ? 'active' : ''} type="button" onClick={() => setMode('multi')}>多图</button>
          </div>
        </div>

        <ComposerMediaPreview photos={photos} />
      </main>

      <div className="post-composer-toolbar" aria-label="post tools">
        <button type="button" aria-label="emoji"><SmileIcon /></button>
        <button type="button" aria-label="image"><ImageIcon /></button>
        <button className="post-tool-hash" type="button" aria-label="hashtag">#</button>
        <button type="button" aria-label="voice"><AudioIcon /></button>
        <button className="post-tool-sticker" type="button" aria-label="sticker"><StickerIcon /></button>
        <div className="post-home-indicator" />
      </div>
    </div>
  )
}
