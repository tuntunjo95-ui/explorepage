import { useState } from 'react'
import StatusBar from '../StatusBar'
import BottomNav from '../BottomNav'
import meAvatar from '../../assets/avatars/me.png'
import colorBlue from '../../assets/plaza/color_blue.png'
import colorGreen from '../../assets/plaza/color_green.png'
import colorPurple from '../../assets/plaza/color_purple.png'
import colorOrange from '../../assets/plaza/color_orange.png'
import colorRed from '../../assets/plaza/color_red.png'

const tags = ['♌ Leo', 'Sci-Fi', 'Action', 'Fantasy', 'Superhero', 'Blues', 'Jazz', 'K-Pop', 'Fortnite', 'LoL']
const profileLayouts = [
  { key: 'inset', label: '不贴边' },
  { key: 'edge', label: '贴边' },
]

const imageMeta = (width, height) => ({ width, height, rawRatio: width / height, ratio: Math.max(.23, Math.min(width / height, 4 / 3)) })

const PROFILE_IMAGE_META = {
  [colorBlue]: imageMeta(1254, 1254),
  [colorGreen]: imageMeta(1086, 1448),
  [colorPurple]: imageMeta(941, 1672),
  [colorOrange]: imageMeta(1448, 1086),
  [colorRed]: imageMeta(1672, 941),
}

const profilePosts = [
  { id: 'profile-blue-single', pinned: true, time: '05-08 16:45', views: 158, title: '<b>#PenggunaBaru</b> blue square single', photo: colorBlue, comments: 12, likes: 101 },
  { id: 'profile-green-multi', time: '06-03 20:26', views: 104, text: 'profile carousel: green + purple + orange', photo: colorGreen, photos: [colorGreen, colorPurple, colorOrange], galleryKind: 'mixed', comments: 35, likes: 284 },
  { id: 'profile-red-wide', time: '05-08 15:03', views: 88, text: 'single image / red wide landscape', photo: colorRed, comments: 27, likes: 220 },
  { id: 'profile-orange-pair', time: '05-08 14:41', views: 67, text: 'same color combo: orange + orange', photo: colorOrange, photos: [colorOrange, colorOrange], galleryKind: 'landscape', comments: 15, likes: 188 },
]

function PhotoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#53535c">
      <rect x="3" y="5" width="18" height="15" rx="4" fill="none" stroke="#53535c" strokeWidth="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="m5.5 18 5-5 3.3 3.4 2.3-2.4 2.4 4H5.5Z" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="giftPink" x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#ff7ac2" />
          <stop offset="1" stopColor="#ff2f88" />
        </linearGradient>
      </defs>
      <path d="M4.4 10.1h15.2v9.2c0 .7-.5 1.2-1.2 1.2H5.6c-.7 0-1.2-.5-1.2-1.2v-9.2Z" fill="url(#giftPink)" />
      <path d="M3.4 7.2c0-.7.5-1.2 1.2-1.2h14.8c.7 0 1.2.5 1.2 1.2v3.2H3.4V7.2Z" fill="#ff62af" />
      <path d="M12 5.7v14.8M4.3 10.4h15.4" stroke="#ffe6f4" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M11.6 6.1C9.1 3.4 6.4 3.8 6.5 5.8c.1 1.7 2.5 1.8 5.1.3ZM12.4 6.1c2.5-2.7 5.2-2.3 5.1-.3-.1 1.7-2.5 1.8-5.1.3Z" fill="none" stroke="#ffe6f4" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="19" height="15" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <path d="M1.7 8s3.1-5.4 9.3-5.4S20.3 8 20.3 8s-3.1 5.4-9.3 5.4S1.7 8 1.7 8Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="11" cy="8" r="2.6" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ProfileLayoutSwitch({ layout, onChange }) {
  return (
    <div className="profile-layout-switch plaza-layout-switch" role="group" aria-label="Profile post layout">
      {profileLayouts.map(item => (
        <button key={item.key} className={layout === item.key ? 'on' : ''} onClick={() => onChange(item.key)} type="button">{item.label}</button>
      ))}
    </div>
  )
}

function ProfileHeartIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.3 5.9c-1.7-1.9-4.5-1.8-6.1 0L12 8.2 9.8 5.9c-1.6-1.8-4.4-1.9-6.1 0-1.8 2-1.5 5 .4 6.9l7.1 6.8c.5.4 1.1.4 1.6 0l7.1-6.8c1.9-1.9 2.2-4.9.4-6.9Z" />
    </svg>
  )
}

function ProfileCommentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8.3 10.2h7.4M8.3 13.8h4.5" />
    </svg>
  )
}

