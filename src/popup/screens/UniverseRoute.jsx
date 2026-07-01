import { useState } from 'react'
import StatusBar from '../StatusBar'
import { conversations, avatars } from '../data'
import meNav from '../../assets/avatars/me_nav.png'
import flicker from '../../assets/universe/flicker.png'
import echo from '../../assets/universe/echo.png'
import bend from '../../assets/universe/bend.png'
import eternal from '../../assets/universe/eternal.png'

// 里程碑（从远到近：天数越大越高、越远）
const PLANETS = [
  { key: 'eternal', img: eternal, name: 'Eternal Star', day: 365, pairs: '0 pairs', top: 90, w: 280 },
  { key: 'bend', img: bend, name: 'Bend Star', day: 120, pairs: '0 pairs', top: 470, w: 320 },
  { key: 'echo', img: echo, name: 'Echo Star', day: 30, pairs: '12,864 pairs', top: 860, w: 230 },
  { key: 'flicker', img: flicker, name: 'Flicker Star', day: 7, pairs: '178,879 pairs', top: 1230, w: 250 },
]

export default function UniverseRoute({ nav, peer = 'hhhhll' }) {
  const p = conversations.find(c => c.id === peer) || conversations[0]
  const [active, setActive] = useState('flicker')

  return (
    <div className="screen universe-screen">
      <div className="uni-bg" />
      <StatusBar dark />

      {/* 固定顶栏 */}
      <header className="uni-header">
        <div className="ch-back" onClick={() => nav('chat', peer)}>
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" stroke="#fff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2 2 11l9 9" /></svg>
        </div>
        <span className="uni-title">Universe Route</span>
        <span className="uni-help">?</span>
      </header>

      {/* 可滚动星河 */}
      <div className="uni-scroll">
        <div className="uni-track">
          {/* 轨道虚线 */}
          <div className="uni-route-line" />
          {PLANETS.map(pl => (
            <div key={pl.key} className={`planet${active === pl.key ? ' active' : ''}`}
              style={{ top: pl.top }} onClick={() => setActive(pl.key)}>
              <img src={pl.img} style={{ width: pl.w }} alt={pl.name} />
            </div>
          ))}

          {/* 双人头像舱（当前进度，在 Flicker 与地球之间） */}
          <div className="uni-capsule" style={{ top: 1610 }}>
            <div className="cap-pods">
              <img src={meNav} alt="me" />
              <img src={avatars[p.avatar]} alt={p.name} />
            </div>
            <div className="cap-base" />
          </div>

          {/* 地球地平线 */}
          <div className="uni-earth" />
        </div>
      </div>

      {/* 固定底部 */}
      <div className="uni-bottom">
        <div className="uni-day"><span className="d-pre">Day</span> <span className="d-num">2</span> <span className="d-sl">/</span> <span className="d-tot">7</span></div>
        <div className="uni-memory">. Memory <span>✦</span> ➤➤</div>
      </div>
    </div>
  )
}
