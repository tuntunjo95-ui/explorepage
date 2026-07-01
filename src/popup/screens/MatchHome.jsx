import { useState } from 'react'
import StatusBar from '../StatusBar'
import BottomNav from '../BottomNav'
import cardVibe from '../../assets/match/card_vibe.png'
import cardVoice from '../../assets/match/card_voice.png'
import cardParty from '../../assets/match/card_party.png'
import avFathinn from '../../assets/match/fathinn.png'
import avCilaaaa from '../../assets/match/cilaaaa.png'
import avRaflesia from '../../assets/match/raflesia.png'
import avMila from '../../assets/match/milaimut.png'
import avWulan from '../../assets/match/wulan.png'
import avZelena from '../../assets/match/zelena.png'
import avRapunzel from '../../assets/match/rapunzelren.png'
import avAyleh from '../../assets/match/aylehaile.png'
import avDawv from '../../assets/match/dawv.png'

const USERS = [
  { av: avFathinn, name: 'fathinn', sign: 'Carpricorn', status: 'mau yang just friend', tags: ['BTS', 'Ed Sheeran', 'Belajar'] },
  { av: avCilaaaa, name: 'cilaaaa', sign: 'Gen Z', status: 'Free to chat for a bit', tags: ['Ngobrol Deep', 'Netflix-an', 'Skincare'] },
  { av: avRaflesia, name: 'raflesia', sign: 'Gemini', status: "She's chatting in 🌶️ serius tapi santai......", tags: ['Ngopi', 'Begadang', 'Nobar'] },
  { av: avMila, name: 'Mila imut', sign: 'Taurus', status: 'Looking for someone to chat with', tags: ['Mabar', 'Ngopi', 'Begadang'] },
  { av: avWulan, name: 'wulan', sign: 'Gen Z', status: 'Want to meet interesting people', tags: ['Bioskop', 'Masak', 'Tidur'] },
  { av: avZelena, name: 'zelena', sign: 'Gen Z', status: '#PenggunaBaru', tags: ['Lari', 'Main Game', 'Baca'] },
  { av: avRapunzel, name: 'rapunzel ❤️ ren', sign: 'Sagittarius', status: "She's chatting in 🎉 kamu gabut? masuk...", tags: ['Belajar', 'Tidur'] },
  { av: avAyleh, name: 'ayleh aile', sign: 'Pisces', status: 'Looking for someone to chat', tags: ['Tulus', 'Dilan 1991', 'Jalan-jalan'] },
  { av: avDawv, name: 'dawv', sign: 'Gen Z', status: 'Just chatting casually', tags: ['Ngopi', 'Begadang', 'Santuy'] },
]

function ChatIcon() {
  return <svg className="um-chat-ic" width="17" height="17" viewBox="0 0 24 24" fill="#fff"><path d="M5.8 4.5h12.4c1.4 0 2.5 1.1 2.5 2.5v7.1c0 1.4-1.1 2.5-2.5 2.5h-5.5l-4.4 3.2c-.7.5-1.6 0-1.6-.9v-2.3h-.9c-1.4 0-2.5-1.1-2.5-2.5V7c0-1.4 1.1-2.5 2.5-2.5Z" /></svg>
}

export default function MatchHome({ nav }) {
  const [tab, setTab] = useState('users')
  return (
    <div className="screen match-screen">
      <StatusBar dark time="22:43" timeIcon="location" battery={35} />
      <div className="match-scroll">
        <header className="match-header">
          <h1>POPUP</h1>
          <div className="radar-pill"><span className="radar-dot" /> Radar Searching ›</div>
        </header>

        <div className="match-cards">
          <div className="mc-row">
            <img className="mc-half" src={cardVibe} alt="Vibe Match" onClick={() => nav('match')} />
            <img className="mc-half" src={cardVoice} alt="Voice Match" onClick={() => nav('match')} />
          </div>
          <img className="mc-full" src={cardParty} alt="Party Chat" onClick={() => nav('rooms')} />
        </div>

        <div className="match-tabs">
          <span className={`mt${tab === 'users' ? ' on' : ''}`} onClick={() => setTab('users')}>Users</span>
          <span className={`mt${tab === 'parties' ? ' on' : ''}`} onClick={() => nav('rooms')}>Parties</span>
        </div>
        <div className="match-active"><b>1,401,488</b> active</div>

        <div className="user-list">
          {USERS.map((u, i) => (
            <div className="user-card" key={i}>
              <img className="um-av" src={u.av} alt={u.name} />
              <div className="um-mid">
                <div className="um-top">
                  <span className="um-name">{u.name}</span>
                  <span className="um-sign">♋ {u.sign}</span>
                </div>
                <div className="um-status">{u.status}</div>
                <div className="um-tags">
                  {u.tags.map(t => <span className="um-tag" key={t}>{t}</span>)}
                </div>
              </div>
              <button className="um-chat" aria-label={`Chat with ${u.name}`}>
                <ChatIcon />
              </button>
            </div>
          ))}
          <div className="renew-list">
            <div>click to <span>renew the list</span></div>
            <div>Times Left Today: 10</div>
          </div>
        </div>
      </div>

      <BottomNav active="match" nav={nav} />
    </div>
  )
}
