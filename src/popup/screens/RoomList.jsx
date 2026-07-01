import StatusBar from '../StatusBar'
import BottomNav from '../BottomNav'
import roomlist from '../../assets/rooms/roomlist.png'

export default function RoomList({ nav }) {
  return (
    <div className="screen room-screen">
      <StatusBar />
      <div className="room-scroll">
        <div className="room-back" onClick={() => nav('match')}>‹</div>
        <img className="room-img" src={roomlist} alt="rooms" />
      </div>
      <BottomNav active="match" nav={nav} />
    </div>
  )
}
