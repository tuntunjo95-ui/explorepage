import { useState } from 'react'
import StatusBar from '../StatusBar'

const QUESTIONS = {
  hai: [
    'Gimana kabarnya hari ini?',
    'Mood kamu gimana hari ini?',
    'Ada kejadian seru hari ini?',
    'Lagi lancar aja nggak belakangan ini?',
    'Ada hal yang bikin kamu happy nggak?',
    'Ada yang bikin kamu bete nggak?',
    'Momen paling santai kamu apa?',
    'Ada hal yang ditunggu-tunggu nggak?',
    'Lagi sering ngerasa capek nggak',
  ],
  about: [
    'Apa mimpi teraneh yang pernah kamu alami?',
    'Apa kamu orang yang humoris?',
    'Apa ketakutan terbesarmu?',
  ],
  answer: [
    'Tempat terbaik buat kencan dimana?',
    'Makanan apa yang belum pernah kamu coba?',
    'Rekomendasi tempat nongkrong asik?',
  ],
}
const tabs = [
  ['hai', 'Hai'],
  ['about', 'Tentangmu'],
  ['answer', 'Biarkan mereka menjawab'],
]

export default function ChatQuestion({ nav, from }) {
  const [tab, setTab] = useState('hai')
  const [custom, setCustom] = useState(false)
  return (
    <div className="screen question-screen">
      <StatusBar time="22:58" timeIcon="focus" battery={23} island />
      <header className="simple-header question-head">
        <button onClick={() => nav(from || 'social-tools')} aria-label="back">‹</button>
        <h1>Set my chat question</h1>
        <button className="save">Save</button>
      </header>
      <div className="question-scroll">
        <h2>My Questions<span>(0/3)</span></h2>
        <button className="customize" onClick={() => setCustom(true)}>✎ <span>Customize</span></button>
        <div className="question-tabs">
          {tabs.map(([k, label]) => <button key={k} className={tab === k ? 'on' : ''} onClick={() => setTab(k)}>{label}</button>)}
        </div>
        <h3>{tabs.find(t => t[0] === tab)?.[1]}</h3>
        <div className="question-card">
          {QUESTIONS[tab].map(q => <p key={q}>{q}</p>)}
        </div>
      </div>
      {custom && (
        <div className="custom-overlay" onClick={() => setCustom(false)}>
          <div className="custom-sheet" onClick={e => e.stopPropagation()}>
            <div className="grab" />
            <div className="custom-title"><b>Customize question</b><button>Save</button></div>
            <textarea autoFocus maxLength={50} />
            <div className="count">0/50</div>
          </div>
          <div className="fake-keyboard">
            <div className="suggestions"><span>我</span><span>你</span><span>哈</span><span>是</span><span>哈哈</span><span>这</span><span>那</span><span>好</span><span>⌄</span></div>
            <div className="keys row1">q w e r t y u i o p</div>
            <div className="keys row2">a s d f g h j k l</div>
            <div className="keys row3">⇧ z x c v b n m ⌫</div>
            <div className="keys row4">123 ☺ 空格 完成</div>
          </div>
        </div>
      )}
    </div>
  )
}
