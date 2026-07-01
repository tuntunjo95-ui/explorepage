// 底部导航：🏠匹配主页 · 🧭广场 · ➕发帖 · 💬Message · 👤我
// 四个图标为灰色实体填充；当前页深黑；中间 + 为渐变竖椭圆；右侧头像干净版(灰环,无铅笔)
import meNav from '../assets/avatars/me_nav.png'

const GRAY = '#c2c2cc', DARK = '#15151c'

export default function BottomNav({ active, nav, meAvatar = meNav }) {
  return (
    <>
    <div className="bottom-nav">
      {/* 房子 */}
      <div className="nav-item" onClick={() => nav('match')}>
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path d="M11.26 3.3 3.6 9.9c-.38.33-.6.8-.6 1.3V19c0 1.1.9 2 2 2h3.2v-5.2c0-.66.54-1.2 1.2-1.2h3.2c.66 0 1.2.54 1.2 1.2V21H17c1.1 0 2-.9 2-2v-7.8c0-.5-.22-.97-.6-1.3L12.74 3.3a1.13 1.13 0 0 0-1.48 0Z"
            fill={active === 'match' ? DARK : GRAY} />
        </svg>
      </div>
      {/* 指南针 —— 灰色实心圆 + 白色斜针 */}
      <div className="nav-item" onClick={() => nav('plaza')}>
        <svg width="26" height="26" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="9.2" fill={active === 'plaza' ? DARK : GRAY} />
          <path d="M16 8 13.4 13.4 8 16 10.6 10.6Z" fill="#fff" />
        </svg>
      </div>
      {/* 中间加号 —— 渐变竖椭圆 */}
      <div className="nav-plus" onClick={() => nav('post')}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.6" strokeLinecap="round">
          <path d="M12 5v14M5 12h14" />
        </svg>
      </div>
      {/* 对话框（当前页=黑） */}
      <div className="nav-item" onClick={() => nav('message')}>
        <svg width="26" height="26" viewBox="0 0 24 24">
          <path d="M5 4h14a2.4 2.4 0 0 1 2.4 2.4v7.2A2.4 2.4 0 0 1 19 16h-6.6L8 20.2c-.5.45-1.3.1-1.3-.57V16H5a2.4 2.4 0 0 1-2.4-2.4V6.4A2.4 2.4 0 0 1 5 4Z"
            fill={active === 'message' ? DARK : GRAY} />
        </svg>
        <span className="nav-badge">1</span>
      </div>
      {/* 我 —— 头像灰环 */}
      <div className="nav-item nav-me" onClick={() => nav('me')}>
        <img className="nav-avatar" src={meAvatar} alt="me" />
      </div>
    </div>
    {/* iOS home 指示条（照 figma download.png）*/}
    <div className="home-indicator" />
    </>
  )
}
