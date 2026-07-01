import StatusBar from '../StatusBar'
import { avatars } from '../data'

export default function StarLightScreen({ nav }) {
  return (
    <div className="screen starlight-screen">
      <StatusBar time="22:57" timeIcon="focus" battery={23} island />
      <header className="simple-header star-head">
        <button onClick={() => nav('message')} aria-label="back">‹</button>
        <h1>Star Light</h1>
      </header>
      <div className="star-row" onClick={() => nav('chat', 'hhhhll')}>
        <img src={avatars.hhhhll} alt="" />
        <div className="star-main">
          <div className="star-name">Hhhhll <span>🪐 2 👥</span></div>
          <div className="star-msg">🌙 Good night!</div>
        </div>
        <time>22:53</time>
      </div>
    </div>
  )
}
