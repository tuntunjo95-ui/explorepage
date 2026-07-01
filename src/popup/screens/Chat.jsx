import { useState, useRef, useEffect } from 'react'
import StatusBar from '../StatusBar'
import { conversations, avatars } from '../data'
import { markReplied } from './MessageList'
import meNav from '../../assets/avatars/me_nav.png'
import starSticker from '../../assets/star_sticker.png'
import flowersPost from '../../assets/flowers_post.png'
import giftPanel from '../../assets/panels/gift_panel.png'
import emojiPanel from '../../assets/panels/emoji_panel.png'
import stickerPanel from '../../assets/panels/sticker_panel.png'
import icAi from '../../assets/chat_icons/ic_ai.png'
import icCamera from '../../assets/chat_icons/ic_camera.png'
import icPhoto from '../../assets/chat_icons/ic_photo.png'
import icQuestion from '../../assets/chat_icons/ic_question.png'
import icGift from '../../assets/chat_icons/ic_gift.png'
import icPhone from '../../assets/chat_icons/ic_phone.png'

const QA_QUESTIONS = [
  'Hal terseram apa yang pernah kamu alamin?',
  'Deskripsikan dirimu dengan 3 kata',
  'Gimana kabarnya hari ini?',
  'Masa kecil kamu seperti apa?',
]

const initialMsgs = [
  { id: 1, type: 'post', img: flowersPost, author: 'Joxon', text: '#PenggunaBaru flowers', round: 2 },
  { id: 2, type: 'exchange', q: 'Masa kecil kamu seperti apa?' },
  { id: 3, type: 'exchange', q: 'Pilh 1, cakep tapi pelit atau jelek tapi setia?' },
  { id: 4, type: 'time', t: '00:02' },
  { id: 5, type: 'sticker', img: starSticker },
  { id: 6, type: 'time', t: '09:57' },
  { id: 7, type: 'text', text: '😀 Morning!' },
]

function Satellite({ onClick }) {
  return (
    <svg className="ch-satellite" width="28" height="24" viewBox="0 0 34 28" onClick={onClick} style={{ cursor: 'pointer' }}>
      <defs>
        <linearGradient id="saturnGrad" x1="8" x2="24" y1="7" y2="23" gradientUnits="userSpaceOnUse">
          <stop stopColor="#efeff4" />
          <stop offset="1" stopColor="#b9bac3" />
        </linearGradient>
      </defs>
      <ellipse cx="17" cy="15" rx="15" ry="4.1" fill="none" stroke="#c8c8cf" strokeWidth="2.4" transform="rotate(-19 17 15)" />
      <circle cx="17" cy="15" r="7.2" fill="url(#saturnGrad)" />
      <path d="M9.5 17.4c5.2 1.2 10.6.3 16.1-2.5" stroke="#a9aab4" strokeWidth="2.1" strokeLinecap="round" />
    </svg>
  )
}

