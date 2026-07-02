import { useEffect, useMemo, useRef, useState } from 'react'
import StatusBar from '../StatusBar'
import BottomNav from '../BottomNav'
import senjaPhoto from '../../assets/plaza/senja_kaaba.jpg'
import senjaAvatar from '../../assets/plaza/senja_avatar.png'
import santyAvatar from '../../assets/plaza/santy_avatar.png'
import dedeAvatar from '../../assets/plaza/dede_avatar.png'
import colorBlue from '../../assets/plaza/color_blue.png'
import colorGreen from '../../assets/plaza/color_green.png'
import colorPurple from '../../assets/plaza/color_purple.png'
import colorOrange from '../../assets/plaza/color_orange.png'
import colorRed from '../../assets/plaza/color_red.png'
import bethAvatar from '../../assets/avatars/beth.png'
import roseAvatar from '../../assets/avatars/rose.png'
import blueAvatar from '../../assets/avatars/blue.png'
import calistaAvatar from '../../assets/avatars/calista.png'
import tikaaAvatar from '../../assets/avatars/tikaa.png'
import meAvatar from '../../assets/avatars/me.png'
import meNav from '../../assets/avatars/me_nav.png'
import pinnedFlowers from '../../assets/profile/pinned_flowers.jpg'
import seaPost from '../../assets/profile/sea_post_full.jpg'
import profileHero from '../../assets/profile/profile_hero.jpg'
import cardParty from '../../assets/match/card_party.png'
import cardVibe from '../../assets/match/card_vibe.png'
import cardVoice from '../../assets/match/card_voice.png'
import eternalImg from '../../assets/universe/eternal.png'
import echoImg from '../../assets/universe/echo.png'
import bendImg from '../../assets/universe/bend.png'
import starfieldImg from '../../assets/universe/starfield.jpg'
import anonymousStarfield from '../../assets/plaza/anonymous_starfield.png'
import anonymousBannerImg from '../../assets/plaza/anonymous_banner.png'
import flowersPost from '../../assets/flowers_post.png'
import roomListImg from '../../assets/rooms/roomlist.png'

function SearchIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#15151c" strokeWidth="2.6" strokeLinecap="round">
      <circle cx="10.5" cy="10.5" r="6.5" />
      <path d="m16 16 4.4 4.4" />
    </svg>
  )
}

function BellIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" fill="#15151c">
      <path d="M12 3.1c-3.1 0-5.5 2.4-5.5 5.7v2.4c0 1.5-.6 2.8-1.6 3.9-.7.8-.2 2.1.9 2.1h12.4c1.1 0 1.6-1.3.9-2.1-1-1.1-1.6-2.4-1.6-3.9V8.8c0-3.3-2.4-5.7-5.5-5.7Z" />
      <path d="M9.3 18.4a2.8 2.8 0 0 0 5.4 0H9.3Z" />
    </svg>
  )
}

