import StatusBar from '../StatusBar'
import BottomNav from '../BottomNav'
import meAvatar from '../../assets/avatars/me.png'
import pinnedBouquet from '../../assets/profile/pinned_bouquet_full.jpg'
import seaPost from '../../assets/profile/sea_post_full.jpg'

const tags = ['♌ Leo', 'Sci-Fi', 'Action', 'Fantasy', 'Superhero', 'Blues', 'Jazz', 'K-Pop', 'Fortnite', 'LoL']

function PhotoIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="#53535c">
      <rect x="3" y="5" width="18" height="15" rx="4" fill="none" stroke="#53535c" strokeWidth="2" />
      <circle cx="9" cy="10" r="2" />
      <path d="m5.5 18 5-5 3.3 3.4 2.3-2.4 2.4 4H5.5Z" />
    </svg>
  )
}

function GiftIcon() {
  return (
    <svg width="23" height="23" viewBox="0 0 24 24" aria-hidden="true">
      <defs>
        <linearGradient id="giftPink" x1="4" y1="4" x2="20" y2="20">
          <stop stopColor="#ff7ac2" />
          <stop offset="1" stopColor="#ff2f88" />
        </linearGradient>
      </defs>
      <path d="M4.4 10.1h15.2v9.2c0 .7-.5 1.2-1.2 1.2H5.6c-.7 0-1.2-.5-1.2-1.2v-9.2Z" fill="url(#giftPink)" />
      <path d="M3.4 7.2c0-.7.5-1.2 1.2-1.2h14.8c.7 0 1.2.5 1.2 1.2v3.2H3.4V7.2Z" fill="#ff62af" />
      <path d="M12 5.7v14.8M4.3 10.4h15.4" stroke="#ffe6f4" strokeWidth="1.9" strokeLinecap="round" />
      <path d="M11.6 6.1C9.1 3.4 6.4 3.8 6.5 5.8c.1 1.7 2.5 1.8 5.1.3ZM12.4 6.1c2.5-2.7 5.2-2.3 5.1-.3-.1 1.7-2.5 1.8-5.1.3Z" fill="none" stroke="#ffe6f4" strokeWidth="1.7" strokeLinecap="round" />
    </svg>
  )
}

function EyeIcon() {
  return (
    <svg width="19" height="15" viewBox="0 0 22 16" fill="none" aria-hidden="true">
      <path d="M1.7 8s3.1-5.4 9.3-5.4S20.3 8 20.3 8s-3.1 5.4-9.3 5.4S1.7 8 1.7 8Z" stroke="currentColor" strokeWidth="2" />
      <circle cx="11" cy="8" r="2.6" stroke="currentColor" strokeWidth="2" />
    </svg>
  )
}

function ActionRow({ comments = 0, likes = 0 }) {
  return (
    <div className="profile-post-actions">
      <button type="button" aria-label="Share">
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <path d="M7.8 13.7 4.8 18c-.5.7.3 1.6 1 1.2l14-7.4c.7-.4.7-1.4 0-1.8l-14-7.4c-.8-.4-1.5.5-1 1.2l3 4.3 6.4 2.8-6.4 2.8Z" stroke="currentColor" strokeWidth="2.3" strokeLinejoin="round" />
        </svg>
      </button>
      <button type="button" aria-label={`${comments} comments`}>
        <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
          <rect x="4" y="5" width="16" height="14" rx="5" stroke="currentColor" strokeWidth="2.4" />
          <path d="M8.5 10h7M8.5 14h4.5" stroke="currentColor" strokeWidth="2.3" strokeLinecap="round" />
        </svg>
        <span>{comments}</span>
      </button>
      <button type="button" aria-label={`${likes} likes`}>
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
          <path d="M12 20.3S4.5 15.9 4.5 9.6c0-2.5 1.8-4.3 4.1-4.3 1.5 0 2.8.8 3.4 2 .6-1.2 1.9-2 3.4-2 2.3 0 4.1 1.8 4.1 4.3 0 6.3-7.5 10.7-7.5 10.7Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round" />
        </svg>
        <span>{likes}</span>
      </button>
    </div>
  )
}

