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
      <path d="M5.1 5.5h13.8c1.1 0 2 .9 2 2v8.1c0 1.1-.9 2-2 2H10l-4.9 3v-3H5.1c-1.1 0-2-.9-2-2V7.5c0-1.1.9-2 2-2Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7.6 10.1h8.8M7.6 13.5h5.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  )
}

function AvatarFollowPlus() {
  return (
    <svg className="feed-follow-plus" width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M6.5 12h11M12 6.5v11" stroke="currentColor" strokeWidth="2.35" strokeLinecap="round" />
    </svg>
  )
}

function AvatarFollowCheck() {
  return (
    <svg className="feed-follow-check" width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m6.2 12.4 3.8 3.8 7.8-8" stroke="currentColor" strokeWidth="2.45" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function VoiceRoomBadge() {
  return (
    <span className="feed-room-badge" aria-hidden="true">
      <svg width="10" height="10" viewBox="0 0 12 12" fill="none">
        <path d="M2.2 7.2V4.8M4.75 8.55v-5.1M7.3 7.65v-3.3M9.8 6.75v-1.5" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" />
      </svg>
    </span>
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
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <circle cx="9" cy="7.2" r="3.5" />
      <path d="M2.8 18.7c.55-4.1 3.05-6.2 6.2-6.2 2.7 0 4.9 1.55 5.8 4.58.22.76-.36 1.52-1.16 1.52H4.02c-.75 0-1.32-.66-1.22-1.4Z" />
      <path d="M17.8 10.5v6.6M14.5 13.8h6.6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  )
}

function CommentIcon() {
  return (
    <svg className="feed-comment-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="12" cy="12" r="8.2" />
      <path d="M8.2 10.15h7.6M8.2 13.7h4.8" />
    </svg>
  )
}

function HeartIcon({ small = false, active = false }) {
  return (
    <svg className="feed-heart-icon" width={small ? 20 : 24} height={small ? 20 : 24} viewBox="0 0 24 24" fill={active ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M20.25 5.85c-1.74-1.77-4.56-1.77-6.3 0L12 7.83l-1.95-1.98a4.42 4.42 0 0 0-6.3 0c-1.72 1.75-1.72 4.6 0 6.35L12 20.3l8.25-8.1a4.54 4.54 0 0 0 0-6.35Z" />
    </svg>
  )
}

function FeedPreloadSkeleton() {
  return (
    <div className="feed-preload-skeleton" role="status" aria-label="Loading more posts">
      {[0, 1].map(index => (
        <div className="preload-skeleton-card" key={index}>
          <i className="preload-skeleton-avatar" />
          <div className="preload-skeleton-copy">
            <i className="preload-skeleton-name" />
            <i className="preload-skeleton-line" />
            <i className="preload-skeleton-line short" />
          </div>
        </div>
      ))}
    </div>
  )
}

function ChevronIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path d="m6 3.5 4.2 4.5L6 12.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const TABS = ['Explore', 'Social', 'Anonymous', 'Latest']
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

const SOLID_COLOR_IMAGES = new Set([colorBlue, colorGreen, colorPurple, colorOrange, colorRed])

const RATIO_DEMOS = [
  ['16:9', 16 / 9],
  ['4:3', 4 / 3],
  ['1:1', 1],
  ['4:5', 4 / 5],
  ['3:4', 3 / 4],
  ['2:3', 2 / 3],
  ['9:16', 9 / 16],
]

const RATIO_DEMO_COPY = [
  { name: 'nadzira', text: 'The sunset looked unreal on my way home today.', comment: 'this view is everything' },
  { name: 'farah', text: 'Makan siang sederhana, tapi suasananya bikin betah.', comment: 'looks so peaceful' },
  { name: 'alyssa', text: 'A little reminder to slow down and enjoy the moment.', comment: 'needed this today' },
  { name: 'mai anh', text: 'Trời hôm nay đẹp quá, chỉ muốn đi dạo thật lâu.', comment: 'đẹp thật đó' },
  { name: 'safiya', text: 'Found a quiet corner and stayed there longer than planned.', comment: 'such a calm place' },
  { name: 'nana', text: 'Weekend mood: good music, cold drinks, no rush.', comment: 'perfect weekend' },
  { name: 'luna', text: 'Some days feel softer when you stop trying to hurry.', comment: 'I love this feeling' },
]

const RATIO_DEMO_POSTS = RATIO_DEMOS.map(([label, mediaRatio], index) => ({
  id: `single-ratio-${label.replace(':', '-')}`,
  tab: 'Explore',
  name: RATIO_DEMO_COPY[index].name,
  time: 'now',
  avatar: senjaAvatar,
  photo: senjaPhoto,
  mediaRatio,
  ratioDemo: true,
  text: RATIO_DEMO_COPY[index].text,
  comments: 8 + index,
  likes: 86 + index * 7,
  commentName: 'Santy',
  commentAvatar: santyAvatar,
  comment: RATIO_DEMO_COPY[index].comment,
  commentLikes: 2,
}))

const TEXT_ONLY_POSTS = [
  {
    id: 'text-only-quiet', tab: 'Explore', name: 'farah', time: 'now', avatar: bethAvatar,
    text: 'What is one small thing that made today feel better?',
    comments: 18, likes: 92, commentName: 'nadzira', commentAvatar: senjaAvatar, comment: 'a slow breakfast before work', commentLikes: 6,
  },
  {
    id: 'text-only-late-night', tab: 'Explore', name: 'alyssa', time: '1 minute ago', avatar: roseAvatar,
    text: 'Late-night conversations always feel more honest somehow.',
    tag: '#latenighttalk', tagPosts: 824,
    comments: 31, likes: 147, commentName: 'luna', commentAvatar: calistaAvatar, comment: 'because nobody is rushing', commentLikes: 12,
  },
  {
    id: 'text-only-indonesia', tab: 'Explore', name: 'nadzira', time: '2 minutes ago', avatar: senjaAvatar,
    text: 'Ada yang hari ini capek tapi tetap pura-pura baik-baik saja?',
    comments: 46, likes: 206, commentName: 'farah', commentAvatar: bethAvatar, comment: 'aku, tapi besok coba lagi', commentLikes: 19,
  },
  {
    id: 'text-only-weekend', tab: 'Explore', name: 'nana', time: '3 minutes ago', avatar: tikaaAvatar,
    text: 'No plans this weekend. Recommend me one song and one comfort movie.',
    tag: '#weekendmood', tagPosts: 2306,
    comments: 64, likes: 189, commentName: 'mai anh', commentAvatar: dedeAvatar, comment: 'I already have a whole list', commentLikes: 14,
  },
  {
    id: 'text-only-friends', tab: 'Explore', name: 'safiya', time: '4 minutes ago', avatar: dedeAvatar,
    text: 'The best kind of friendship is when silence never feels awkward.',
    comments: 22, likes: 174, commentName: 'luna', commentAvatar: roseAvatar, comment: 'this is so rare and special', commentLikes: 11,
  },
  {
    id: 'text-only-random', tab: 'Explore', name: 'luna', time: '5 minutes ago', avatar: calistaAvatar,
    text: 'Tell me a completely random fact you still remember from school.',
    comments: 73, likes: 118, commentName: 'alyssa', commentAvatar: blueAvatar, comment: 'octopuses have three hearts', commentLikes: 21,
  },
  {
    id: 'text-only-anonymous', tab: 'Anonymous', name: 'Anonymous', time: '6 minutes ago', avatar: blueAvatar,
    text: 'I miss someone I know I should not text again.',
    anonymousPostingCount: 21201,
    comments: 58, likes: 244, commentName: 'Anonymous', commentAvatar: dedeAvatar, comment: 'write it here instead of sending it', commentLikes: 32,
  },
]

const RATIO_AND_TEXT_POSTS = RATIO_DEMO_POSTS.flatMap((post, index) => [post, TEXT_ONLY_POSTS[index]])

const RELATIONSHIP_DEMO_POSTS = [
  {
    id: 'state-normal-unfollowed', tab: 'Explore', name: 'alyssa', time: 'now', avatar: roseAvatar,
    text: 'Late-night conversations always feel more honest somehow.',
    comments: 12, likes: 86, commentName: 'farah', commentAvatar: bethAvatar, comment: 'clean and easy to scan', commentLikes: 3,
  },
  {
    id: 'state-normal-followed', tab: 'Explore', name: 'farah', time: 'now', avatar: bethAvatar,
    text: 'Makan siang sederhana, tapi suasananya bikin betah.',
    comments: 18, likes: 104, commentName: 'alyssa', commentAvatar: roseAvatar, comment: 'the relationship state is clear', commentLikes: 5,
  },
  {
    id: 'state-room-unfollowed', tab: 'Explore', name: 'nadzira', time: 'now', avatar: senjaAvatar, inVoiceRoom: true,
    text: 'Ada yang masih bangun? Kita lagi ngobrol santai di room.',
    comments: 24, likes: 137, commentName: 'safiya', commentAvatar: dedeAvatar, comment: 'no more icon collision', commentLikes: 7,
  },
  {
    id: 'state-room-followed', tab: 'Explore', name: 'luna', time: 'now', avatar: calistaAvatar, inVoiceRoom: true,
    text: 'The room started quiet and somehow turned into the funniest conversation.',
    comments: 31, likes: 165, commentName: 'nana', commentAvatar: tikaaAvatar, comment: 'this one feels balanced', commentLikes: 9,
  },
]

const POSTS = [
  ...RELATIONSHIP_DEMO_POSTS,
  ...RATIO_AND_TEXT_POSTS,
  {
    id: 'single-blue', tab: 'Explore', name: 'Blue sample', time: '1 second ago', avatar: senjaAvatar, photo: colorBlue,
    text: 'single image / blue square',
    tag: '#modalnekat', tagPosts: 1415,
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
    anonymousPostingCount: 21201,
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
    anonymousPostingCount: 21201,
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
  const isSolidColorMedia = photos.every(photo => SOLID_COLOR_IMAGES.has(photo))
  if (photos.length === 1) {
    const ratio = post.mediaRatio || IMAGE_META[photos[0]]?.ratio || 1
    const singleKind = ratio < 0.9 ? 'portrait' : ratio > 1.2 ? 'landscape' : 'square'
    return (
      <button className={`feed-photo-button single-${singleKind}${post.ratioDemo ? ' single-ratio-demo' : ''}${isSolidColorMedia ? ' solid-color-media' : ''}`} style={{ '--media-ratio': ratio }} onClick={event => { event.stopPropagation(); onOpenImage(photos[0], post, 0) }} aria-label="View image">
        <img className="feed-photo" src={photos[0]} alt="" loading="lazy" />
      </button>
    )
  }
  const firstRatio = IMAGE_META[photos[0]]?.ratio || 1
  return (
    <div className={`feed-gallery-window first-${firstRatio >= 1 ? 'landscape' : 'portrait'}${isSolidColorMedia ? ' solid-color-media' : ''}`} style={{ '--media-ratio': firstRatio }}>
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
          <button className={liked ? 'liked' : ''} onClick={onLike} aria-label={liked ? 'Unlike' : 'Like'}><HeartIcon active={liked} /><span>{post ? post.likes + (liked ? 1 : 0) : ''}</span></button>
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

function PostContextRow({ post, onOpen }) {
  if (post.tab === 'Anonymous') {
    return (
      <button className="feed-context-row anonymous-context-row" onClick={onOpen} type="button">
        <span className="anonymous-context-avatars" aria-hidden="true">
          <i />
          <i />
          <i />
        </span>
        <span>{post.anonymousPostingCount || 21201} users are posting anonymously</span>
        <ChevronIcon />
      </button>
    )
  }

  if (!post.tag) return null
  return (
    <button className="feed-context-row tag-context-row" onClick={onOpen} type="button">
      <span className="tag-context-name">{post.tag}</span>
      <span>{post.tagPosts || 0} Posts</span>
      <ChevronIcon />
    </button>
  )
}

function FeedCard({ post, followed, liked, commentCount, onFollow, onChat, onProfile, onLike, onComment, onShare, onMore, onContext, onOpenImage, onOpenDetail, detail = false, showPrompt = false }) {
  const stop = handler => event => { event.stopPropagation(); handler?.(event) }
  const handleCardClick = event => {
    if (detail || event.target.closest('button, a, input, textarea')) return
    onOpenDetail?.()
  }
  return (
    <article className={`feed-card interactive-feed-card${detail ? ' detail-post-card' : ''}`} data-post-id={post.id} onClick={handleCardClick}>
      {!detail && (
        <div className={`feed-author${post.inVoiceRoom ? ' in-voice-room' : ''}`}>
          <button className="feed-avatar-action" type="button" onClick={stop(onProfile)} aria-label={`Open ${post.name}'s profile`}>
            {post.inVoiceRoom && <span className="feed-room-ripple" aria-hidden="true" />}
            <img src={post.avatar} alt="" />
            {post.inVoiceRoom && <VoiceRoomBadge />}
          </button>
          <div className="feed-person">
            <div className="feed-name">{post.name}</div>
            <div className="feed-time">{post.time}</div>
          </div>
          {!post.inVoiceRoom && (
            <button className={`feed-follow${followed ? ' followed' : ''}`} onClick={stop(onFollow)} aria-label={followed ? 'Following' : 'Follow'}>
              {followed ? <AvatarFollowCheck /> : <AvatarFollowPlus />}
            </button>
          )}
          {post.inVoiceRoom && !followed && <button className="feed-relationship-action" onClick={stop(onFollow)} aria-label={`Follow ${post.name}`}>Follow</button>}
          {followed && <button className="feed-chat-action" onClick={stop(onChat)} aria-label={`Chat with ${post.name}`}>Chat</button>}
          <button className="feed-more" onClick={stop(onMore)} aria-label="More">•••</button>
        </div>
      )}
      <p className="feed-text">{post.text}</p>
      <MediaGallery post={post} onOpenImage={onOpenImage} />
      {!detail && <PostContextRow post={post} onOpen={stop(onContext)} />}
      <div className="feed-metrics feed-metrics-buttons">
        <button className={liked ? 'liked' : ''} onClick={stop(onLike)} aria-label={liked ? 'Unlike' : 'Like'}><HeartIcon active={liked} /><span>{post.likes + (liked ? 1 : 0)}</span></button>
        <button onClick={stop(onComment)} aria-label="Comments"><CommentIcon /><span>{commentCount}</span></button>
        <button onClick={stop(onShare)} aria-label="Share"><ShareIcon /></button>
      </div>
      {!detail && !showPrompt && (
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


function PlazaComposer({ nav }) {
  const openComposer = () => nav('post')
  const handleKeyDown = event => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault()
      openComposer()
    }
  }

  return (
    <div className="plaza-composer" role="button" tabIndex={0} onClick={openComposer} onKeyDown={handleKeyDown}>
      <img src={meNav} alt="Joxon" />
      <div className="plaza-composer-field">
        <span>What's new today?</span>
      </div>
      <button className="plaza-composer-post" type="button" onClick={event => { event.stopPropagation(); openComposer() }}>Post</button>
    </div>
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
        <div className="comment-detail-identity"><b>{post.name}</b><span className="comment-detail-time">{post.time}</span></div>
        <button className={`feed-follow${followed ? ' chat-ready' : ''}`} onClick={onFollow} aria-label={followed ? 'Chat' : 'Follow'}>{followed ? <ChatBubbleIcon /> : <AvatarFollowPlus />}</button>
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

export default function PlazaFeed({ nav, devicePreset, devicePresets = [], onDeviceChange = () => {} }) {
  const [tab, setTab] = useState('Explore')
  const [deviceMenuOpen, setDeviceMenuOpen] = useState(false)
  const [queryOpen, setQueryOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [notice, setNotice] = useState(null)
  const [detailPost, setDetailPost] = useState(null)
  const [draft, setDraft] = useState('')
  const [commentsByPost, setCommentsByPost] = useState(BASE_COMMENTS)
  const [followed, setFollowed] = useState(() => new Set(['state-normal-followed', 'state-room-followed']))
  const [liked, setLiked] = useState(() => new Set())
  const [saved, setSaved] = useState(() => new Set())
  const [visiblePromptId, setVisiblePromptId] = useState(null)
  const [immersive, setImmersive] = useState(false)
  const [imageViewer, setImageViewer] = useState(null)
  const [visibleCount, setVisibleCount] = useState(12)
  const [preloadState, setPreloadState] = useState('idle')
  const lastScrollTop = useRef(0)
  const scrollTravel = useRef(0)
  const scrollRef = useRef(null)
  const promptTimer = useRef(null)
  const lastDwellPost = useRef(null)
  const preloadTimer = useRef(null)
  const preloadPending = useRef(false)

  const visiblePosts = useMemo(() => {
    const normalized = query.trim().toLowerCase()
    return POSTS.filter(post => {
      const inTab = tab === 'Explore' || post.tab === tab
      const inSearch = !normalized || `${post.name} ${post.text} ${post.commentName} ${post.tag || ''}`.toLowerCase().includes(normalized)
      return inTab && inSearch
    })
  }, [tab, query])
  const renderedPosts = visiblePosts.slice(0, visibleCount)

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

  const triggerPreload = () => {
    if (preloadPending.current || visibleCount >= visiblePosts.length) return
    preloadPending.current = true
    setPreloadState('loading')
    window.clearTimeout(preloadTimer.current)
    preloadTimer.current = window.setTimeout(() => {
      setVisibleCount(count => Math.min(count + 8, visiblePosts.length))
      setPreloadState('idle')
      preloadPending.current = false
    }, 720)
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
    const remaining = scroller.scrollHeight - top - scroller.clientHeight
    if (remaining < Math.max(420, scroller.clientHeight * .65)) triggerPreload()
  }

  useEffect(() => {
    const frame = window.requestAnimationFrame(schedulePromptForFocusedPost)
    return () => {
      window.cancelAnimationFrame(frame)
      clearPromptTimer()
    }
  }, [tab, query, visiblePosts.length])

  useEffect(() => {
    window.clearTimeout(preloadTimer.current)
    preloadPending.current = false
    setPreloadState('idle')
    setVisibleCount(12)
  }, [tab, query])

  useEffect(() => {
    const onPopState = () => setDetailPost(null)
    window.addEventListener('popstate', onPopState)
    return () => window.removeEventListener('popstate', onPopState)
  }, [])

  useEffect(() => () => window.clearTimeout(preloadTimer.current), [])

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
    <div className={`screen plaza-screen plaza-inset-mode${tab === 'Anonymous' ? ' anonymous-mode' : ''}`} style={tab === 'Anonymous' ? { '--anon-bg': `url(${anonymousStarfield})` } : undefined}>
      <StatusBar time="17:11" battery={54} />
      <div className="plaza-scroll" ref={scrollRef} onScroll={handlePlazaScroll}>
        <header className="plaza-header">
          <div className="plaza-tabs-title">
            <button className="plaza-following" onClick={() => { setTab('Social'); flash('Switched to people you follow') }}>Following<i /></button>
            <button className="plaza-for-you" onClick={() => setTab('Explore')}>For You</button>
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

        {tab === 'Anonymous' && <AnonymousBanner />}
        {tab === 'Explore' && <PlazaComposer nav={nav} />}

        <div className="feed-list">
          {renderedPosts.map(post => (
            <FeedCard
              key={post.id}
              post={post}
              followed={followed.has(post.id)}
              liked={liked.has(post.id)}
              commentCount={countComments(post)}
              onFollow={() => toggleSet(setFollowed, post.id)}
              onChat={() => nav('chat', post.id)}
              onProfile={() => nav('other', post.id)}
              onLike={() => toggleSet(setLiked, post.id)}
              onComment={() => openDetail(post)}
              onShare={() => { toggleSet(setSaved, post.id); flash('Shared to your vibe board') }}
              onMore={() => { toggleSet(setSaved, post.id); flash(saved.has(post.id) ? 'Removed from saved' : 'Saved this post') }}
              onContext={() => {
                if (post.tab === 'Anonymous') {
                  setTab('Anonymous')
                  flash('Opened anonymous plaza')
                } else if (post.tag) {
                  setQuery(post.tag.replace(/^#/, ''))
                  flash(`Opened ${post.tag}`)
                }
              }}
              onOpenImage={openImage}
              onOpenDetail={() => openDetail(post)}
              showPrompt={visiblePromptId === post.id}
            />
          ))}
          {preloadState === 'loading' && <FeedPreloadSkeleton />}
          {!visiblePosts.length && <div className="plaza-empty">No posts match that search.</div>}
        </div>
      </div>

      {queryOpen && <SearchDrawer query={query} setQuery={setQuery} onClose={() => setQueryOpen(false)} onPick={pickSearch} />}
      <ImageViewer viewer={imageViewer} onClose={() => setImageViewer(null)} liked={imageViewer?.post ? liked.has(imageViewer.post.id) : false} commentCount={imageViewer?.post ? countComments(imageViewer.post) : 0} onLike={() => imageViewer?.post && toggleSet(setLiked, imageViewer.post.id)} onShare={() => imageViewer?.post && (toggleSet(setSaved, imageViewer.post.id), flash('Shared to your vibe board'))} draft={draft} setDraft={setDraft} onSend={sendComment} />
      {notice && <div className="plaza-toast">{notice}</div>}
      {deviceMenuOpen && (
        <div className="plaza-device-menu" role="dialog" aria-label="Choose preview screen size">
          <div className="plaza-device-menu-title">Preview screen size</div>
          {devicePresets.map(item => (
            <button
              key={item.key}
              className={devicePreset?.key === item.key ? 'on' : ''}
              onClick={() => { onDeviceChange(item); setDeviceMenuOpen(false) }}
              type="button"
            >
              <span>{item.label}</span>
              <b>{item.width}×{item.height}</b>
            </button>
          ))}
        </div>
      )}
      <button className="plaza-device-trigger" onClick={() => setDeviceMenuOpen(open => !open)} type="button" aria-expanded={deviceMenuOpen}>
        <span>Size</span>{devicePreset?.width}×{devicePreset?.height}
      </button>
      <button className={`plaza-compose-fab${immersive ? ' show' : ''}`} onClick={() => nav('post')} aria-label="Create post">+</button>
      <div className={`plaza-bottom-shell${immersive ? ' hidden' : ''}`}>
        <BottomNav active="plaza" nav={nav} />
      </div>
    </div>
  )
}
