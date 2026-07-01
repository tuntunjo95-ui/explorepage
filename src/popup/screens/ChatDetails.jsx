import { useState } from 'react'
import StatusBar from '../StatusBar'
import { conversations, avatars } from '../data'

function Toggle({ on, set }) {
  return (
    <div className={`tgl${on ? ' on' : ''}`} onClick={() => set(!on)}>
      <div className="tgl-dot" />
    </div>
  )
}

export default function ChatDetails({ nav, peer = 'hhhhll' }) {
  const p = conversations.find(c => c.id === peer) || conversations[0]
  const [pin, setPin] = useState(false)
  const [block, setBlock] = useState(false)

  return (
    <div className="screen details-screen">
      <StatusBar />
      <header className="dt-header">
        <div className="ch-back" onClick={() => nav('chat', peer)}>
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" stroke="#15151c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2 2 11l9 9" /></svg>
        </div>
        <span className="dt-title">Details</span>
        <div style={{ width: 20 }} />
      </header>

      <div className="dt-peer">
        <img src={avatars[p.avatar]} alt={p.name} />
        <span>{p.name}</span>
      </div>

      <div className="dt-list">
        <div className="dt-row" onClick={() => {}}>
          <span>Nick Name</span>
          <span className="dt-val">{p.name} <i className="dt-chev">›</i></span>
        </div>
        <div className="dt-row">
          <span>Search chat history</span>
          <i className="dt-chev">›</i>
        </div>
        <div className="dt-gap" />
        <div className="dt-row">
          <span>Pin</span>
          <Toggle on={pin} set={setPin} />
        </div>
        <div className="dt-row">
          <span>Block</span>
          <Toggle on={block} set={setBlock} />
        </div>
        <div className="dt-row" onClick={() => nav('report', peer)}>
          <span>Report</span>
          <i className="dt-chev">›</i>
        </div>
      </div>
    </div>
  )
}