export default function MyProfile({ nav }) {
  return (
    <div className="screen profile-screen">
      <div className="profile-scroll">
        <section className="profile-hero profile-hero-live">
          <StatusBar dark time="22:52" timeIcon="focus" battery={24} />

          <div className="profile-topline">
            <button className="zone-pill" type="button" onClick={() => nav('vibe')} aria-label="Aurora Zone">
              <span className="zone-orb" />
              <span>Aurora Zone</span>
            </button>
            <div className="profile-top-actions">
              <button className="gift-btn" type="button" aria-label="Gift"><GiftIcon /></button>
              <button className="coin-btn" type="button" aria-label="Coins"><span className="coin">P</span><b>0</b></button>
              <button className="gear-btn" type="button" aria-label="Settings" onClick={() => nav('settings')}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 8.1a3.9 3.9 0 1 1 0 7.8 3.9 3.9 0 0 1 0-7.8Z" stroke="currentColor" strokeWidth="2.1" />
                  <path d="M20 12a8.3 8.3 0 0 0-.1-1.1l2-1.6-2-3.5-2.4 1a8.8 8.8 0 0 0-1.9-1.1L15.3 3h-4l-.4 2.7A8.8 8.8 0 0 0 9 6.8l-2.4-1-2 3.5 2 1.6A8.3 8.3 0 0 0 6.5 12c0 .4 0 .8.1 1.1l-2 1.6 2 3.5 2.4-1c.6.5 1.2.9 1.9 1.1l.4 2.7h4l.3-2.7c.7-.3 1.4-.6 1.9-1.1l2.4 1 2-3.5-2-1.6c.1-.3.1-.7.1-1.1Z" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          <button className="profile-avatar-button" type="button" onClick={() => nav('profile-edit')} aria-label="Edit profile">
            <img className="profile-avatar" src={meAvatar} alt="Joxon" />
          </button>

          <div className="profile-name">Joxon</div>
          <div className="profile-id">ID: 56715146</div>
          <div className="achievement">✣ Achievement</div>
          <div className="profile-bio">Laughing with you, not at you.</div>

          <div className="profile-tags">
            {tags.map((tag, index) => (
              <span key={tag} className={index === 0 ? 'tag-zodiac' : ''}>{tag}</span>
            ))}
            <span className="tag-next">›</span>
          </div>

          <div className="profile-stats">
            <span><b>14</b> Following</span>
            <span><b>4</b> Followers</span>
            <span className="visitors"><i>+28</i><b>32</b> Visitors</span>
          </div>

          <button className="en-route" type="button" onClick={() => nav('universe')}>🪐 En Route ›</button>
        </section>

        <div className="profile-compose">
          <div className="compose-date">Today</div>
          <div className="compose-prompt">Share a thought or moment</div>
          <div className="photo-drop"><PhotoIcon /> Photo</div>
        </div>

        <article className="profile-post profile-post-pinned">
          <div className="pinned-meta">
            <span className="pin-dot">✦</span>
            <span>Pinned</span>
            <span>05-08 16:45</span>
            <span className="post-views"><EyeIcon /> 158 Views</span>
            <span>•••</span>
          </div>
          <div className="post-title"><b>#PenggunaBaru</b> flowers</div>
          <img className="profile-post-img bouquet" src={pinnedBouquet} alt="" />
          <ActionRow comments={1} likes={1} />
        </article>

        <article className="profile-post profile-post-video">
          <div className="pinned-meta">
            <span>06-03 20:26</span>
            <span className="post-views"><EyeIcon /> 104 Views</span>
            <span>•••</span>
          </div>
          <div className="post-wave">🌊</div>
          <div className="profile-video-frame">
            <img className="profile-post-img sea" src={seaPost} alt="" />
            <span className="video-duration">00:12</span>
            <span className="video-sound">⌕</span>
          </div>
          <ActionRow comments={0} likes={1} />
        </article>

        <article className="profile-post profile-post-text">
          <div className="pinned-meta">
            <span>05-08 15:03</span>
            <span className="post-views"><EyeIcon /> 0 Views</span>
            <span>•••</span>
          </div>
          <p>Hey everyone! I'm a Leo. Just joined PopUp today, super excited!</p>
          <ActionRow comments={0} likes={0} />
        </article>
      </div>

      <BottomNav active="me" nav={nav} />
    </div>
  )
}
