// 对话列表数据 —— 严格照 IMG_0911 / IMG_0912 抄录
const mods = import.meta.glob('../assets/avatars/*.png', { eager: true, import: 'default' })
export const avatars = Object.fromEntries(
  Object.entries(mods).map(([p, u]) => [p.split('/').pop().replace('.png', ''), u])
)

// 【功能·共同兴趣标签】兴趣分类色板（按兴趣分色，参考用户原型）
export const CATS = {
  kpop:  { label: 'K-pop', icon: '🎵', color: '#a855f7', bg: '#f6ecff' },
  game:  { label: 'Gaming', icon: '🎮', color: '#6366f1', bg: '#ecedfe' },
  anime: { label: 'Anime', icon: '🌸', color: '#ec4899', bg: '#fdebf4' },
  photo: { label: 'Photography', icon: '📷', color: '#14b8a6', bg: '#e3f8f4' },
  music: { label: 'R&B', icon: '🎧', color: '#f59e0b', bg: '#fdf2dd' },
  book:  { label: 'Webtoon', icon: '📖', color: '#ef4444', bg: '#fdeaea' },
}

// nameIcon: gem(💎) feather(🪶) friends(👥) star(☆) fate(双翼+数字)
// firstHi=对方首条是 hi 型低效开场；sharedInterests=与我的共同兴趣分类 key（有才显示标签）
// online=在线绿点；deco=头像状态装饰：newpost(紫环+New Post胶囊) / love(爱心框) / stats(数据徽标)
export const conversations = [
  { id: 'hhhhll', name: 'Hhhhll', avatar: 'hhhhll', preview: 'wait you actually did that?? 😂', time: '2m', nameIcon: 'fate', fateNum: 2, starlight: true, online: true, yourTurn: true, unread: 2 },
  { id: 'aponmooo', name: 'aponmooo', avatar: 'aponmooo', preview: 'hy', time: '06-09 21:54', firstHi: true, sharedInterests: ['game'], online: true },
  { id: 'beth', name: 'Beth', avatar: 'beth', preview: 'hi', time: '05-26 16:51', firstHi: true, sharedInterests: ['photo'], online: true, deco: 'newpost' },
  { id: 'rose', name: 'rosè', avatar: 'rose', preview: 'hello', time: '05-14 18:36' },
  { id: 'blue', name: 'blue', avatar: 'blue', preview: 'hai', time: '05-13 15:35', nameIcon: 'gem', online: true, firstHi: true },
  { id: 'virginiatui1', name: 'virginiatui1', avatar: 'virginiatui1', preview: 'hy', time: '05-12 14:20', firstHi: true },
  { id: 'raya', name: 'RAYA', avatar: 'raya', preview: 'p', time: '05-11 16:31', nameIcon: 'feather', firstHi: true, sharedInterests: ['kpop'], online: true, deco: 'love' },
  { id: 'calista', name: 'calista', avatar: 'calista', preview: 'haha omg then what happened 😭', time: '18m', italic: true, deco: 'stats', yourTurn: true, unread: 1 },
  { id: 'dila', name: 'dila', avatar: 'dila', preview: 'halo', time: '05-09 15:08', nameIcon: 'friends', online: true },
  { id: 'tikaa', name: 'tikaa', avatar: 'tikaa', preview: 'hay', time: '05-09 15:04' },
  { id: 'natasya', name: 'natasya', avatar: 'natasya', preview: 'hai', time: '05-09 15:04', unread: 1, firstHi: true, sharedInterests: ['anime', 'music'], online: true },
  { id: 'caa', name: 'caa', avatar: 'caa', preview: 'hehe kangen sekolah ga ka?', time: '05-09 15:00', nameIcon: 'star' },
  { id: 'ulfah', name: 'ULFAH', avatar: 'ulfah', preview: 'iyah', time: '05-08 20:34', nameIcon: 'star' },
]

export const starLight = [{ id: 'hhhhll', name: 'Hhhhll', avatar: 'hhhhll' }]

// 【召回卡 Continue the journey】堆叠卡组（3 张：随机头像+不同召回文案+星之能量值，后续可改）
export const recallCards = [
  { id: 'rc1', avatar: 'beth', name: 'Bessie', copy: "Don't Let Your Star Fade", stars: 12 },
  { id: 'rc2', avatar: 'natasya', name: 'Warren', copy: 'Keep Your Flame Alive', stars: 20 },
  { id: 'rc3', avatar: 'raya', name: 'Savannah', copy: 'Say Hi Before It Fades', stars: 7 },
]

// 【Star Light 丰富版】带状态装饰（照 6.18 figma「关闭卡片后的效果」）
export const starLightRich = [
  { id: 'sl1', avatar: 'hhhhll', name: 'Bessie', deco: 'count', n: 3 },
  { id: 'sl2', avatar: 'dila', name: 'Savann', deco: 'newpost', online: true },
  { id: 'sl3', avatar: 'blue', name: 'Wade', deco: 'stats' },
  { id: 'sl4', avatar: 'calista', name: 'Nana', online: true },
]
