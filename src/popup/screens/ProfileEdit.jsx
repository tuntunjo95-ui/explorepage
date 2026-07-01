import StatusBar from '../StatusBar'
import avatarThumb from '../../assets/avatars/me_nav.png'
import bgThumb from '../../assets/profile/bg_thumb.jpg'

// 资料编辑页 —— 严格照 IMG_0957
const INTERESTS = ['Sci-Fi', 'Action', 'Fantasy', 'Superhero', 'Blues', 'Jazz', 'K-Pop', 'Fortnite', 'LoL', 'Fashion']

function Row({ label, sub, value, muted, children, onClick }) {
  return (
    <li className={`er${onClick ? ' tap' : ''}`} onClick={onClick}>
      <div className="er-l">{label}{sub && <small>{sub}</small>}</div>
      <div className={`er-r${muted ? ' muted' : ''}`}>
        {children || value}{onClick && <span className="er-chev">›</span>}
      </div>
    </li>
  )
}

export default function ProfileEdit({ nav }) {
  return (
    <div className="screen edit-screen">
      <StatusBar time="22:51" battery={14} />
      <header className="edit-header">
        <button className="edit-back" onClick={() => nav('me')} aria-label="back">‹</button>
        <h1>Profile</h1>
      </header>

      <div className="edit-scroll">
        <div className="attract-card">
          <div className="attract-top"><span className="attract-face">🧑</span><b>High Attractiveness</b><span className="attract-q">?</span></div>
          <div className="attract-bar"><div className="attract-fill"><span>95%</span></div></div>
          <div className="attract-hint">📍 Complete profile to get more chat chances. <a>Check Guide&gt;&gt;</a></div>
        </div>

        <ul className="edit-list">
          <Row label="Avatar" onClick={() => {}}><img className="er-av" src={avatarThumb} alt="" /></Row>
          <Row label="Nickname" sub="Change once with in 7 days" value="Joxon" onClick={() => {}} />
          <Row label="Gender" sub="Cannot be changed after registration" value="Male" muted />
          <Row label="Birthday" sub="Visible Only To Me" value="2000-07-31" onClick={() => {}} />
          <Row label="Education" sub="Visible Only To Me" value="Graduate School" onClick={() => {}} />
          <Row label="Vibe Test" value="Aurora Zone" onClick={() => nav('vibe')} />

          <li className="er er-col">
            <div className="er-row"><div className="er-l">Interest</div><div className="er-r"><span className="er-chev">›</span></div></div>
            <div className="er-chips">{INTERESTS.map(t => <span key={t}>{t}</span>)}</div>
          </li>

          <Row label="Background" onClick={() => {}}><img className="er-bg" src={bgThumb} alt="" /></Row>

          <li className="er er-col">
            <div className="er-row"><div className="er-l">About Me</div><div className="er-r"><span className="er-chev">›</span></div></div>
            <div className="er-about">Laughing with you, not at you.</div>
          </li>
        </ul>
      </div>
    </div>
  )
}
