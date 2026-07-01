import MessageList from './MessageList'

// 案例页内的手机框：等比缩放的真机演示（卡片/横滑/标签等本地交互仍可用；点会话不跳走）
function Phone({ label, sub, tone, variant }) {
  return (
    <div className="sc-phone-col">
      <div className={`sc-tag ${tone}`}>{label}<span>{sub}</span></div>
      <div className="sc-phone">
        <div className="sc-screen"><MessageList nav={() => {}} variant={variant} /></div>
      </div>
    </div>
  )
}

const FEATURES = [
  {
    no: '01',
    name: 'Continue The Journey · 召回卡',
    en: 'Re-engagement card',
    points: [
      ['痛点', '两人若不每天互发消息，Universe Route 的「星」会逐渐褪色甚至熄灭，关系容易悄悄流失，却没有一个轻量的召回触点。'],
      ['方案', '在对话列表顶部放一张可横滑的「堆叠召回卡」(最多 3 张)：头像 + 星之能量值 + “Don\'t let your star fade”，一键 Hi 发颗星续上；✕ 或发星后卡片向左滑出、下一张顶上，三张全关后 Star Light 顺势顶格还原。'],
      ['效果', '给「星之将熄」的关系一个零成本召回入口，降低流失、拉动 Universe Route 的持续互动与留存。'],
    ],
  },
  {
    no: '02',
    name: '同频信号 · 消息前共同兴趣标签',
    en: 'Shared-interest signal',
    points: [
      ['痛点', '约 20% 的首条消息是 “hi / hy / hai” 这类低效开场(男生发给女生居多)，接收方很难判断哪条值得回复，优质关系被淹没。'],
      ['方案', '当低效开场 + 双方有共同兴趣时，在消息前置一枚 ✦ 同频信号标签(单一品牌紫、不依赖 emoji)；点开会话即消失，轻量、不打扰。'],
      ['效果', '把「要不要回」的判断信号前置到列表层，帮接收方一眼筛选，提升冷开场的首次回复率。'],
    ],
  },
]

export default function Showcase({ nav }) {
  return (
    <div className="showcase">
      <header className="sc-hero">
        <div className="sc-kicker">PRODUCT DESIGN · CASE STUDY</div>
        <h1>Pop Up · 对话列表体验改进</h1>
        <p className="sc-lead">
          入职一个月，我主导了对话列表的 <b>两项设计改进</b>。下面是<b>原版</b>与<b>我的版本</b>的真机对比，
          以及每项改进的背景、方案与效果。两台手机都可直接交互。
        </p>
      </header>

      <section className="sc-compare">
        <Phone label="原版" sub="我接手前的产品" tone="before" variant="original" />
        <div className="sc-vs">VS</div>
        <Phone label="我的版本" sub="加入我的 2 项设计" tone="after" variant="enhanced" />
      </section>

      <div className="sc-feats">
        {FEATURES.map(f => (
          <section className="sc-feat" key={f.no}>
            <div className="sc-feat-head">
              <span className="sc-feat-no">{f.no}</span>
              <div>
                <h2>{f.name}</h2>
                <div className="sc-feat-en">{f.en}</div>
              </div>
            </div>
            <div className="sc-grid">
              {f.points.map(([k, v]) => (
                <div className="sc-cell" key={k}>
                  <h4>{k}</h4>
                  <p>{v}</p>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="sc-foot">
        <button className="sc-back" onClick={() => nav('message')}>← 打开可交互工作版</button>
        <span className="sc-sign">Pop Up · 我入职以来的设计存档</span>
      </footer>
    </div>
  )
}
