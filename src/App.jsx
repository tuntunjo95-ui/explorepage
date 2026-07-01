import { useState } from 'react'
import './popup/popup.css'
import MessageList from './popup/screens/MessageList'
import Chat from './popup/screens/Chat'
import ChatDetails from './popup/screens/ChatDetails'
import UniverseRoute from './popup/screens/UniverseRoute'
import MatchHome from './popup/screens/MatchHome'
import ReportScreen from './popup/screens/ReportScreen'
import OtherProfile from './popup/screens/OtherProfile'
import RoomList from './popup/screens/RoomList'
import PlazaFeed from './popup/screens/PlazaFeed'
import MyProfile from './popup/screens/MyProfile'
import ProfileEdit from './popup/screens/ProfileEdit'
import VibeTest from './popup/screens/VibeTest'
import SettingsScreen from './popup/screens/SettingsScreen'
import SocialTools from './popup/screens/SocialTools'
import ChatQuestion from './popup/screens/ChatQuestion'
import StarLightScreen from './popup/screens/StarLightScreen'
import Showcase from './popup/screens/Showcase'
import BottomNav from './popup/BottomNav'
import StatusBar from './popup/StatusBar'

function Stub({ title, nav, active }) {
  return (
    <div className="screen">
      <StatusBar />
      <div className="stub">
        <div style={{ fontSize: 30 }}>🚧</div>
        <div>{title}</div>
        <div style={{ fontSize: 12 }}>即将复刻</div>
      </div>
      {active && <BottomNav active={active} nav={nav} />}
    </div>
  )
}

const qs = new URLSearchParams(location.search)
export default function App() {
  const [screen, setScreen] = useState(qs.get('s') || 'message')
  const [param, setParam] = useState(qs.get('p') || null)
  // 同频信号方案对比器的选中态托管在 App 级，进私聊再返回时不丢失（修复返回总回到轻量的 bug）
  const [scheme, setScheme] = useState(qs.get('scheme') || 'a')
  const nav = (s, p = null) => { setScreen(s); setParam(p) }

  // 案例页全屏展示（不套手机外框，给领导在电脑上看前后对比）
  if (screen === 'showcase') return <Showcase nav={nav} />

  let view
  switch (screen) {
    case 'message': view = <MessageList nav={nav} scheme={scheme} setScheme={setScheme} />; break
    case 'chat': view = <Chat nav={nav} peer={param} />; break
    case 'details': view = <ChatDetails nav={nav} peer={param} />; break
    case 'universe': view = <UniverseRoute nav={nav} peer={param} />; break
    case 'report': view = <ReportScreen nav={nav} peer={param} />; break
    case 'other': view = <OtherProfile nav={nav} peer={param} />; break
    case 'match': view = <MatchHome nav={nav} />; break
    case 'rooms': view = <RoomList nav={nav} />; break
    case 'plaza': view = <PlazaFeed nav={nav} />; break
    case 'me': view = <MyProfile nav={nav} />; break
    case 'profile-edit': view = <ProfileEdit nav={nav} />; break
    case 'vibe': view = <VibeTest nav={nav} />; break
    case 'settings': view = <SettingsScreen nav={nav} />; break
    case 'social-tools': view = <SocialTools nav={nav} from={param} />; break
    case 'chat-question': view = <ChatQuestion nav={nav} from={param} />; break
    case 'starlight': view = <StarLightScreen nav={nav} />; break
    case 'post': view = <Stub title="发帖" nav={nav} active="message" />; break
    default: view = <MessageList nav={nav} scheme={scheme} setScheme={setScheme} />
  }

  return (
    <div className="stage">
      <div className="device">{view}</div>
    </div>
  )
}
