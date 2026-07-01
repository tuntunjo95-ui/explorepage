import StatusBar from '../StatusBar'
import avatar from '../../assets/avatars/me_nav.png'

function Icon({ type }) {
  const path = {
    account: 'M5 6h14v12H5z M7 9h4 M7 13h8',
    bell: 'M12 4c-3 0-5 2.2-5 5.2v2.2L5 15h14l-2-3.6V9.2C17 6.2 15 4 12 4z M9.5 17a2.6 2.6 0 0 0 5 0',
    lock: 'M7 10h10v9H7z M9 10V7a3 3 0 0 1 6 0v3',
    globe: 'M12 4a8 8 0 1 0 0 16 8 8 0 0 0 0-16z M4 12h16 M12 4c2.2 2.4 2.2 13.6 0 16 M12 4c-2.2 2.4-2.2 13.6 0 16',
    help: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M9.8 9a2.3 2.3 0 0 1 4.4 1c0 1.8-2.2 1.8-2.2 3.3 M12 16h.01',
    gear: 'M12 8.4a3.6 3.6 0 1 0 0 7.2 3.6 3.6 0 0 0 0-7.2z M12 3v2 M12 19v2 M4.2 7.5l1.7 1 M18.1 15.5l1.7 1 M4.2 16.5l1.7-1 M18.1 8.5l1.7-1 M3 12h2 M19 12h2',
    about: 'M12 20a8 8 0 1 0 0-16 8 8 0 0 0 0 16z M12 11v5 M12 8h.01',
  }[type]
  return <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#303037" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round"><path d={path} /></svg>
}

const rows = [
  { key: 'account', label: 'Account' },
  { key: 'bell', label: 'Notification' },
  { key: 'lock', label: 'Privacy' },
  { key: 'globe', label: 'Select language' },
  { key: 'help', label: 'Help Center' },
  { key: 'gear', label: 'General Settings', route: 'social-tools' },
  { key: 'about', label: 'About' },
]

export default function SettingsScreen({ nav }) {
  return (
    <div className="screen settings-screen">
      <StatusBar time="22:51" timeIcon="focus" battery={24} />
      <header className="simple-header settings-head">
        <button onClick={() => nav('me')} aria-label="back">‹</button>
        <h1>Settings</h1>
      </header>
      <div className="settings-list">
        <div className="settings-profile" onClick={() => nav('profile-edit')}>
          <img src={avatar} alt="" />
          <span>Profile</span>
          <b>95% Complete</b>
          <i>›</i>
        </div>
        {rows.map(r => (
          <div className="settings-row" key={r.key} onClick={() => r.route && nav(r.route, 'settings')}>
            <Icon type={r.key} />
            <span>{r.label}</span>
            <i>›</i>
          </div>
        ))}
      </div>
      <button className="logout-btn">Log Out</button>
    </div>
  )
}
