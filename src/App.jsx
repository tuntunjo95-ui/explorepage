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
import PostComposer from './popup/screens/PostComposer'
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
const DEVICE_PRESETS = [
  { key: 'android-compact', label: 'Android Compact', width: 360, height: 800 },
  { key: 'iphone-compact', label: 'iPhone Compact', width: 375, height: 812 },
  { key: 'iphone-standard', label: 'iPhone Standard', width: 393, height: 852 },
  { key: 'iphone-pro', label: 'iPhone Pro', width: 402, height: 874 },
  { key: 'large', label: 'Large / Max', width: 430, height: 932 },
]

const PLAZA_ACTION_VARIANTS = [
  { key: 'standard', label: 'Current' },
  { key: 'none', label: 'No Follow / Chat' },
  { key: 'follow-only', label: 'No Chat' },
]

const PLAZA_METRIC_VARIANTS = [
  { key: 'current', label: 'Current' },
  { key: 'thirds', label: 'Equal thirds' },
]

export default function App() {
  const [screen, setScreen] = useState(qs.get('s') || 'message')
  const [param, setParam] = useState(qs.get('p') || null)
  const [deviceKey, setDeviceKey] = useState(qs.get('device') || 'iphone-pro')
  const [plazaActionVariantKey, setPlazaActionVariantKey] = useState(qs.get('actions') || 'standard')
  const [plazaMetricVariantKey, setPlazaMetricVariantKey] = useState(qs.get('metrics') || 'current')
  // 同频信号方案对比器的选中态托管在 App 级，进私聊再返回时不丢失（修复返回总回到轻量的 bug）
  const [scheme, setScheme] = useState(qs.get('scheme') || 'a')
  const nav = (s, p = null) => { setScreen(s); setParam(p) }
  const devicePreset = DEVICE_PRESETS.find(item => item.key === deviceKey) || DEVICE_PRESETS[3]
  const plazaActionVariant = PLAZA_ACTION_VARIANTS.find(item => item.key === plazaActionVariantKey) || PLAZA_ACTION_VARIANTS[0]
  const plazaMetricVariant = PLAZA_METRIC_VARIANTS.find(item => item.key === plazaMetricVariantKey) || PLAZA_METRIC_VARIANTS[0]
  const changeDevice = next => {
    setDeviceKey(next.key)
    const url = new URL(window.location.href)
    url.searchParams.set('device', next.key)
    window.history.replaceState(window.history.state, '', url)
  }
  const changePlazaActionVariant = next => {
    setPlazaActionVariantKey(next.key)
    const url = new URL(window.location.href)
    url.searchParams.set('actions', next.key)
    window.history.replaceState(window.history.state, '', url)
  }
  const changePlazaMetricVariant = next => {
    setPlazaMetricVariantKey(next.key)
    const url = new URL(window.location.href)
    url.searchParams.set('metrics', next.key)
    window.history.replaceState(window.history.state, '', url)
  }

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
    case 'plaza': view = <PlazaFeed nav={nav} devicePreset={devicePreset} devicePresets={DEVICE_PRESETS} onDeviceChange={changeDevice} actionVariant={plazaActionVariant} actionVariants={PLAZA_ACTION_VARIANTS} onActionVariantChange={changePlazaActionVariant} metricVariant={plazaMetricVariant} metricVariants={PLAZA_METRIC_VARIANTS} onMetricVariantChange={changePlazaMetricVariant} />; break
    case 'me': view = <MyProfile nav={nav} />; break
    case 'profile-edit': view = <ProfileEdit nav={nav} />; break
    case 'vibe': view = <VibeTest nav={nav} />; break
    case 'settings': view = <SettingsScreen nav={nav} />; break
    case 'social-tools': view = <SocialTools nav={nav} from={param} />; break
    case 'chat-question': view = <ChatQuestion nav={nav} from={param} />; break
    case 'starlight': view = <StarLightScreen nav={nav} />; break
    case 'post': view = <PostComposer nav={nav} />; break
    default: view = <MessageList nav={nav} scheme={scheme} setScheme={setScheme} />
  }

  return (
    <div className={`stage${screen === 'plaza' ? ' plaza-preview-stage' : ''}`}>
      {screen === 'plaza' && (
        <div className="device-size-picker" role="group" aria-label="Common screen sizes">
          <span className="device-size-picker-title">Screen</span>
          {DEVICE_PRESETS.map(item => (
            <button key={item.key} className={devicePreset.key === item.key ? 'on' : ''} onClick={() => changeDevice(item)} type="button">
              <b>{item.label}</b>
              <small>{item.width}×{item.height}</small>
            </button>
          ))}
        </div>
      )}
      <div className="device" style={{ '--vw': `${devicePreset.width}px`, '--vh': `${devicePreset.height}px` }}>{view}</div>
    </div>
  )
}
