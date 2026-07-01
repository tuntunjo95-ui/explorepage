import { useState, useRef } from 'react'
import { conversations as initialConvs, recallCards, starLightRich, avatars, CATS } from '../data'
import StatusBar from '../StatusBar'
import BottomNav from '../BottomNav'
import bubbleLogo from '../../assets/bubble_logo.png'
import loveFrame from '../../assets/profile/avframe_love.png'
import messageTitle from '../../assets/chat_list/message_title.png'
import journeyCard from '../../assets/chat_list/journey_card.png'

// 【功能·兴趣标签】点开过的会话记到 localStorage，标签随即消失（轻量、退出即不再出现）
const OPENED_KEY = 'popup_opened_chats'
const loadOpened = () => { try { return JSON.parse(localStorage.getItem(OPENED_KEY)) || [] } catch { return [] } }
const markOpened = id => { const s = new Set(loadOpened()); s.add(id); localStorage.setItem(OPENED_KEY, JSON.stringify([...s])) }
// 已回复：在私聊里发过消息 → 清掉 Your Turn（读≠回；回了才算履行）。由 Chat 的 send 调用 markReplied
const REPLIED_KEY = 'popup_replied_chats'
const loadReplied = () => { try { return JSON.parse(localStorage.getItem(REPLIED_KEY)) || [] } catch { return [] } }
export const markReplied = id => { const s = new Set(loadReplied()); s.add(id); localStorage.setItem(REPLIED_KEY, JSON.stringify([...s])) }

const SCHEMES = [
  { k: 'off', label: '现状' },
  { k: 'b',  label: '同频信号' },  // 共同兴趣标签（右侧柔紫胶囊）——已定 UI
  { k: 'y',  label: '等回复·字' }, // Your Turn 文字前缀（错开在消息左侧）
  { k: 'yc', label: '等回复·←' },  // Your Turn 箭头前缀（错开在消息左侧）
]
// 同频信号：scheme → 该样式的 class
const RIGHT_TAG_CLASS = { b: 'tag-soft' }
// Your Turn UI：prefix=文字前缀 / prefixArrow=箭头前缀（都错开放在消息左侧，不与同频信号在右列堆叠）
const YT_SCHEMES = { y: 'prefix', yc: 'prefixArrow' }
const initialScheme = new URLSearchParams(location.search).get('scheme') || 'a'
const qs = new URLSearchParams(location.search)

function NameMark({ c }) {
  if (c.nameIcon === 'fate') return <span className="nmark fate">🪽{c.fateNum}</span>
  if (c.nameIcon === 'gem') return <span className="nmark gem">💎</span>
  if (c.nameIcon === 'feather') return <span className="nmark">🪶</span>
  if (c.nameIcon === 'friends') return <span className="nmark">👥</span>
  if (c.nameIcon === 'star') return <span className="nmark">☆</span>
  return null
}

