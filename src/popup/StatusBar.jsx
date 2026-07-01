// iOS 截图状态栏：多数静态图无动态岛；录屏帧可打开 island 还原黑色药丸+录屏点。
export default function StatusBar({ time = '22:41', dark = false, timeIcon = 'none', battery = 31, island = false, batteryText = true }) {
  const col = dark ? '#fff' : '#0b0b0f'
  const muted = dark ? 'rgba(255,255,255,.55)' : 'rgba(12,12,18,.42)'
  return (
    <>
      {island && (
        <>
          <div className="dynamic-island show"><span /></div>
          <div className="island-dot" />
        </>
      )}
      <div className={`statusbar${dark ? ' dark' : ''}${island ? ' has-island' : ''}`}>
        <div className="sb-time">
          <span>{time}</span>
          {timeIcon === 'location' && (
            <svg className="sb-time-icon" width="13" height="13" viewBox="0 0 16 16" fill={col}>
              <path d="M13.9 1.6 2.2 6.4c-.9.4-.8 1.7.2 1.9l4.3.9 1 4.4c.2 1 1.5 1.1 1.9.2l4.8-11.7c.2-.4-.2-.8-.5-.5Z" />
            </svg>
          )}
          {timeIcon === 'focus' && (
            <svg className="sb-time-icon" width="19" height="15" viewBox="0 0 22 16" fill={col}>
              <path d="M6.6 3h8.8c1.1 0 2 .9 2 2v4.5h1.1c.9 0 1.6.7 1.6 1.6v1.7H1.9v-1.7c0-.9.7-1.6 1.6-1.6h1.1V5c0-1.1.9-2 2-2Zm1 2.2v4.2h6.8V5.2H7.6Z" />
            </svg>
          )}
        </div>
        <div className="sb-right">
          <svg className="sb-signal" width="22" height="15" viewBox="0 0 22 15" fill={col}>
            <rect x="1.5" y="9.4" width="3.2" height="4.1" rx="1.2" />
            <rect x="6.7" y="7.1" width="3.2" height="6.4" rx="1.2" />
            <rect x="11.9" y="4.4" width="3.2" height="9.1" rx="1.2" />
            <rect x="17.1" y="1.5" width="3.2" height="12" rx="1.2" />
          </svg>
          <svg className="sb-wifi" width="18" height="14" viewBox="0 0 18 14" fill={col}>
            <path d="M9 13.2 6.8 11c1.2-1.1 3.1-1.1 4.3 0L9 13.2Z" />
            <path d="M4.1 8.4 5.7 10c1.9-1.7 4.8-1.7 6.7 0L14 8.4c-2.8-2.4-7-2.4-9.9 0Z" />
            <path d="M1.5 5.5 3.1 7c3.4-3 8.4-3 11.8 0l1.6-1.5c-4.3-3.8-10.7-3.8-15 0Z" />
          </svg>
          {batteryText ? (
            <svg className="sb-battery" width="29" height="13" viewBox="0 0 29 13">
              <rect x="0" y="0.6" width="24" height="11.8" rx="3.7" fill={muted} />
              <rect x="2" y="2.5" width={Math.max(7, Math.min(19, battery * 0.48))} height="8" rx="2.2" fill="#34c759" />
              <text x="12" y="9.2" fill="#fff" fontSize="7.2" fontWeight="800" textAnchor="middle">{battery}</text>
              <rect x="25.2" y="4.4" width="2.2" height="4.2" rx="1.1" fill={muted} />
            </svg>
          ) : (
            <svg className="sb-battery" width="29" height="15" viewBox="0 0 29 15">
              <rect x="0.8" y="2" width="23.4" height="11" rx="3.2" fill="none" stroke={col} strokeWidth="1.6" opacity=".72" />
              <rect x="3" y="4.2" width={Math.max(8, Math.min(18, battery * 0.21))} height="6.6" rx="1.7" fill={col} opacity=".78" />
              <rect x="25.4" y="5.5" width="2" height="4" rx="1" fill={col} opacity=".52" />
            </svg>
          )}
        </div>
      </div>
    </>
  )
}
