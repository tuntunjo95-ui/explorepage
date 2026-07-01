# 屏规格 · 对话列表 MessageList（💬 Tab，App 首屏）

> 来源 `src/popup/screens/MessageList.jsx`。这是交互最复杂的主屏。视觉优先 web-capture `?s=message`。

## 1. 身份与导航
- **底部导航第 4 个 Tab（💬）**，`active=message`。
- 出口：点会话行 → `chat(id)`；点头像 → `other(id)`；右上工具 → `social-tools`；banner → `chat-question`；Star Light「More」→ `starlight`；Star Light 头像 → `chat(avatar)`。
- StatusBar：`time=9:41`、`battery=90`（不显电量数字）。

## 2. 顶栏
左：Message 标题（logo 图）。右：popup 气泡 logo（右上角红点）+ 工具按钮（聊天框+齿轮图标）→ `social-tools`。

## 3. 滚动区（自上而下）
**a) 破冰 banner（可选，默认隐藏，`?cqa=on` 显示）**：浅紫底 `💬 Tired of "Hi"? **Set your chat question now.** →`，右侧 ✕。点 banner → `chat-question`；点 ✕ → 收起 banner（阻止冒泡）。

**b) Continue The Journey 召回卡 + Star Light（JourneyStarLight）**：
- **召回卡堆叠**（前卡 + 背后 2 张旋转露角）：整图卡 `Continue The Journey`。两个热区：关闭(✕) 和 「send hi star」→ 都触发 `dismiss`：当前卡 320ms 飞出 → 换下一张；底部小圆点指示剩余张数。共 3 张（Bessie/Warren/Savannah，不同召回文案 + 星之能量值）。
- **Star Light 行**：标题 `⭐ Star Light` + 4 个头像（带状态装饰：在线绿点 / New Post 紫环胶囊 / 数据徽标 / 计数角标）+ 末尾「›More」。头像点 → `chat(avatar)`；More → `starlight`。
- 整行**可横滑**（触摸原生滚动 / 桌面鼠标拖动）；拖动中不误触点击。

**c) 会话列表（13 行）**，每行 ConvRow：
- **左 52px 头像** + 状态装饰：`online` 绿点 / `deco=love` 爱心相框 / `deco=stats` 数据徽标（柱状图）。点头像 → `other(id)`（阻止冒泡，不进私聊）。
- **中**：名字（800 字重）+ NameMark 角标：`fate`=🪽+数字 / `gem`=💎 / `feather`=🪶 / `friends`=👥 / `star`=☆；`calista` 名字为 **Georgia 斜体**。下方预览灰字。
- **右**：时间 + 未读红标（数字）。
- **左滑**（最多 -80px）→ 露出右侧红色 `Delete`；松手 <-40 吸附到 -80，否则回弹。点 Delete → 二次确认弹窗。
- **点整行** → 标记已读(`markOpened`) + 进 `chat(id)`。

13 行数据（id·名·开场·时间·角标）见线上真实渲染，关键几条：
`Hhhhll`（🪽2，Your Turn，未读2，在线）·`aponmooo`（hi，Gaming 共同兴趣）·`Beth`（hi，New Post）·`RAYA`（🪶，hi，K-pop，爱心框）·`calista`（斜体，Your Turn，数据徽标）·`natasya`（hi，Anime+R&B）等。

## 4. 同频信号（核心功能，默认「轻量」开）
- 命中条件：对方首条是 hi 型低效开场（`firstHi`）**且**与我有共同兴趣（`sharedInterests`）**且**该会话没被点开过。
- 表现（轻量方案锁定版）：预览行**顶头**加 `✦ + 兴趣词` 浅紫胶囊（统一品牌紫星标，不按兴趣分色），给「hi」补语境。
- **点开即消失**：点进该会话再返回 → 标签消失（`localStorage popup_opened_chats`）。走心开场（如 calista）不打标签。

> ⚠️ `MessageList` 里那个底部 **schemebar（现状/轻量/方案1/等A…等C）是内部 A/B 沙盒**，不是产品功能。**复刻到 Claude Design 时去掉它**，默认就用「轻量」。如果你想保留对比，只留「现状 / 轻量」两个即可。

## 5. Your Turn（跨屏状态）
- `yourTurn` 的会话（Hhhhll/calista）表示「轮到我回」。
- 在 `chat` 发出消息后调 `markReplied` → 返回本列表时该会话 Your Turn 标记消失。**读≠回，必须真回复才消失**（`localStorage popup_replied_chats`）。

## 6. 删除确认弹窗
半透明背板 + 白卡：`确认删除与 {名字} 的对话?` + `Cancel` / `Delete`。点 Delete → 移除该会话行；点背板/Cancel → 关闭。

## 7. 状态清单
`convs`（会话数组）·`confirm`（待删会话）·`opened`（已点开 id）·`replied`（已回复 id）·`showCqa`（banner 开关）·每行 `dx`（左滑位移）·召回卡 `cards`。

## 8. 验收点
- [ ] 左滑露红 Delete → 确认弹窗 → 行消失。
- [ ] hi+共同兴趣会话显示 ✦ 兴趣胶囊；点进再返回 → 消失。
- [ ] Your Turn 会话在私聊回复后，返回列表标记消失。
- [ ] 召回卡可一张张关掉；Star Light 可横滑。
- [ ] 点头像进对方主页、点行进私聊（两者不串）。
- [ ] schemebar 已移除（或只留 现状/轻量）。