// 统一 ✦ 星标（替代 per-interest emoji，解决"很多兴趣没 emoji"如 LOL/虚荣）
function Sparkle({ size = 12 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c.55 6.2 5.25 10.9 12 12-6.75 1.1-11.45 5.8-12 12-.55-6.2-5.25-10.9-12-12C6.75 10.9 11.45 6.2 12 0Z" /></svg>
}

// 头像状态装饰（照 6.18 figma avatar 切图）：在线绿点 / 爱心框 / 数据徽标
// 注意：New Post 只在 Star Light 出现，对话列表行不渲染（即便数据带 deco:'newpost'）
function AvatarStatus({ c, onClick }) {
  return (
    <div className="conv-av-wrap" onClick={onClick}>
      {c.deco === 'love' && <img className="av-frame" src={loveFrame} alt="" />}
      <img className="conv-av" src={avatars[c.avatar]} alt={c.name} />
      {c.online && <span className="av-dot" />}
      {c.deco === 'stats' && (
        <span className="av-stats">
          <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><rect x="4" y="13" width="4" height="7" rx="1" /><rect x="10" y="8" width="4" height="12" rx="1" /><rect x="16" y="4" width="4" height="16" rx="1" /></svg>
        </span>
      )}
    </div>
  )
}

// Star Light 头像（带状态装饰，清晰 DOM 版）
function StatsSvg() {
  return <svg width="11" height="11" viewBox="0 0 24 24" fill="#fff"><rect x="4" y="13" width="4" height="7" rx="1" /><rect x="10" y="8" width="4" height="12" rx="1" /><rect x="16" y="4" width="4" height="16" rx="1" /></svg>
}
function StarAvatar({ s }) {
  return (
    <div className={`sl-av${s.deco === 'newpost' ? ' ring' : ''}`}>
      <img src={avatars[s.avatar]} alt={s.name} draggable="false" />
      {s.online && <span className="av-dot" />}
      {s.deco === 'count' && <span className="av-count">{s.n}</span>}
      {s.deco === 'newpost' && <span className="av-newpost">New Post</span>}
      {s.deco === 'stats' && <span className="av-stats"><StatsSvg /></span>}
    </div>
  )
}

// 召回卡（堆叠卡组：前卡 + 背后两张旋转倾斜露角）+ Star Light：可横滑；showCard=false 时只剩 Star Light（即"原版"）
function JourneyStarLight({ nav, showCard = true }) {
  const [cards, setCards] = useState(() => (showCard && new URLSearchParams(location.search).get('cj') !== 'off') ? recallCards : [])
  const [leaving, setLeaving] = useState(false)
  const rowRef = useRef(null)
  const drag = useRef(null)
  const dismiss = () => {
    if (leaving) return
    setLeaving(true)
    setTimeout(() => { setCards(cs => cs.slice(1)); setLeaving(false) }, 320)
  }
  const hasCards = cards.length > 0
  // 横滑：触摸端用原生 overflow-x；桌面鼠标补拖动滚动
  const onDown = e => { if (e.pointerType !== 'mouse') return; drag.current = { x: e.clientX, left: rowRef.current.scrollLeft, moved: false } }
  const onMove = e => { if (!drag.current) return; const dx = e.clientX - drag.current.x; if (Math.abs(dx) > 4) drag.current.moved = true; rowRef.current.scrollLeft = drag.current.left - dx }
  const onUp = () => { setTimeout(() => { drag.current = null }, 0) }
  const guard = fn => () => { if (drag.current?.moved) return; fn() }

  return (
    <div className={`journey-row${hasCards ? ' has-cards' : ''}`} ref={rowRef}
      onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}>
      {hasCards && (
        <div className="cj-stack">
          {cards.length > 2 && <div className="cj-behind l2" />}
          {cards.length > 1 && <div className="cj-behind l1" />}
          <div className={`cj-card${leaving ? ' leaving' : ''}`}>
            <img className="cj-card-img" src={journeyCard} alt="Continue The Journey" draggable="false" />
            <button className="cj-hot cj-close-hot" onClick={guard(dismiss)} aria-label="close" />
            <button className="cj-hot cj-hi-hot" onClick={guard(dismiss)} aria-label="send hi star" />
            {cards.length > 1 && (
              <div className="cj-dots">
                <span className="cj-dot active" />
                {Array.from({ length: cards.length - 1 }).map((_, i) => <span key={i} className="cj-dot" />)}
              </div>
            )}
          </div>
        </div>
      )}

      <div className={`cj-starlight${hasCards ? '' : ' full'}`}>
        <div className="sl-title">⭐ Star Light</div>
        <div className="sl-row">
          {starLightRich.map(s => (
            <div className="sl-item" key={s.id} onClick={guard(() => nav('chat', s.avatar))}>
              <StarAvatar s={s} /><span>{s.name}</span>
            </div>
          ))}
          <div className="sl-item" onClick={guard(() => nav('starlight'))}><div className="sl-more">›</div><span>More</span></div>
        </div>
      </div>
    </div>
  )
}

