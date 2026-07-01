# 屏规格 · 私聊 Chat（样板，交互最密）

> 用法：在 Pop Up Prototype 里新建本屏时，把本段连同**这屏的真实截图**一起附给 Claude Design。引用已建好的 Pop Up 设计系统。
> 来源：`src/popup/screens/Chat.jsx`（线上真实行为，逐行核对）。

## 1. 屏身份与导航
- **入口**：对话列表点任一会话行 → 进本屏，带 `peer`（会话 id，默认 `hhhhll`）。
- **出口**（5 个）：
  - 返回箭头 → 对话列表
  - 头像 / 名字 → 对方主页（OtherProfile，带 peer）
  - 土星图标（Satellite）→ 星际之旅（UniverseRoute，带 peer）
  - 右上 `⋯` → 聊天详情（ChatDetails，带 peer）
  - （关系图标本身不跳转）

## 2. 顶栏 Header（自左到右）
返回箭头 ‹ → 红色徽标 `1` → 对方 52px 圆头像 → 名字 → **关系图标**（紫色人形+羁绊符 `#6457E5`）→ 弹簧空白 → **土星图标 Satellite**（SVG：土星环 + 球体渐变 `#efeff4→#b9bac3`）→ `⋯` 三点。
- StatusBar：`time=22:42`、`timeIcon=focus`（月亮）、`battery=31`。

## 3. 消息滚动区
- 新消息进来 / 进屏 → **自动滚到底**。
- 点滚动区空白 → 收起任何已开面板。
- 本 demo 消息**全部右对齐（out）+ 我的头像**，初始 7 条，自上而下：
  1. `post` 动态卡：🪐`2` + flowers 图 + 头像「Joxon」+ 标签 `#PenggunaBaru flowers`
  2. `exchange`：`Masa kecil kamu seperti apa?` + `🔒 Exchange answer` 按钮
  3. `exchange`：`Pilh 1, cakep tapi pelit atau jelek tapi setia?` + `🔒 Exchange answer`
  4. `time` 分隔：`00:02`
  5. `sticker`：星星贴纸
  6. `time` 分隔：`09:57`
  7. `text`：`😀 Morning!`

## 4. 输入栏（双模式，核心交互）
**文字模式（默认）**：
- 左：麦克风图标 → 点击切到**语音模式**（并收面板）。
- 中：输入框，placeholder `Say something`；聚焦时收面板；回车 = 发送。
- 右：**emoji/发送切换符** —— 输入框有内容时显示 `➤`（点=发送），为空时显示 `🙂`（点=开表情面板）。

**语音模式**：
- 左：`⌨` 键盘图标 → 点回文字模式。
- 中：`Press to talk` 长按按钮 —— 按下加 `.rec` 录音态，松开/移出恢复。

**发送行为 `send()`**：非空才发 → 追加一条 `text` 我方气泡 → 清空输入 → **调 `markReplied(peer)`**：把该会话在对话列表的「Your Turn」标记清除（读≠回，必须真回复才消失）。**这是跨屏状态，务必实现。**

## 5. 工具行（输入框下方，6 个图标）
| 顺序 | 图标 | 点击行为 |
|---|---|---|
| 1 | AI 灵感推荐（icAi，**新功能**） | 暂无动作（占位，未来=匹配卡推荐语） |
| 2 | 相机 Camera | 暂无动作 |
| 3 | 相册 Photo | 切换**贴纸面板** sticker（再点关） |
| 4 | 提问 Question | 切换 **Q&A 破冰弹层**（再点关） |
| 5 | 礼物 Gift | 切换**礼物面板** gift |
| 6 | 通话 Call | 打开**语音通话确认框** |

> 工具按钮当前激活的那个加 `on` 高亮态。`toggle(name)`：同名再点 = 收起。

## 6. 面板与弹层
- **礼物 / 表情 / 贴纸面板**（`sheet-img`）：从底部升起的整图面板；点背板关、点面板本体不关（阻止冒泡）。
- **Q&A 破冰弹层**（`qa-overlay`）：标题 `Q&A` → 卡片（我的头像 + `Joxon` + 当前问题 + `↻ change` + 副文 `Answer questions and exchange answers`）→ 底部 `✓ Confirm` 关闭。
  - `↻ change` 在 4 个印尼语问题间循环：
    1. `Hal terseram apa yang pernah kamu alamin?`
    2. `Deskripsikan dirimu dengan 3 kata`
    3. `Gimana kabarnya hari ini?`
    4. `Masa kecil kamu seperti apa?`
- **语音通话确认框**（`confirm-overlay`）：标题 `Voice Call` / 文案 `Confirm to send a voice call?` / `Confirm` 按钮 / `Cancel` 按钮（都关闭）。

## 7. 状态清单（实现需要的 state）
`msgs`（消息数组）· `input`（输入文字）· `panel`（`null|qa|gift|emoji|sticker`，互斥）· `voice`（语音模式开关）· `call`（通话框开关）· `qaIdx`（当前 Q&A 问题下标）。

## 8. 验收点
- [ ] 双模式输入栏可来回切，PTT 按下有录音态。
- [ ] 输入有字 → 右侧变 ➤；发送后清空并滚到底。
- [ ] 发送后回到对话列表，该会话 Your Turn 已消失。
- [ ] 4 面板互斥，点空白都能收。
- [ ] Q&A `↻` 在 4 个印尼语问题间循环。
- [ ] 头像/名字/土星/⋯ 四个跳转正确带 peer。