export default function Chat({ nav, peer = 'hhhhll' }) {
  const p = conversations.find(c => c.id === peer) || conversations[0]
  const [msgs, setMsgs] = useState(initialMsgs)
  const [input, setInput] = useState('')
  const [panel, setPanel] = useState(null)   // 'qa' | 'gift' | 'emoji' | 'sticker'
  const [voice, setVoice] = useState(false)
  const [call, setCall] = useState(false)
  const [qaIdx, setQaIdx] = useState(0)
  const scrollRef = useRef(null)
  useEffect(() => { scrollRef.current?.scrollTo(0, 9e9) }, [msgs])

  const send = () => {
    if (!input.trim()) return
    setMsgs(m => [...m, { id: Date.now(), type: 'text', text: input.trim() }])
    setInput('')
    markReplied(peer)   // 我回复了 → 不再是我的 Your Turn 环节（返回列表后该会话 Your Turn 消失）
  }
  const toggle = name => setPanel(panel === name ? null : name)

  return (
    <div className="screen chat-screen">
      <StatusBar time="22:42" timeIcon="focus" battery={31} />
      <header className="chat-header">
        <div className="ch-back" onClick={() => nav('message')}>
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" stroke="#15151c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2 2 11l9 9" /></svg>
        </div>
        <span className="ch-badge">1</span>
        <img className="ch-av" src={avatars[p.avatar]} alt={p.name} onClick={() => nav('other', peer)} />
        <span className="ch-name" onClick={() => nav('other', peer)}>{p.name}</span>
        <svg className="ch-rel" width="22" height="18" viewBox="0 0 24 20" fill="#6457E5"><circle cx="8" cy="6" r="4" /><path d="M1 18c0-3.5 3-6 7-6s7 2.5 7 6z" /><path d="M17 8h6M17 12h6M20 5l3 3-3 3M20 9l-3 3 3 3" stroke="#6457E5" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round" /></svg>
        <div className="ch-spacer" />
        <Satellite onClick={() => nav('universe', peer)} />
        <div className="ch-more" onClick={() => nav('details', peer)}>
          <svg width="22" height="6" viewBox="0 0 22 6" fill="#15151c"><circle cx="3" cy="3" r="2.4" /><circle cx="11" cy="3" r="2.4" /><circle cx="19" cy="3" r="2.4" /></svg>
        </div>
      </header>

      <div className="chat-scroll" ref={scrollRef} onClick={() => setPanel(null)}>
        {msgs.map(m => {
          if (m.type === 'time') return <div className="msg-time" key={m.id}>{m.t}</div>
          return (
            <div className="msg-row out" key={m.id}>
              <div className="msg-body">
                {m.type === 'post' && (
                  <div className="bubble-post">
                    <span className="bp-round">🪐{m.round}</span>
                    <img className="bp-img" src={m.img} alt="" />
                    <div className="bp-foot"><img className="bp-av" src={meNav} alt="" /><span className="bp-name">{m.author}</span></div>
                    <div className="bp-tag">{m.text}</div>
                  </div>
                )}
                {m.type === 'exchange' && (
                  <div className="bubble-exchange">
                    <div className="exch-q">{m.q}</div>
                    <div className="exch-btn">🔒 Exchange answer</div>
                  </div>
                )}
                {m.type === 'sticker' && <img className="msg-sticker" src={m.img} alt="sticker" />}
                {m.type === 'text' && <div className="bubble-text">{m.text}</div>}
              </div>
              <img className="msg-av" src={meNav} alt="me" />
            </div>
          )
        })}
      </div>

      {/* 输入栏 */}
      <div className="chat-input">
        {voice ? (
          <div className="ci-bar">
            <span className="ci-kbd" onClick={() => setVoice(false)}>⌨</span>
            <button className="ci-ptt"
              onPointerDown={e => e.currentTarget.classList.add('rec')}
              onPointerUp={e => e.currentTarget.classList.remove('rec')}
              onPointerLeave={e => e.currentTarget.classList.remove('rec')}>Press to talk</button>
          </div>
        ) : (
          <div className="ci-bar">
            <svg className="ci-mic" width="22" height="22" viewBox="0 0 24 24" fill="#8a8a96" onClick={() => { setVoice(true); setPanel(null) }}><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0014 0M12 18v3" stroke="#8a8a96" strokeWidth="1.8" fill="none" strokeLinecap="round" /></svg>
            <input className="ci-input" placeholder="Say something" value={input}
              onChange={e => setInput(e.target.value)} onKeyDown={e => e.key === 'Enter' && send()} onFocus={() => setPanel(null)} />
            <span className="ci-emoji" onClick={() => input.trim() ? send() : toggle('emoji')}>{input.trim() ? '➤' : '🙂'}</span>
          </div>
        )}
        <div className="ci-tools">
          {/* 底部工具图标 —— 照 6.18 figma 原设计切图；首个为新增「AI 灵感推荐」 */}
          <button className="ci-tool" aria-label="AI inspiration"><img src={icAi} alt="" /></button>
          <button className="ci-tool" aria-label="Camera"><img src={icCamera} alt="" /></button>
          <button className={`ci-tool${panel === 'sticker' ? ' on' : ''}`} onClick={() => toggle('sticker')} aria-label="Photo"><img src={icPhoto} alt="" /></button>
          <button className={`ci-tool${panel === 'qa' ? ' on' : ''}`} onClick={() => toggle('qa')} aria-label="Question"><img src={icQuestion} alt="" /></button>
          <button className={`ci-tool${panel === 'gift' ? ' on' : ''}`} onClick={() => toggle('gift')} aria-label="Gift"><img src={icGift} alt="" /></button>
          <button className="ci-tool" onClick={() => setCall(true)} aria-label="Call"><img src={icPhone} alt="" /></button>
        </div>
      </div>

      {/* 礼物面板 */}
      {panel === 'gift' && (
        <div className="sheet-img" onClick={() => setPanel(null)}>
          <img src={giftPanel} alt="gift" onClick={e => e.stopPropagation()} />
        </div>
      )}
      {/* 表情面板 */}
      {panel === 'emoji' && (
        <div className="sheet-img emoji" onClick={() => setPanel(null)}>
          <img src={emojiPanel} alt="emoji" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* 贴纸面板 */}
      {panel === 'sticker' && (
        <div className="sheet-img sticker" onClick={() => setPanel(null)}>
          <img src={stickerPanel} alt="sticker" onClick={e => e.stopPropagation()} />
        </div>
      )}

      {/* Q&A 破冰弹层 */}
      {panel === 'qa' && (
        <div className="qa-overlay" onClick={() => setPanel(null)}>
          <div className="qa-sheet" onClick={e => e.stopPropagation()}>
            <div className="qa-title">Q&amp;A</div>
            <div className="qa-card">
              <img className="qa-av" src={meNav} alt="" />
              <div className="qa-name">Joxon</div>
              <div className="qa-q">{QA_QUESTIONS[qaIdx]}</div>
              <button className="qa-change" onClick={() => setQaIdx(i => (i + 1) % QA_QUESTIONS.length)}>↻ change</button>
              <div className="qa-answer">Answer questions and exchange answers</div>
            </div>
            <button className="qa-confirm" onClick={() => setPanel(null)}>✓ Confirm</button>
          </div>
        </div>
      )}

      {/* 语音通话确认 */}
      {call && (
        <div className="confirm-overlay" onClick={() => setCall(false)}>
          <div className="call-box" onClick={e => e.stopPropagation()}>
            <div className="call-title">Voice Call</div>
            <div className="call-msg">Confirm to send a voice call?</div>
            <button className="call-confirm" onClick={() => setCall(false)}>Confirm</button>
            <button className="call-cancel" onClick={() => setCall(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  )
}