// 消息行：轻量(a) = 左侧 ✦ 紫 pill；等A前 = "Your turn" 前缀；等C = ← 箭头前缀（都错开放左边）
function MsgLine({ c, showTag, ytLine }) {
  if (ytLine === 'prefix')
    return <div className="conv-prev"><span className="yt-pre">Your turn</span><span className="greet">{c.preview}</span></div>
  if (ytLine === 'prefixArrow')
    return <div className="conv-prev"><span className="yt-pre-arr"><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M5 12l5-5M5 12l5 5" /></svg></span><span className="greet">{c.preview}</span></div>
  if (!showTag) return <div className="conv-prev"><span className="greet">{c.preview}</span></div>
  const cat = CATS[c.sharedInterests[0]]
  return <div className="conv-prev"><span className="tag-a"><Sparkle /> {cat.label}</span> <span className="greet">{c.preview}</span></div>
}

function ConvRow({ c, nav, onDelete, scheme, opened, replied }) {
  const [dx, setDx] = useState(0)
  const start = useRef(null)
  const moved = useRef(false)
  const onDown = e => { start.current = e.clientX - dx; moved.current = false }
  const onMove = e => {
    if (start.current == null) return
    let d = e.clientX - start.current
    if (Math.abs(d) > 4) moved.current = true
    d = Math.max(-80, Math.min(0, d))
    setDx(d)
  }
  const onUp = () => {
    if (start.current == null) return
    setDx(dx < -40 ? -80 : 0)
    start.current = null
  }
  const open = () => { if (!moved.current && dx === 0) { markOpened(c.id); nav('chat', c.id) } }
  const openProfile = e => {
    e.stopPropagation()
    if (!moved.current && dx === 0) nav('other', c.id)
  }
  const isOpened = opened.includes(c.id)
  const isReplied = replied.includes(c.id)
  const ytMix = scheme === 'y' || scheme === 'yc'   // 等回复·字/←：列表里同时显示同频信号(右) + Your Turn(左)
  // 等A 混排：hi 开场+共同兴趣 显示同频信号；等B 不混
  const showTag = scheme !== 'off' && c.firstHi && c.sharedInterests?.length && !isOpened && (ytMix || !YT_SCHEMES[scheme])
  // 未读数：点开过(已读) → 消失；否则 = 显式未读 或 hi 开场默认 1
  const unread = isOpened ? null : (c.unread || (c.firstHi ? 1 : null))
  const rightTagClass = RIGHT_TAG_CLASS[scheme] || (ytMix ? 'tag-soft' : null)   // 等A 的兴趣 tag 借用方案1 柔紫胶囊
  const tagRight = !!rightTagClass && showTag
  // Your Turn（进行中刚停）：读≠回 → 点开后仍在；只有真正回复(isReplied)才消失
  const ytMode = (c.yourTurn && !isReplied && YT_SCHEMES[scheme]) || null   // 'prefix' | 'prefixArrow' | 'fused' | 'badge'
  const ytLine = ytMode === 'prefix' || ytMode === 'prefixArrow' ? ytMode : null
  const cat = showTag ? CATS[c.sharedInterests[0]] : null
  const style = { transform: `translateX(${dx}px)` }

  return (
    <li className="conv-wrap">
      <div className="conv-del" onClick={() => onDelete(c)}>Delete</div>
      <div className={`conv${showTag ? ` scheme-${scheme} has-tag` : ''}`} style={style}
        onPointerDown={onDown} onPointerMove={onMove} onPointerUp={onUp} onPointerLeave={onUp}
        onClick={open}>
        <AvatarStatus c={c} onClick={openProfile} />
        <div className="conv-mid">
          <div className={`conv-name${c.italic ? ' italic' : ''}`}>{c.name}<NameMark c={c} /></div>
          <MsgLine c={c} showTag={showTag && !tagRight} ytLine={ytLine} />
        </div>
        <div className="conv-right">
          <div className="conv-time">{c.time}</div>
          {tagRight ? (
            <div className="right-cluster">
              <span className={rightTagClass}><Sparkle /> {cat.label}</span>
              {unread && <div className="conv-badge">{unread}</div>}
            </div>
          ) : (unread && <div className="conv-badge">{unread}</div>)}
        </div>
      </div>
    </li>
  )
}