function ProfileShareIcon() {
  return (
    <svg className="feed-share-icon" viewBox="0 0 34 34" fill="none" aria-hidden="true">
      <path d="M13.2 9.4 24.2 17 13.2 24.6v-5.3h-1.05c-4.25 0-7.25 1.6-9.15 4.85.45-7.3 4.15-11.35 10.2-11.35V9.4Z" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function ActionRow({ comments = 0, likes = 0, onComment, onLike, onShare }) {
  const stop = handler => event => { event.stopPropagation(); handler?.() }
  return (
    <div className="profile-post-actions feed-metrics-buttons">
      <button type="button" aria-label={likes + ' likes'} onClick={stop(onLike)}><ProfileHeartIcon /><span>{likes}</span></button>
      <button type="button" aria-label={comments + ' comments'} onClick={stop(onComment)}><ProfileCommentIcon /><span>{comments}</span></button>
      <button type="button" aria-label="Share" onClick={stop(onShare)}><ProfileShareIcon /></button>
    </div>
  )
}

function ProfileMediaGallery({ post, onOpenImage }) {
  const photos = post.photos?.length ? post.photos : (post.photo ? [post.photo] : [])
  if (!photos.length) return null
  if (photos.length === 1) {
    const ratio = PROFILE_IMAGE_META[photos[0]]?.ratio || 1
    const singleKind = ratio < 0.9 ? 'portrait' : ratio > 1.2 ? 'landscape' : 'square'
    return (
      <button className={`feed-photo-button single-${singleKind}`} style={{ '--media-ratio': ratio }} onClick={event => { event.stopPropagation(); onOpenImage(photos[0], post, 0) }} aria-label="View image">
        <img className="feed-photo" src={photos[0]} alt="" loading="lazy" />
      </button>
    )
  }
  const firstRatio = PROFILE_IMAGE_META[photos[0]]?.ratio || 1
  return (
    <div className={`feed-gallery-window first-${firstRatio >= 1 ? 'landscape' : 'portrait'}`} style={{ '--media-ratio': firstRatio }}>
      <div className={`feed-gallery gallery-${post.galleryKind || 'mixed'}`} aria-label="Profile photos">
        {photos.map((photo, index) => {
          const rawRatio = PROFILE_IMAGE_META[photo]?.rawRatio || 1
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

function ProfilePost({ post, onOpenDetail, onOpenImage }) {
  return (
    <article className={'profile-post interactive-feed-card profile-post-' + post.id} onClick={event => { if (!event.target.closest('button, a, input, textarea')) onOpenDetail(post) }}>
      <div className="pinned-meta">
        {post.pinned && <><span className="pin-dot">✦</span><span>Pinned</span></>}
        <span>{post.time}</span>
        <span className="post-views"><EyeIcon /> {post.views} Views</span>
        <span>•••</span>
      </div>
      {post.title && <div className="post-title" dangerouslySetInnerHTML={{ __html: post.title }} />}
      {post.text && <div className="profile-post-text"><p>{post.text}</p></div>}
      <ProfileMediaGallery post={post} onOpenImage={onOpenImage} />
      <ActionRow comments={post.comments} likes={post.likes} onComment={() => onOpenDetail(post)} onLike={() => {}} onShare={() => {}} />
    </article>
  )
}

function ProfileImageViewer({ viewer, onClose }) {
  if (!viewer) return null
  const photos = viewer.photos?.length ? viewer.photos : [viewer.image]
  return (
    <div className="image-viewer media-viewer" role="dialog" aria-modal="true" aria-label="Image preview">
      <StatusBar dark time="11:51" battery={34} />
      <div className="media-viewer-top">
        <button className="media-viewer-close" onClick={onClose} aria-label="Close image"><span aria-hidden="true" /></button>
        <div className="media-viewer-author"><img src={meAvatar} alt="Joxon" /><b>Joxon</b></div>
        <div className="media-viewer-count">{viewer.index + 1}/{photos.length}</div>
      </div>
      <div className="media-viewer-stage" onClick={onClose}><img src={viewer.image} alt="" onClick={onClose} /></div>
      <div className="media-viewer-bottom">
        <div className="media-viewer-actions"><button type="button" aria-label="Like"><ProfileHeartIcon /><span>{viewer.post?.likes ?? viewer.likes}</span></button><button type="button" aria-label="Comments"><ProfileCommentIcon /><span>{viewer.post?.comments ?? viewer.comments}</span></button><button type="button" aria-label="Share"><ProfileShareIcon /></button></div>
        <form className="media-viewer-input" onSubmit={event => event.preventDefault()}><input placeholder="Write a comment..." /><button type="button" aria-label="Mention"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.2" fill="none" stroke="currentColor" strokeWidth="2.05"/><path d="M15.6 15.1c-.85.75-2.05 1.15-3.25.95-2.05-.35-3.45-2.25-3.1-4.25.32-1.95 2.18-3.25 4.05-2.92 1.75.3 2.95 1.9 2.65 3.58l-.35 2.02c-.18 1.05.45 1.75 1.38 1.58 1.55-.28 2.9-2.05 2.9-4.4 0-4.1-3.02-7.22-7.4-7.22-4.72 0-8.22 3.58-8.22 8.35 0 4.88 3.42 8.22 8.22 8.22 1.35 0 2.6-.25 3.78-.78" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round"/></svg></button><button type="button" aria-label="Photo"><svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3.5" y="4.5" width="17" height="15" rx="4" fill="none" stroke="currentColor" strokeWidth="2.05"/><circle cx="9" cy="10" r="1.8" fill="currentColor"/><path d="m5.8 17 4.4-4.4 3.3 3.35 2.3-2.45 2.7 3.5" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round" strokeLinejoin="round"/></svg></button><button type="button" aria-label="Emoji"><svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8.6" fill="none" stroke="currentColor" strokeWidth="2.05"/><path d="M8.7 14.1c.82 1.18 1.9 1.75 3.3 1.75s2.48-.57 3.3-1.75" fill="none" stroke="currentColor" strokeWidth="2.05" strokeLinecap="round"/><circle cx="9" cy="10" r="1.1" fill="currentColor"/><circle cx="15" cy="10" r="1.1" fill="currentColor"/></svg></button></form>
      </div>
    </div>
  )
}

function ProfileDetail({ post, onClose, onOpenImage }) {
  if (!post) return null
  return (
    <div className="profile-detail-layer" role="dialog" aria-modal="true" aria-label="Post detail">
      <header className="comment-detail-top profile-detail-top"><button className="comment-back-hit" aria-label="Back" onClick={onClose}>←</button><img src={meAvatar} alt="Joxon" /><div><b>Joxon</b><span>{post.time}</span></div><button className="feed-more" type="button" aria-label="More">•••</button></header>
      <div className="profile-detail-scroll"><ProfilePost post={post} onOpenDetail={() => {}} onOpenImage={onOpenImage} /></div>
    </div>
  )
}

export default function MyProfile({ nav }) {
  const [layout, setLayout] = useState(() => new URLSearchParams(window.location.search).get('layout') === 'edge' ? 'edge' : 'inset')
  const [viewer, setViewer] = useState(null)
  const [detailPost, setDetailPost] = useState(null)
  const openProfileImage = (image, post, index = 0) => {
    const photos = post.photos?.length ? post.photos : (post.photo ? [post.photo] : [image])
    setViewer({ image, post, index, photos })
  }
  const changeLayout = next => {
    setLayout(next)
    const url = new URL(window.location.href)
    url.searchParams.set('layout', next)
    window.history.replaceState(window.history.state, '', url)
  }

  return (
    <div className={'screen profile-screen profile-' + layout + '-mode'}>
      <div className="profile-scroll">
        <section className="profile-hero profile-hero-live">
          <StatusBar dark time="22:52" timeIcon="focus" battery={24} />
          <div className="profile-topline"><button className="zone-pill" type="button" onClick={() => nav('vibe')} aria-label="Aurora Zone"><span className="zone-orb" /><span>Aurora Zone</span></button><div className="profile-top-actions"><button className="gift-btn" type="button" aria-label="Gift"><GiftIcon /></button><button className="coin-btn" type="button" aria-label="Coins"><span className="coin">P</span><b>0</b></button><button className="gear-btn" type="button" aria-label="Settings" onClick={() => nav('settings')}><svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 8.1a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Z" stroke="currentColor" strokeWidth="2.1" /><path d="M20 12a8.3 8.3 0 0 0-.1-1.1l2-1.6-2-3.5-2.4 1a8.8 8.8 0 0 0-1.9-1.1L15.3 3h-4l-.4 2.7A8.8 8.8 0 0 0 9 6.8l-2.4-1-2 3.5 2 1.6A8.3 8.3 0 0 0 6.5 12c0 .4 0 .8.1 1.1l-2 1.6 2 3.5 2.4-1c.6.5 1.2.9 1.9 1.1l.4 2.7h4l.3-2.7c.7-.3 1.4-.6 1.9-1.1l2.4 1 2-3.5-2-1.6c.1-.3.1-.7.1-1.1Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" /></svg></button></div></div>
          <button className="profile-avatar-button" type="button" onClick={() => nav('profile-edit')} aria-label="Edit profile"><img className="profile-avatar" src={meAvatar} alt="Joxon" /></button>
          <div className="profile-name">Joxon</div><div className="profile-id">ID: 56715146</div><div className="achievement">✣ Achievement</div><div className="profile-bio">Laughing with you, not at you.</div>
          <div className="profile-tags">{tags.map((tag, index) => <span key={tag} className={index === 0 ? 'tag-zodiac' : ''}>{tag}</span>)}<span className="tag-next">›</span></div>
          <div className="profile-stats"><span><b>14</b> Following</span><span><b>4</b> Followers</span><span className="visitors"><i>+28</i><b>32</b> Visitors</span></div>
          <button className="en-route" type="button" onClick={() => nav('universe')}>🪐 En Route ›</button>
        </section>
        <div className="profile-compose"><div className="compose-date">Today</div><div className="compose-prompt">Share a thought or moment</div><div className="photo-drop"><PhotoIcon /> Photo</div></div>
        <ProfileLayoutSwitch layout={layout} onChange={changeLayout} />
        {profilePosts.map(post => <ProfilePost key={post.id} post={post} onOpenDetail={setDetailPost} onOpenImage={openProfileImage} />)}
      </div>
      <ProfileImageViewer viewer={viewer} onClose={() => setViewer(null)} />
      <ProfileDetail post={detailPost} onClose={() => setDetailPost(null)} onOpenImage={openProfileImage} />
      <BottomNav active="me" nav={nav} />
    </div>
  )
}
