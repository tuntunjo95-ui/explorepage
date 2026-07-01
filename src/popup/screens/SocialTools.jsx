import { useState } from 'react'
import StatusBar from '../StatusBar'

export default function SocialTools({ nav, from }) {
  const [showStar, setShowStar] = useState(true)
  return (
    <div className="screen tools-screen">
      <StatusBar time="22:51" timeIcon="focus" battery={24} />
      <header className="simple-header tools-head">
        <button onClick={() => nav(from || 'settings')} aria-label="back">‹</button>
        <h1>Social Tools</h1>
      </header>
      <div className="tools-list">
        <div className="tools-row" onClick={() => nav('chat-question', 'social-tools')}>
          <span>Chat question</span><b>To Complete</b><i>›</i>
        </div>
        <div className="tools-row">
          <span>Show my Star Light list</span>
          <button className={`switch${showStar ? ' on' : ''}`} onClick={() => setShowStar(v => !v)}><i /></button>
        </div>
        <div className="tools-row"><span>Find Friends</span><i>›</i></div>
      </div>
    </div>
  )
}