export default function MessageList({ nav, variant = 'work', scheme: schemeProp, setScheme: setSchemeProp }) {
  const original = variant === 'original'   // 原版：无召回卡、无同频信号；work/enhanced：有
  const [convs, setConvs] = useState(initialConvs)
  const [confirm, setConfirm] = useState(null)
  // scheme 由 App 托管（schemeProp）→ 进私聊再返回不丢失方案；showcase 不传则用本地态
  const [localScheme, setLocalScheme] = useState(original ? 'off' : initialScheme)   // 现状=off / 轻量=a
  const scheme = schemeProp ?? localScheme
  const setScheme = setSchemeProp ?? setLocalScheme
  const [opened, setOpened] = useState(loadOpened)
  const [replied, setReplied] = useState(loadReplied)
  const [showCqa, setShowCqa] = useState(qs.get('cqa') === 'on')
  const showSchemebar = variant === 'work'   // 工作版显示 现状/轻量 对比器
  const resetOpened = () => { localStorage.removeItem(OPENED_KEY); localStorage.removeItem(REPLIED_KEY); setOpened([]); setReplied([]) }

  return (
    <div className="screen">
      <StatusBar time="9:41" battery={90} batteryText={false} />
      <header className="msg-header">
        <h1 className="msg-title"><img src={messageTitle} alt="Message" /></h1>
        <div className="msg-header-icons">
          <div className="hicon-bubble"><img className="hicon-img" src={bubbleLogo} alt="popup" /></div>
          <button className="hicon tools" onClick={() => nav('social-tools', 'message')} aria-label="Social Tools">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="#2a2a33">
              <path d="M3 5.2C3 4.5 3.5 4 4.2 4h11.6c.7 0 1.2.5 1.2 1.2v5.6c0 .7-.5 1.2-1.2 1.2H9l-3.2 3c-.4.4-1 .1-1-.45V12H4.2C3.5 12 3 11.5 3 10.8V5.2Z" />
              <g transform="translate(15.5,14.5)"><circle r="4.2" /><circle r="1.6" fill="#eff0f2" />
                <g fill="#eff0f2"><rect x="-0.7" y="-5.4" width="1.4" height="2" /><rect x="-0.7" y="3.4" width="1.4" height="2" /><rect x="-5.4" y="-0.7" width="2" height="1.4" /><rect x="3.4" y="-0.7" width="2" height="1.4" /></g>
              </g>
            </svg>
          </button>
        </div>
      </header>

      <div className="msg-scroll">
        {showCqa && (
          <div className="cqa-banner" onClick={() => nav('chat-question', 'message')}>
            <span className="cqa-ic">💬</span>
            <span className="cqa-text">Tired of "Hi"? <b>Set your chat question now.</b></span>
            <div className="cqa-arrow">→</div>
            <button className="cqa-close" onClick={e => { e.stopPropagation(); setShowCqa(false) }} aria-label="Close">✕</button>
          </div>
        )}

        <JourneyStarLight nav={nav} showCard={!original} />

        <ul className="conv-list">
          {convs.map(c => (
            <ConvRow
              key={c.id}
              c={c}
              nav={nav}
              onDelete={setConfirm}
              scheme={scheme}
              opened={opened}
              replied={replied}
            />
          ))}
        </ul>
      </div>

      {/* 方案对比器（设计沙盒）：真机一键切 现状/A/B/C/D */}
      {showSchemebar && (
        <div className="schemebar">
          {SCHEMES.map(s => (
            <button key={s.k} className={scheme === s.k ? 'on' : ''} onClick={() => setScheme(s.k)}>{s.label}</button>
          ))}
          <button className="sb-reset" onClick={resetOpened} title="重置（标签重新出现）">↺</button>
        </div>
      )}

      {confirm && (
        <div className="confirm-overlay" onClick={() => setConfirm(null)}>
          <div className="confirm-box" onClick={e => e.stopPropagation()}>
            <div className="confirm-msg">确认删除与 {confirm.name} 的对话?</div>
            <div className="confirm-btns">
              <button className="cf-cancel" onClick={() => setConfirm(null)}>Cancel</button>
              <button className="cf-del" onClick={() => { setConvs(cs => cs.filter(x => x.id !== confirm.id)); setConfirm(null) }}>Delete</button>
            </div>
          </div>
        </div>
      )}

      <BottomNav active="message" nav={nav} />
    </div>
  )
}
