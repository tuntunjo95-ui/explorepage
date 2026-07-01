import StatusBar from '../StatusBar'
import { conversations, avatars } from '../data'

export default function OtherProfile({ nav, peer = 'hhhhll' }) {
  const p = conversations.find(c => c.id === peer) || conversations[0]
  return (
    <div className="screen other-screen">
      <StatusBar dark />
      <div className="ot-cover" />
      <header className="ot-header">
        <div className="ch-back" onClick={() => nav('chat', peer)}>
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2 2 11l9 9" /></svg>
        </div>
        <div className="ot-zone">Rave Zone</div>
        <div className="ot-actions"><span className="ot-gift">🎁</span><span className="ot-more">···</span></div>
      </header>

      <div className="ot-body">
        <img className="ot-av" src={avatars[p.avatar]} alt={p.name} />
        <div className="ot-name">{p.name}</div>
        <div className="ot-id">ID: 56715125</div>
        <div className="ot-tags">
          <span className="ot-tag sign">♋ Gemini</span>
          <span className="ot-tag">Begadang</span>
          <span className="ot-tag">Animation</span>
          <span className="ot-tag">Mystery</span>
          <span className="ot-tag">Pop</span>
        </div>
        <div className="ot-stats"><b>3</b> Following <b>6</b> Followers</div>
        <div className="ot-btns">
          <button className="ot-follow">＋</button>
          <button className="ot-chat" onClick={() => nav('chat', peer)}>Chat Now</button>
        </div>
      </div>

      <div className="ot-empty">
        <div className="ot-empty-ic">🔍</div>
        <div>It seems there is nothing here</div>
      </div>
    </div>
  )
}
