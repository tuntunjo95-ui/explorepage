import { useState } from 'react'
import StatusBar from '../StatusBar'

const TYPES = ['Vulgar or Porn', 'Insult', 'Advertising', 'Discrimination', 'Sensitive Political Issues', 'Fraud', 'Illegal Gambling', 'Violation of Guideline', 'Other']

export default function ReportScreen({ nav, peer = 'hhhhll' }) {
  const [sel, setSel] = useState(null)
  const [desc, setDesc] = useState('')

  return (
    <div className="screen report-screen">
      <StatusBar />
      <header className="dt-header">
        <div className="ch-back" onClick={() => nav('details', peer)}>
          <svg width="13" height="22" viewBox="0 0 13 22" fill="none" stroke="#15151c" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round"><path d="M11 2 2 11l9 9" /></svg>
        </div>
        <span className="dt-title">Report</span>
        <div style={{ width: 20 }} />
      </header>

      <div className="rp-scroll">
        <div className="rp-label">Report Type<span className="rp-star">*</span></div>
        <div className="rp-types">
          {TYPES.map(t => (
            <div className="rp-type" key={t} onClick={() => setSel(t)}>
              <span>{t}</span>
              <span className={`rp-check${sel === t ? ' on' : ''}`}>✓</span>
            </div>
          ))}
        </div>

        <div className="rp-attach-label">The attachment (0/4)</div>
        <div className="rp-attach-hint">Reports with pictures will be dealt with first</div>
        <div className="rp-attach-box">+</div>

        <div className="rp-label2">Description</div>
        <textarea className="rp-desc" placeholder="Please provide details to help us with your case"
          value={desc} onChange={e => setDesc(e.target.value)} />
      </div>

      <div className="rp-foot">
        <button className={`rp-continue${sel ? ' on' : ''}`} onClick={() => sel && nav('details', peer)}>Continue</button>
      </div>
    </div>
  )
}
