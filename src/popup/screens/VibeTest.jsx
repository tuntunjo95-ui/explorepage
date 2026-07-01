import StatusBar from '../StatusBar'
import vibeOrb from '../../assets/profile/vibe_orb.png'
import meNav from '../../assets/avatars/me_nav.png'
import santaAv from '../../assets/profile/same_santa.png'
import judyAv from '../../assets/profile/same_judy.png'
import obamaAv from '../../assets/profile/same_obama.png'

const MATCHES = [
  { av: santaAv, name: 'Santa Claus', role: 'Gift deliveryman', align: 'left' },
  { av: judyAv, name: 'Judy Hopps', role: 'Police', align: 'right' },
  { av: obamaAv, name: 'Barack Obama', role: 'President', align: 'left' },
]
const RIGHT = [
  "I'm compatible with people who are emotionally responsive and will reciprocate by taking care of me.",
  "It's not just about being cared for by me, but about being able to see me, understand me, and support me.",
  'People who are willing to reciprocate when I give.',
]

export default function VibeTest({ nav }) {
  return (
    <div className="screen vibe-screen">
      <StatusBar dark time="23:00" battery={22} island />
      <header className="vibe-header">
        <button className="vibe-back" onClick={() => nav('me')} aria-label="back">‹</button>
        <h1>PopUp Vibe Test</h1>
        <button className="vibe-refresh" aria-label="refresh">↻</button>
      </header>

      <div className="vibe-scroll">
        <div className="vibe-sub"><img src={meNav} alt="" /> Joxon's Vibe Profile</div>

        <div className="vibe-creed">
          <b>Creed of Aurora Zone</b>
          <small>Everything is growing, everything is noisy</small>
        </div>

        <div className="vibe-orb-stage">
          <img className="vibe-orb" src={vibeOrb} alt="Aurora Zone" />
          <button className="vibe-allzone">All Zone →</button>
        </div>

        <div className="vibe-zone-name">Aurora Zone</div>
        <div className="vibe-traits"><span>Encouraging</span><span>Influential</span><span>Organizing</span></div>

        <section className="vibe-card about">
          <div className="vibe-sec-h">About You <i>▸▸▸</i></div>
          <p className="vibe-about-p">You guide others, inspiring growth and collaboration, bringing warmth and motivation.</p>
        </section>

        <section className="vibe-card catchphrase">
          <div className="vibe-sec-h">Your catchphrase <i>▸▸▸</i></div>
          <div className="vbubble white">Are you ok?</div>
          <div className="vbubble teal">I think we can think about it together.</div>
          <div className="vbubble yellow">Everyone's feelings are also important.</div>
        </section>

        <section className="vibe-card slim happy">
          <div className="vibe-sec-h">Happy trigger <i>▸▸▸</i></div>
          <div className="vibe-line">Wait — how did you know I like this?! <span className="vibe-face">🥰</span></div>
        </section>

        <section className="vibe-card slim peeves">
          <div className="vibe-sec-h">Pet peeves <i>▸▸▸</i></div>
          <div className="vibe-line">Why do you even care? Just drop it. <span className="vibe-face">😡</span></div>
        </section>

        <section className="vibe-card same">
          <div className="vibe-sec-h">Same Vibe with you <i>▸▸▸</i></div>
          <div className="vibe-match-list">
            {MATCHES.map(m => (
              <div className={`vibe-celeb ${m.align}`} key={m.name}>
                <img src={m.av} alt="" />
                <div className="vibe-celeb-copy">
                  <b>{m.name}</b>
                  <span>({m.role})</span>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="vibe-card rightfor">
          <div className="vibe-sec-h">Who's right for you <i>▸▸▸</i></div>
          {RIGHT.map((t, i) => <div className="vibe-bullet" key={i}><span />{t}</div>)}
        </section>
      </div>

      <div className="vibe-actions">
        <button className="vibe-post">✎ Post</button>
        <button className="vibe-share">↗ Share</button>
      </div>
    </div>
  )
}