function ShareIcon() {
  return (
    <svg className="feed-share-icon" width="34" height="34" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path
        d="M13.2 9.4 24.2 17 13.2 24.6v-5.3h-1.05c-4.25 0-7.25 1.6-9.15 4.85.45-7.3 4.15-11.35 10.2-11.35V9.4Z"
        stroke="currentColor"
        strokeWidth="2.05"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function ChatBubbleIcon() {
  return (
    <svg className="feed-chat-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5.4 17.4c-1.35-1.28-2.1-3.02-2.1-4.92 0-4.06 3.6-7.18 8.48-7.18 4.92 0 8.5 3.12 8.5 7.18 0 4.08-3.58 7.18-8.5 7.18-1.02 0-1.98-.13-2.86-.4l-3.28 1.54c-.54.25-1.08-.25-.88-.8l.64-2.6Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.7 12.25h6.6M8.7 15.05h4.05" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" />
      <circle cx="17.35" cy="7.25" r="2.35" fill="currentColor" />
    </svg>
  )
}

function FollowIcon({ active = false }) {
  if (active) {
    return (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m5 12.4 4.1 4.1L19.2 6.4" />
      </svg>
    )
  }
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="#6557f5">
      <circle cx="9" cy="7.2" r="3.5" />
      <path d="M2.8 18.7c.55-4.1 3.05-6.2 6.2-6.2 2.7 0 4.9 1.55 5.8 4.58.22.76-.36 1.52-1.16 1.52H4.02c-.75 0-1.32-.66-1.22-1.4Z" />
      <path d="M17.8 10.5v6.6M14.5 13.8h6.6" stroke="#6557f5" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8.3 10.2h7.4M8.3 13.8h4.5" />
    </svg>
  )
}

function HeartIcon({ small = false }) {
  return (
    <svg width={small ? 20 : 26} height={small ? 20 : 26} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.3 5.9c-1.7-1.9-4.5-1.8-6.1 0L12 8.2 9.8 5.9c-1.6-1.8-4.4-1.9-6.1 0-1.8 2-1.5 5 .4 6.9l7.1 6.8c.5.4 1.1.4 1.6 0l7.1-6.8c1.9-1.9 2.2-4.9.4-6.9Z" />
    </svg>
  )
}

const TABS = ['Explore', 'Social', 'Anonymous', 'Latest']
const LAYOUTS = [
  { key: 'inset', label: '不贴边' },
  { key: 'edge', label: '贴边' },
]
const SEARCH_HISTORY = ['52112691', 'Rumpita', 'coldStart']
const HOT_TOPICS = ['textsnap', 'gabut tuh', 'K-pop', 'curhat malam']

const clampFrameRatio = ratio => Math.min(4 / 3, Math.max(3 / 4, ratio))
const imageMeta = (width, height) => {
  const ratio = width / height
  return { ratio, frameRatio: clampFrameRatio(ratio), rawRatio: ratio }
}

const IMAGE_META = {
  [senjaPhoto]: imageMeta(1110, 1116),
  [profileHero]: imageMeta(402, 410),
  [pinnedFlowers]: imageMeta(1110, 254),
  [seaPost]: imageMeta(1110, 1110),
  [cardParty]: imageMeta(1110, 363),
  [cardVibe]: imageMeta(548, 504),
  [cardVoice]: imageMeta(548, 504),
  [eternalImg]: imageMeta(750, 520),
  [echoImg]: imageMeta(490, 450),
  [bendImg]: imageMeta(930, 480),
  [starfieldImg]: imageMeta(1206, 780),
  [flowersPost]: imageMeta(615, 316),
  [roomListImg]: imageMeta(1206, 2472),
  [colorBlue]: imageMeta(1254, 1254),
  [colorGreen]: imageMeta(1086, 1448),
  [colorPurple]: imageMeta(941, 1672),
  [colorOrange]: imageMeta(1448, 1086),
  [colorRed]: imageMeta(1672, 941),
}

const POSTS = [
  {
    id: 'single-blue', tab: 'Explore', name: 'Blue sample', time: '1 second ago', avatar: senjaAvatar, photo: colorBlue,
    text: 'single image / blue square',
    comments: 12, likes: 101, commentName: 'Santy', commentAvatar: santyAvatar, comment: 'square single looks clear', commentLikes: 3,
  },
  {
    id: 'single-green', tab: 'Social', name: 'Green sample', time: '4 seconds ago', avatar: dedeAvatar, photo: colorGreen,
    text: 'single image / green portrait',
    comments: 18, likes: 132, commentName: 'tikaa', commentAvatar: tikaaAvatar, comment: 'portrait single checked', commentLikes: 5,
  },
  {
    id: 'single-purple', tab: 'Latest', name: 'Purple sample', time: '8 seconds ago', avatar: roseAvatar, photo: colorPurple,
    text: 'single image / purple tall portrait',
    comments: 21, likes: 164, commentName: 'calista', commentAvatar: calistaAvatar, comment: 'tall portrait works', commentLikes: 6,
  },
  {
    id: 'single-orange', tab: 'Explore', name: 'Orange sample', time: '12 seconds ago', avatar: bethAvatar, photo: colorOrange,
    text: 'single image / orange landscape',
    comments: 15, likes: 188, commentName: 'blue', commentAvatar: blueAvatar, comment: 'landscape single checked', commentLikes: 7,
  },
  {
    id: 'single-red', tab: 'Anonymous', name: 'Anonymous', time: '18 seconds ago', avatar: blueAvatar, photo: colorRed,
    text: 'single image / red wide landscape',
    comments: 27, likes: 220, commentName: 'Anonymous', commentAvatar: dedeAvatar, comment: 'wide single checked', commentLikes: 9,
  },
  {
    id: 'multi-blue', tab: 'Explore', name: 'Blue carousel', time: '25 seconds ago', avatar: calistaAvatar, photo: colorBlue, photos: [colorBlue, colorGreen], galleryKind: 'mixed',
    text: 'multi image led by blue: blue + green',
    comments: 33, likes: 260, commentName: 'Beth', commentAvatar: bethAvatar, comment: 'two image carousel', commentLikes: 8,
  },
  {
    id: 'multi-green', tab: 'Social', name: 'Green carousel', time: '30 seconds ago', avatar: tikaaAvatar, photo: colorGreen, photos: [colorGreen, colorPurple, colorOrange], galleryKind: 'mixed',
    text: 'multi image led by green: green + purple + orange',
    comments: 35, likes: 284, commentName: 'rose', commentAvatar: roseAvatar, comment: 'three images feel smooth', commentLikes: 10,
  },
  {
    id: 'multi-purple', tab: 'Latest', name: 'Purple carousel', time: '36 seconds ago', avatar: roseAvatar, photo: colorPurple, photos: [colorPurple, colorOrange], galleryKind: 'mixed',
    text: 'multi image led by purple: purple + orange',
    comments: 42, likes: 306, commentName: 'calista', commentAvatar: calistaAvatar, comment: 'purple first image', commentLikes: 11,
  },
  {
    id: 'multi-orange', tab: 'Explore', name: 'Orange carousel', time: '43 seconds ago', avatar: bethAvatar, photo: colorOrange, photos: [colorOrange, colorRed, colorBlue], galleryKind: 'landscape',
    text: 'multi image led by orange: orange + red + blue',
    comments: 44, likes: 328, commentName: 'blue', commentAvatar: blueAvatar, comment: 'orange first image', commentLikes: 12,
  },
  {
    id: 'multi-red', tab: 'Anonymous', name: 'Anonymous', time: '50 seconds ago', avatar: blueAvatar, photo: colorRed, photos: [colorRed, colorBlue], galleryKind: 'landscape',
    text: 'multi image led by red: red + blue',
    comments: 51, likes: 352, commentName: 'Anonymous', commentAvatar: dedeAvatar, comment: 'red first image', commentLikes: 14,
  },
  {
    id: 'same-blue', tab: 'Explore', name: 'Blue x2', time: '4 minutes ago', avatar: senjaAvatar, photo: colorBlue, photos: [colorBlue, colorBlue], galleryKind: 'mixed',
    text: 'same color combo: blue + blue',
    comments: 72, likes: 502, commentName: 'Santy', commentAvatar: santyAvatar, comment: 'blue blue', commentLikes: 18,
  },
  {
    id: 'same-green', tab: 'Explore', name: 'Green x3', time: '5 minutes ago', avatar: dedeAvatar, photo: colorGreen, photos: [colorGreen, colorGreen, colorGreen], galleryKind: 'mixed',
    text: 'same color combo: green + green + green',
    comments: 75, likes: 528, commentName: 'tikaa', commentAvatar: tikaaAvatar, comment: 'green trio', commentLikes: 19,
  },
  {
    id: 'same-purple', tab: 'Explore', name: 'Purple x3', time: '6 minutes ago', avatar: roseAvatar, photo: colorPurple, photos: [colorPurple, colorPurple, colorPurple], galleryKind: 'mixed',
    text: 'same color combo: purple + purple + purple',
    comments: 81, likes: 556, commentName: 'calista', commentAvatar: calistaAvatar, comment: 'purple trio', commentLikes: 20,
  },
  {
    id: 'same-orange', tab: 'Explore', name: 'Orange x2', time: '7 minutes ago', avatar: bethAvatar, photo: colorOrange, photos: [colorOrange, colorOrange], galleryKind: 'landscape',
    text: 'same color combo: orange + orange',
    comments: 84, likes: 582, commentName: 'blue', commentAvatar: blueAvatar, comment: 'orange pair', commentLikes: 21,
  },
  {
    id: 'same-red', tab: 'Explore', name: 'Red x4', time: '8 minutes ago', avatar: calistaAvatar, photo: colorRed, photos: [colorRed, colorRed, colorRed, colorRed], galleryKind: 'landscape',
    text: 'same color combo: red + red + red + red',
    comments: 89, likes: 618, commentName: 'Beth', commentAvatar: bethAvatar, comment: 'red four', commentLikes: 22,
  },
  {
    id: 'combo-a', tab: 'Explore', name: 'Combo A', time: '1 minute ago', avatar: senjaAvatar, photo: colorBlue, photos: [colorBlue, colorGreen, colorPurple], galleryKind: 'mixed',
    text: '3-image combo: blue + green + purple',
    comments: 58, likes: 390, commentName: 'Santy', commentAvatar: santyAvatar, comment: 'combo a', commentLikes: 15,
  },
  {
    id: 'combo-b', tab: 'Social', name: 'Combo B', time: '2 minutes ago', avatar: dedeAvatar, photo: colorGreen, photos: [colorGreen, colorOrange, colorRed], galleryKind: 'mixed',
    text: '3-image combo: green + orange + red',
    comments: 63, likes: 428, commentName: 'tikaa', commentAvatar: tikaaAvatar, comment: 'combo b', commentLikes: 16,
  },
  {
    id: 'combo-c', tab: 'Latest', name: 'Combo C', time: '3 minutes ago', avatar: calistaAvatar, photo: colorPurple, photos: [colorPurple, colorRed, colorBlue], galleryKind: 'mixed',
    text: '3-image combo: purple + red + blue',
    comments: 69, likes: 466, commentName: 'Beth', commentAvatar: bethAvatar, comment: 'combo c', commentLikes: 17,
  },
]

const BASE_COMMENTS = {
  senja: [
    { id: 's1', name: 'Yuyu', time: '15:50', avatar: santyAvatar, text: 'andai bisa beli buku tulis, aku udah coret-coret seharian.', likes: 1 },
    { id: 's2', name: 'Jeri Nurdiansah', time: '15:54', avatar: blueAvatar, text: 'suka baca buku juga ya, coba buku tentang yg lain', likes: 0 },
    { id: 's3', name: 'leyaa', time: '16:43', avatar: roseAvatar, text: 'loncat dari tebing si kalo aku', likes: 0 },
    { id: 's4', name: 'ambo saja', time: '16:21', avatar: dedeAvatar, text: 'kalau gw sih bantuin orang tua', likes: 2 },
  ],
  dede: [
    { id: 'd1', name: 'tikaa', time: '16:01', avatar: tikaaAvatar, text: 'aku punya cerita random banget wkwk', likes: 9 },
    { id: 'd2', name: 'blue', time: '16:06', avatar: blueAvatar, text: 'cerita dong, aku lagi gabut juga', likes: 2 },
  ],
  beth: [
    { id: 'b1', name: 'blue', time: '16:12', avatar: blueAvatar, text: 'same, especially before sleep', likes: 18 },
    { id: 'b2', name: 'rose', time: '16:15', avatar: roseAvatar, text: '37 tabs is so real', likes: 4 },
  ],
  rose: [
    { id: 'r1', name: 'calista', time: '16:28', avatar: calistaAvatar, text: 'ini vibes nya cantik banget', likes: 7 },
  ],
  party: [
    { id: 'p1', name: 'Beth', time: '16:41', avatar: bethAvatar, text: 'invite meee', likes: 23 },
  ],
  anon: [
    { id: 'a1', name: 'Anonymous', time: '17:02', avatar: dedeAvatar, text: 'felt this too hard', likes: 44 },
  ],
}


function MediaGallery({ post, onOpenImage }) {
  const photos = post.photos?.length ? post.photos : (post.photo ? [post.photo] : [])
  if (!photos.length) return null
  if (photos.length === 1) {
    const ratio = IMAGE_META[photos[0]]?.ratio || 1
    const singleKind = ratio < 0.9 ? 'portrait' : ratio > 1.2 ? 'landscape' : 'square'
    return (
      <button className={`feed-photo-button single-${singleKind}`} style={{ '--media-ratio': ratio }} onClick={event => { event.stopPropagation(); onOpenImage(photos[0], post, 0) }} aria-label="View image">
        <img className="feed-photo" src={photos[0]} alt="" loading="lazy" />
      </button>
    )
  }
  const firstRatio = IMAGE_META[photos[0]]?.ratio || 1
  return (
    <div className={`feed-gallery-window first-${firstRatio >= 1 ? 'landscape' : 'portrait'}`} style={{ '--media-ratio': firstRatio }}>
      <div className={`feed-gallery gallery-${post.galleryKind || 'mixed'}`} aria-label={`${post.name} photos`}>
        {photos.map((photo, index) => {
          const rawRatio = IMAGE_META[photo]?.rawRatio || 1
          const displayRatio = Math.min(4 / 3, Math.max(3 / 4, rawRatio))
          const needsCrop = displayRatio !== rawRatio
          return (
            <button key={`${photo}-${index}`} className={`feed-gallery-item ${needsCrop ? 'needs-crop' : 'no-crop'}`} style={{ '--display-ratio': displayRatio }} onClick={event => { event.stopPropagation(); onOpenImage(photo, post, index) }} aria-label={`View image ${index + 1}`}>
              <img src={photo} alt="" loading="lazy" className="feed-gallery-img" />
            </button>
          )
        })}
      </div>
    </div>
  )
}

function ImageViewer({ viewer, onClose, liked = false, commentCount = 0, onLike = () => {}, onShare = () => {}, draft = '', setDraft = () => {}, onSend = () => {} }) {
  if (!viewer) return null
  const src = typeof viewer === 'string' ? viewer : viewer.src
  const post = typeof viewer === 'string' ? null : viewer.post
  const photos = typeof viewer === 'string' ? [src] : (viewer.photos || [src])
  const index = typeof viewer === 'string' ? 0 : (viewer.index || 0)
  return (
    <div className="image-viewer media-viewer" role="dialog" aria-modal="true" aria-label="Image preview">
      <StatusBar dark time="11:51" battery={34} />
      <div className="media-viewer-top">
        <button className="media-viewer-close" onClick={onClose} aria-label="Close image"><span aria-hidden="true" /></button>
        {post && <div className="media-viewer-author"><img src={post.avatar} alt={post.name} /><b>{post.name}</b></div>}
        <div className="media-viewer-count">{index + 1}/{photos.length}</div>
      </div>
      <div className="media-viewer-stage" onClick={onClose}>
        <img src={src} alt="" onClick={onClose} />
      </div>
      <div className="media-viewer-bottom">
        <div className="media-viewer-actions">
          <button className={liked ? 'liked' : ''} onClick={onLike} aria-label={liked ? 'Unlike' : 'Like'}><HeartIcon /><span>{post ? post.likes + (liked ? 1 : 0) : ''}</span></button>
          <button type="button" aria-label="Comments"><CommentIcon /><span>{commentCount || 0}</span></button>
          <button onClick={onShare} aria-label="Share"><ShareIcon /></button>
        </div>
        <form className="media-viewer-input" onSubmit={event => { event.preventDefault(); onSend() }}>
          <input value={draft} onChange={event => setDraft(event.target.value)} placeholder="Write a comment..." />
          <button type="button" aria-label="Mention"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="2.05"/><path d="M15.6 15.1c-.85.75-2.05 1.15-3.25.95-2.05-.35-3.45-2.25-3.1-4.25.32-1.95 2.18-3.25 4.05-2.92 1.75.3 2.95 1.9 2.65 3.58l-.35 2.02c-.18 1.05.45 1.75 1.38 1.58 1.55-.28 2.9-2.05 2.9-4.4 0-4.1-3.02-7.22-7.4-7.22-4.72 0-8.22 3.58-8.22 8.35 0 4.88 3.42 8.22 8.22 8.22 1.35 0 2.6-.25 3.78-.78" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <button type="button" aria-label="Photo"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="2.05"/><circle cx="9" cy="10" r="1.8" fill="currentColor"/><path d="m5.8 17 4.4-4.4 3.3 3.35 2.3-2.45 2.7 3.5" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round"/></svg></button>
          <button type="button" aria-label="Emoji"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" strokeWidth="2.05"/><path d="M8.7 14.1c.82 1.18 1.9 1.75 3.3 1.75s2.48-.57 3.3-1.75" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round"/><circle cx="9" cy="10" r="1.1" fill="currentColor"/><circle cx="15" cy="10" r="1.1" fill="currentColor"/></svg></button>
        </form>
      </div>
    </div>
  )
}

function FeedCard({ post, followed, liked, commentCount, onFollow, onLike, onComment, onShare, onMore, onOpenImage, onOpenDetail, detail = false, showPrompt = false }) {
  const stop = handler => event => { event.stopPropagation(); handler?.(event) }
  const handleCardClick = event => {
    if (detail || event.target.closest('button, a, input, textarea')) return
    onOpenDetail?.()
  }
  return (
    <article className={`feed-card interactive-feed-card${detail ? ' detail-post-card' : ''}`} data-post-id={post.id} onClick={handleCardClick}>
      {!detail && (
        <div className="feed-author">
          <img src={post.avatar} alt={post.name} />
          <div className="feed-person">
            <div className="feed-name">{post.name}</div>
            <div className="feed-time">{post.time}</div>
          </div>
          <button className={`feed-follow${followed ? ' chat-ready' : ''}`} onClick={stop(onFollow)} aria-label={followed ? 'Chat' : 'Follow'}>
            {followed ? <ChatBubbleIcon /> : <FollowIcon />}
          </button>
          <button className="feed-more" onClick={stop(onMore)} aria-label="More">•••</button>
        </div>
      )}
      <p className="feed-text">{post.text}</p>
      <MediaGallery post={post} onOpenImage={onOpenImage} />
      {!detail && (
        <div className="feed-metrics feed-metrics-buttons">
          <button className={liked ? 'liked' : ''} onClick={stop(onLike)} aria-label={liked ? 'Unlike' : 'Like'}><HeartIcon active={liked} /><span>{post.likes + (liked ? 1 : 0)}</span></button>
          <button onClick={stop(onComment)} aria-label="Comments"><CommentIcon /><span>{commentCount}</span></button>
          <button onClick={stop(onShare)} aria-label="Share"><ShareIcon /></button>
        </div>
      )}
      {!detail && (
        <button className="feed-comment feed-comment-button" onClick={stop(onComment)}>
          <img src={post.commentAvatar} alt={post.commentName} />
          <span><b>{post.commentName}</b> {post.comment}</span>
          <span className="feed-comment-like"><HeartIcon small /><span>{post.commentLikes}</span></span>
        </button>
      )}
      {!detail && showPrompt && <button className="feed-comment-prompt" onClick={stop(onComment)}>Just waiting for your comment!</button>}
    </article>
  )
}


function PlazaLayoutSwitch({ layout, onChange }) {
  return (
    <div className="plaza-layout-switch" role="group" aria-label="Layout version">
      {LAYOUTS.map(item => (
        <button key={item.key} className={layout === item.key ? 'on' : ''} onClick={() => onChange(item.key)} type="button">{item.label}</button>
      ))}
    </div>
  )
}

function PlazaComposer({ nav }) {
  return (
    <button className="plaza-composer" onClick={() => nav('post')}>
      <img src={meNav} alt="me" />
      <div>
        <b>Joxon</b>
        <span>What's new today?</span>
      </div>
    </button>
  )
}

function AnonymousBanner() {
  return (
    <button className="anonymous-banner" onClick={() => {}} aria-label="Anonymous Post">
      <img src={anonymousBannerImg} alt="Anonymous Post - More Mystery And Privacy" />
    </button>
  )
}

function SearchDrawer({ query, setQuery, onClose, onPick }) {
  return (
    <div className="plaza-search-layer" onClick={onClose}>
      <aside className="plaza-search-drawer" onClick={e => e.stopPropagation()}>
        <div className="plaza-search-box">
          <SearchIcon />
          <input autoFocus value={query} onChange={e => setQuery(e.target.value)} placeholder="Find what you like" />
          {query && <button aria-label="Clear search" onClick={() => setQuery('')}>×</button>}
        </div>
        <div className="search-section-title">Search History</div>
        <div className="search-chip-row">
          {SEARCH_HISTORY.map(item => <button key={item} onClick={() => onPick(item)}>{item}</button>)}
        </div>
        <div className="search-section-title">Hot topics</div>
        <div className="search-topic-list">
          {HOT_TOPICS.map(item => <button key={item} onClick={() => onPick(item)}>#{item}</button>)}
        </div>
      </aside>
    </div>
  )
}

function CommentDetail({ post, comments, draft, setDraft, onBack, followed, liked, commentCount, onFollow, onLike, onShare, onMore, onOpenImage, onSend }) {
  return (
    <div className="screen plaza-screen comment-detail-screen">
      <StatusBar time="17:11" battery={54} />
      <header className="comment-detail-top">
        <button className="comment-back-hit" aria-label="Back" onClick={onBack}>←</button>
        <img src={post.avatar} alt={post.name} />
        <div><b>{post.name}</b><span>{post.time}</span></div>
        <button className={`feed-follow${followed ? ' chat-ready' : ''}`} onClick={onFollow} aria-label={followed ? 'Chat' : 'Follow'}>{followed ? <ChatBubbleIcon /> : <FollowIcon />}</button>
        <button className="feed-more" onClick={onMore} aria-label="More">•••</button>
      </header>
      <div className="comment-detail-scroll">
        <FeedCard
          post={post}
          followed={followed}
          liked={liked}
          commentCount={commentCount}
          onFollow={onFollow}
          onLike={onLike}
          onComment={() => {}}
          onShare={onShare}
          onMore={onMore}
          onOpenImage={onOpenImage}
          detail
        />
        <section className="comment-list-panel">
          <h2>Comments</h2>
          {comments.map(comment => (
            <div className="detail-comment-row" key={comment.id}>
              <img src={comment.avatar} alt={comment.name} />
              <div className="detail-comment-body">
                <div><b>{comment.name}</b><span>{comment.time}</span></div>
                <p>{comment.text}</p>
                <button>Reply</button>
              </div>
              <button className="comment-heart" aria-label="Like comment"><HeartIcon small /><span>{comment.likes || ''}</span></button>
            </div>
          ))}
        </section>
      </div>
      <form className="comment-input-bar" onSubmit={e => { e.preventDefault(); onSend() }}>
        <input value={draft} onChange={e => setDraft(e.target.value)} placeholder="Write a comment..." />
        <button type="button" aria-label="Mention">@</button>
        <button type="button" aria-label="Emoji">☺</button>
        <button className="comment-send" type="submit" aria-label="Send comment">➤</button>
      </form>
    </div>
  )
}

export default function PlazaFeed({ nav }) {
  const [tab, setTab] = useState('Explore')
  const [layout, setLayout] = useState(() => new URLSearchParams(window.location.search).get('layout') === 'edge' ? 'edge' : 'inset')
  const [queryOpen, setQueryOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState(null)
  const [detailPost, setDetailPost] = useState(null)
  const [draft, setDraft] = useState('')
  const [commentsByPost, setCommentsByPost] = useState(BASE_COMMENTS)
  const [followed, setFollowed] = useState(() => new Set(['beth']))
  const [liked, setLiked] = useState(() => new Set())
  const [saved, setSaved] = useState(() => new Set())
  const [visiblePromptId, setVisiblePromptId] = useState(null)
  const [immersive, setImmersive] = useState(false)
  const [imageViewer, setImageViewer] = useState(null)
  const lastScrollTop = useRef(0)
  const scrollTravel = useRef(0)
  const scrollRef = useRef(null)
  const promptTimer = useRef(null)
  const lastDwellPost = useRef(null)

  const visiblePosts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return POSTS.filter(post => {
      const inTab = tab === 'Explore' || post.tab === tab
      const inSearch = !normalized || `${post.name} ${post.text} ${post.commentName}`.toLowerCase().includes(normalized)
      return inTab && inSearch
    })
  }, [tab, query])

  const flash = text => {
    setNotice(text)
    window.clearTimeout(flash.timer)
    flash.timer = window.setTimeout(() => setNotice(null), 1600)
  }
  const toggleSet = (setter, id) => setter(prev => {
    const next = new Set(prev)
    next.has(id) ? next.delete(id) : next.add(id)
    return next
  })
  const countComments = post => post.comments + (commentsByPost[post.id]?.length || 0)
  const openDetail = post => { setDetailPost(post); setDraft(''); window.history.pushState({ plazaDetail: post.id }, '', window.location.href) }
  const openImage = (src, post, index = 0) => setImageViewer({ src, post, index, photos: post?.photos?.length ? post.photos : (post?.photo ? [post.photo] : [src]) })
  const pickSearch = text => { setQuery(text); setQueryOpen(false); setTab('Explore') }
  const changeLayout = next => {
    setLayout(next)
    const url = new URL(window.location.href)
    url.searchParams.set('layout', next)
    window.history.replaceState(window.history.state, '', url)
  }
  const sendComment = () => {
    const text = draft.trim()
    if (!text || !detailPost) return
    setCommentsByPost(prev => ({
      ...prev,
      [detailPost.id]: [
        ...(prev[detailPost.id] || []),
        { id: `me-${Date.now()}`, name: 'Me', time: 'now', avatar: meAvatar, text, likes: 0 },
      ],
    }))
    setDraft('')
    flash('Comment posted')
  }

  const clearPromptTimer = () => {
    if (promptTimer.current) window.clearTimeout(promptTimer.current)
    promptTimer.current = null
  }

  const schedulePromptForFocusedPost = () => {
    const scroller = scrollRef.current
    if (!scroller) return
    const cards = [...scroller.querySelectorAll('[data-post-id]')]
    const viewport = scroller.getBoundingClientRect()
    const focusY = viewport.top + viewport.height * 0.45
    let focused = null
    let bestDistance = Infinity
    cards.forEach(card => {
      const rect = card.getBoundingClientRect()
      const visible = Math.min(rect.bottom, viewport.bottom) - Math.max(rect.top, viewport.top)
      if (visible <= Math.min(120, rect.height * 0.25)) return
      const cardFocusY = rect.top + rect.height * 0.35
      const distance = Math.abs(cardFocusY - focusY)
      if (distance < bestDistance) {
        bestDistance = distance
        focused = card.dataset.postId
      }
    })
    if (!focused) return
    if (lastDwellPost.current === focused && visiblePromptId === focused) return
    lastDwellPost.current = focused
    setVisiblePromptId(null)
    clearPromptTimer()
    promptTimer.current = window.setTimeout(() => {
      setVisiblePromptId(focused)
    }, 3000)
  }

  const handlePlazaScroll = () => {
    const scroller = scrollRef.current
    if (!scroller) return
    const top = scroller.scrollTop
    const delta = top - lastScrollTop.current
    if (Math.abs(delta) > 1) scrollTravel.current += delta
    if (top < 12 || scrollTravel.current < -40) {
      setImmersive(false)
      scrollTravel.current = 0
    } else if (scrollTravel.current > 56 && top > 80) {
      setImmersive(true)
      scrollTravel.current = 0
    }
    lastScrollTop.current = top
    schedulePromptForFocusedPost()
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(schedulePromptForFocusedPost)
    return () => {
      window.cancelAnimationFrame(frame)
      clearPromptTimer()
    }
  }, [tab, query, visiblePosts.length])

  useEffect(() => {
    const onPopState = () => setDetailPost(null)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  if (detailPost) {
    return (
      <>
        <CommentDetail
        post={detailPost}
        comments={commentsByPost[detailPost.id] || []}
        draft={draft}
        setDraft={setDraft}
        onBack={() => { setDetailPost(null); if (window.history.state?.plazaDetail) window.history.back() }}
        followed={followed.has(detailPost.id)}
        liked={liked.has(detailPost.id)}
        commentCount={countComments(detailPost)}
        onFollow={() => followed.has(detailPost.id) ? nav('chat', detailPost.id) : toggleSet(setFollowed, detailPost.id)}
        onLike={() => toggleSet(setLiked, detailPost.id)}
        onShare={() => { toggleSet(setSaved, detailPost.id); flash('Shared to your vibe board') }}
        onMore={() => { toggleSet(setSaved, detailPost.id); flash(saved.has(detailPost.id) ? 'Removed from saved' : 'Saved this post') }}
        onOpenImage={openImage}
        onSend={sendComment}
      />
        <ImageViewer viewer={imageViewer} onClose={() => setImageViewer(null)} liked={imageViewer?.post ? liked.has(imageViewer.post.id) : false} commentCount={imageViewer?.post ? countComments(imageViewer.post) : 0} onLike={() => imageViewer?.post && toggleSet(setLiked, imageViewer.post.id)} onShare={() => imageViewer?.post && (toggleSet(setSaved, imageViewer.post.id), flash('Shared to your vibe board'))} draft={draft} setDraft={setDraft} onSend={sendComment} />
      </>
    )
  }

  return (
    <div className={`screen plaza-screen plaza-${layout}-mode${tab === 'Anonymous' ? ' anonymous-mode' : ''}`} style={tab === 'Anonymous' ? { '--anon-bg': `url(${anonymousStarfield})` } : undefined}>
      <StatusBar time="17:11" battery={54} />
      <div className="plaza-scroll" ref={scrollRef} onScroll={handlePlazaScroll}>
        <header className="plaza-header">
          <div className="plaza-tabs-title">
            <button className="plaza-following" onClick={() => { setTab('Social'); flash('Switched to people you follow') }}>Following<i /></button>
            <button className="plaza-for-you" onClick={() => { setTab('Explore'); flash('For You refreshed') }}>For You</button>
          </div>
          <div className="plaza-actions">
            <button aria-label="Search" onClick={() => setQueryOpen(true)}><SearchIcon /></button>
            <button aria-label="Notifications" onClick={() => flash('No new notifications yet')}><BellIcon /></button>
          </div>
        </header>

        <div className="plaza-pills" role="tablist" aria-label="Plaza categories">
          {TABS.map(item => (
            <button key={item} className={`plaza-pill${tab === item ? ' on' : ''}`} onClick={() => setTab(item)} role="tab" aria-selected={tab === item}>{item}</button>
          ))}
        </div>

        <PlazaLayoutSwitch layout={layout} onChange={changeLayout} />

        {tab === 'Anonymous' && <AnonymousBanner />}
        {tab === 'Explore' && <PlazaComposer nav={nav} />}

        <div className="feed-list">
          {visiblePosts.map(post => (
            <FeedCard
              key={post.id}
              post={post}
              followed={followed.has(post.id)}
              liked={liked.has(post.id)}
              commentCount={countComments(post)}
              onFollow={() => followed.has(post.id) ? nav('chat', post.id) : toggleSet(setFollowed, post.id)}
              onLike={() => toggleSet(setLiked, post.id)}
              onComment={() => openDetail(post)}
              onShare={() => { toggleSet(setSaved, post.id); flash('Shared to your vibe board') }}
              onMore={() => { toggleSet(setSaved, post.id); flash(saved.has(post.id) ? 'Removed from saved' : 'Saved this post') }}
              onOpenImage={openImage}
              onOpenDetail={() => openDetail(post)}
              showPrompt={visiblePromptId === post.id}
            />
          ))}
          {!visiblePosts.length && <div className="plaza-empty">No posts match that search.</div>}
        </div>
      </div>

      {queryOpen && <SearchDrawer query={query} setQuery={setQuery} onClose={() => setQueryOpen(false)} onPick={pickSearch} />}
      <ImageViewer viewer={imageViewer} onClose={() => setImageViewer(null)} liked={imageViewer?.post ? liked.has(imageViewer.post.id) : false} commentCount={imageViewer?.post ? countComments(imageViewer.post) : 0} onLike={() => imageViewer?.post && toggleSet(setLiked, imageViewer.post.id)} onShare={() => imageViewer?.post && (toggleSet(setSaved, imageViewer.post.id), flash('Shared to your vibe board'))} draft={draft} setDraft={setDraft} onSend={sendComment} />
      {notice && <div className="plaza-toast">{notice}</div>}
      <button className={`plaza-compose-fab${immersive ? ' show' : ''}`} onClick={() => nav('post')} aria-label="Create post">+</button>
      <div className={`plaza-bottom-shell${immersive ? ' hidden' : ''}`}>
        <BottomNav active="plaza" nav={nav} />
      </div>
    </div>
  )
}
